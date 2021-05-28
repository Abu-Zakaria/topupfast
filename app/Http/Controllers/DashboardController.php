<?php

namespace App\Http\Controllers;

use App\User;
use App\Order;
use App\Transaction;
use App\Invoice;
use App\WithdrawRequest;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    // Dashboard - Analytics
    public function index(){
        $pageConfigs = [
            'pageHeader' => false,
        ];

        if(auth()->user()->is_admin == 2) // for sellers
        {
            $invoice = Invoice::orderBy('id', 'desc')->where('user_id', auth()->user()->id)->take(10)->get();
        }
        else
        {
            $invoice = Invoice::orderBy('id', 'desc')->take(10)->get();
        }
        $orders = Order::all()->count();
        $users = User::all()->count();
        $ordertoday = Order::whereDate('created_at', Carbon::today())->count();
        $usertoday = User::whereDate('created_at', Carbon::today())->count();
        $wallet = User::sum('wallet');
        $tenorder = Order::orderBy('id', 'desc')->with('accept_by')->take(10)->get();
        $tenwallet = Transaction::with('paymentmethod')->orderBy('id', 'desc')->take(10)->get();

        $seller_wallet = 0;
        $withdraw_amount = 0;
        // if user is a seller
        if(auth()->user()->is_admin == 2)
        {
            $seller_wallet = auth()->user()->getWalletBalance();
            $withdraw_amount = WithdrawRequest::where('user_id', auth()->user()->id)
                                            ->where('status', 'approved')
                                            ->sum('withdraw_amount');
        }

        return Inertia::render('Dashboard', [
	       	'pageConfigs' 	=> $pageConfigs,
	        'users' 		=> $users,
	        'orders' 		=> $orders,
	        'ordertoday' 	=> $ordertoday,
	        'usertoday' 	=> $usertoday,
            'wallet'        => $wallet,
            'tenorder'      => $tenorder,
            'invoice'       => $invoice,
	        'tenwallet' 	=> $tenwallet,
            'seller_wallet' => $seller_wallet,
            'withdraw_amount'   => $withdraw_amount,
        ]);
    }

}

