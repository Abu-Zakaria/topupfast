<?php

namespace App\Http\Controllers\Seller;

use App\Order;
use App\Product;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $id = Request::all('order_id');
        $user_id = Request::all('user_id');
        $status = Request::all('status');
        $accounttype = Request::all('accounttype');
        $start_date = Request::all('start_date');
        $end_date = Request::all('end_date');
        $accept_id = Request::all('accept_id');
        $product_id = Request::all('product_id');
        
        $result = Order::where('accept_id', auth()->user()->id)
                        ->where('status', '!=', 'pending')
                        ->with('package')->with('user')->with("accept_by");
        $result1 = Order::query();

        if ($id['order_id']!=NULL) {
            $result = $result->where('id', $id);
            $result1 = $result1->where('id', $id);
        }

        if ($status['status']!=NULL) {
            $result = $result->where('status', $status);
            $result1 = $result1->where('status', $status);
        }

        if ($accounttype['accounttype']!=NULL) {
            $result = $result->where('accounttype', $accounttype);
            $result1 = $result1->where('accounttype', $accounttype);
        }

        if ($user_id['user_id']!=NULL) {
            $result = $result->where('user_id', $user_id);
            $result1 = $result1->where('user_id', $user_id);
        }

        if ($start_date['start_date']!=NULL) {
            $start_date['start_date'] = str_replace('/', '-', $start_date['start_date']);
            $start_date['start_date'] = date('Y-m-d', strtotime($start_date['start_date']));
            $result = $result->where('created_at','>=',$start_date['start_date']);
            $result1 = $result1->where('created_at','>=',$start_date['start_date']);
        }

        if ($end_date['end_date']!=NULL) {
            $end_date['end_date'] = str_replace('/', '-', $end_date['end_date']);
            $end_date['end_date'] = date('Y-m-d', strtotime($end_date['end_date']));
            $result = $result->where('created_at','<=',$end_date['end_date']);
            $result1 = $result1->where('created_at','<=',$end_date['end_date']);
        }

        if ($accept_id['accept_id']!=NULL) {
          $result = $result->where('accept_id', $accept_id);
          $result1 = $result1->where('accept_id', $accept_id);
        }

        if ($product_id['product_id']!=NULL) {

          $products = Product::where('id','like','%'.$product_id['product_id'].'%')->with('package')->get();

          $package_ids = [];
          foreach ($products as $product){
            $package_ids[] = $product->package->id;
          }
          $result = $result->whereIn('package_id', $package_ids);
          $result1 = $result1->whereIn('package_id', $package_ids);
        }

        $totalsale = $result->where('status','!=','cancel')->sum('sale_price');
        
        return Inertia::render('Seller/MyOrders/Index', [
            'filters'       => Request::all('user_id'),
            'totalsale'     => $totalsale,
            // 'orders'        => $result->orderBy('id','DESC')
            'orders'        => $result
                ->orderByRaw("CASE status
                                WHEN \"pending\" THEN 1
                                WHEN \"complete\" THEN 2
                                WHEN \"cancel\" THEN 3
                                END
                            ")
                ->paginate(),
        ]);
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
        //
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
        //
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
