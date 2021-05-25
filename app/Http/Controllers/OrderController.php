<?php

namespace App\Http\Controllers;

use App\Order;
use App\User;
use App\Product;
use App\Package;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use Auth;

class OrderController extends Controller
{
    public function index()
    {
        $id = Request::all('order_id');
        $user_id = Request::all('user_id');
        $status = Request::all('status');
        $start_date = Request::all('start_date');
        $end_date = Request::all('end_date');
        $result = Order::with('package')->with('user');
        $result1 = Order::query();
      

        if ($id['order_id']!=NULL) {
            $result = $result->where('id', $id);
            $result1 = $result1->where('id', $id);
        }

        if ($status['status']!=NULL) {
            $result = $result->where('status', $status);
            $result1 = $result1->where('status', $status);
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

        $totalbuy = $result1->where('status','!=','cancel')->sum('buy_price');
        $totalsale = $result1->where('status','!=','cancel')->sum('sale_price');

        return Inertia::render('Order/Index', [
            'filters'       => Request::all('user_id'),
            'totalbuy'      => $totalbuy,
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

    public function create()
    {
        return Inertia::render('Package/Create');
    }

    public function store()
    {

        $validatedData = Request::validate([
            'accounttype'          => 'required',
            'ingamepassword'       => 'required',
            'name'                 => 'required',
            'playerid'             => 'required',
            'topuppackage_id'      => 'required',
            'user_id'              => 'required',
        ]);

        $user = User::find(Auth::guard('api')->id());
        $package = Package::find($request->topuppackage_id);

        if($user->wallet>=$package->sale_price){
            Order::create([
                'user_id'           =>$user->id,
                'package_id'        =>$request->topuppackage_id,
                'package_name'      =>$request->name,
                'buy_price'         =>$request->buy_price,
                'sale_price'        =>$request->sale_price,
                'playerid'          =>$request->playerid,
                'password'          =>$request->accounttype,
                'accounttype'       =>$request->ingamepassword,
                'securitycode'      =>$request->securitycode,
                'status'            =>$request->status,
            ]);

            $user->wallet=$user->wallet-$package->sale_price;
            $user->update();
            return response()->json("success");
        }else{
            return response()->json("Please Add Money To Make Order");
        }
    }

    public function edit(Package $package)
    {
        return Inertia::render('Package/Edit',[
            'package'=>$package
        ]);
    }

    public function update()
    {
        $aaaaaaaaaaaa  = Order::find(Request::all()['id']);
        if(Request::all()['status']=='cancel'){

            $package = Package::find($aaaaaaaaaaaa->package_id);

            $product = Product::find($package->product_id);

            $product->quantity= $product->quantity+$package->amount;
            $product->update();

            $user   = User::find($aaaaaaaaaaaa->user_id);
            $user->wallet = $user->wallet+$aaaaaaaaaaaa->sale_price;
            $user->update();
        }
        $aaaaaaaaaaaa->status=Request::all()['status'];
        $aaaaaaaaaaaa->update();
        return redirect()->back()->with('success', 'Order Update successfully!');
    }

    public function destroy(Package $package)
    {
        $package->forceDelete();return redirect()->back()->with('success', 'Package Deleted successfully!');
    }
}
