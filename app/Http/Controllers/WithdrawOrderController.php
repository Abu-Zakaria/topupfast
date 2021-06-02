<?php

namespace App\Http\Controllers;

use App\WithdrawOrder;
use App\User;
use Illuminate\Http\Request;

class WithdrawOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $requests = []; $wallet_balance;

        $response_data = [];

        if(auth()->user()->is_admin == 1)
        {
            if(request()->has('user'))
            {
                $user_ids = User::where('name', 'like', '%' . request()->user . '%')
                                ->pluck('id');

                $requests = WithdrawOrder::where('status', 'pending')
                                        ->whereIn('user_id', $user_ids)
                                        ->with('user');
            }
            else
            {
                $requests = WithdrawOrder::orderByRaw("CASE status
                                WHEN \"pending\" THEN 1
                                WHEN \"approved\" THEN 2
                                WHEN \"cancel\" THEN 3
                                END
                            ");
                $requests->with('user');
            }
        }
        else if(auth()->user()->is_admin == 2)
        {
            $requests = WithdrawOrder::where('user_id', auth()->user()->id)
                                        ->orderByRaw("CASE status
                                            WHEN \"pending\" THEN 1
                                            WHEN \"approved\" THEN 2
                                            WHEN \"cancel\" THEN 3
                                            END
                                        ")
                                        ->latest();
            $wallet_balance = auth()->user()->getOrdersWalletBalance();
            $response_data['wallet_balance'] = $wallet_balance;
        }

        $response_data['requests'] = $requests->paginate();

        return inertia()->render('WithdrawOrder/Index', $response_data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $exists = WithdrawOrder::where('user_id', auth()->user()->id)->where('status', 'pending')->first();

        if($exists)
        {
            return redirect()->route('withdraw_orders.index')
                    ->with(
                        'error',
                        "You already have a pending withdraw request. You can't submit a request now."
                    );
        }

        $wallet_balance = auth()->user()->getOrdersWalletBalance();

        $validated = $request->validate([
            'amount' => 'required|integer|min:1|max:' . $wallet_balance,
            'comment' => 'max:125',
        ]);

        $amount = $validated['amount'];
        $comment = $validated['comment'];

        WithdrawOrder::insert([
            'user_id'   => auth()->user()->id,
            'withdraw_amount'    => $amount,
            'seller_comment'    => $comment,
            'status'    => 'pending',
            'admin_id'  => 0,
            'created_at' => date('Y-m-d H:i:s', time()),
        ]);

        return redirect()->route('withdraw_orders.index')
            ->with('success', "Successfully submitted your Withdraw Order Request!");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if(auth()->user()->is_admin != 1)
        {
            return redirect()->route('withdraw_orders.index')
                    ->with('error', "You can't perform that action!");
        }

        $validated = $request->validate([
            'status' => 'required',
            'comment' => 'max:120',
        ]);

        $status = $validated['status'];
        $comment = $validated['comment'];

        WithdrawOrder::find($id)->update([
            'status' => $status,
            'admin_comment' => $comment,
        ]);

        if($validated['status'] == 'approved')
        {
            $response_type = 'success';
            $response_text = "Successfully approved the withdraw order request";
        }
        else
        {
            $response_type = 'error';
            $response_text = "Declined the withdraw order request";
        }

        return redirect()->route('withdraw_orders.index')
                ->with($response_type, $response_text);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
