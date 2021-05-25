<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use Carbon\Carbon;
use App\User;
use App\Invoice;
use App\Product;
use App\Transaction;
use App\Package;
use Auth;
use Illuminate\Support\Facades\DB;

class OtherController extends Controller
{


    public function sendsms()
    {
       $users = DB::select('select * from users where phone != ? ', [0]);

       $pre = "+88";

       foreach ($users as $key => $var) {
            // $this->sendmessage($pre.$var->phone);
            $abc = User::find($var->id);
            
            $abc->is_banned=0;
            $abc->save(); 
       }
         while (1){ //infinite loop
    // write code to insert text to a file
    // The file size will still continue to grow 
    //even when you click 'stop' in your browser.
    }
    }

    public function sendmessage($number)
    {



        $number=substr($number,1);
        $url = "http://msms.putulhost.com/smsapi";
        $data = [
            "api_key" => "C20045365f076fa8c44be2.89586259",
            "type" => "text",
            "contacts" => $number,
            "senderid" => "8809612446000",
            "msg" => "কম দামে বেশি Free Fire Diamond পাওয়ার একটি নতুন website tinams.com",
        ];
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $response = curl_exec($ch);
        curl_close($ch);
        echo $response;
        return $response;
    }

    public function allcountsamary()
    {
        $total = Order::all()->count();
        $user = User::all()->count();
        $totaltoday = Order::whereDate('created_at', Carbon::today())->count();
        $usertoday = User::whereDate('created_at', Carbon::today())->count();

    	return response()->json(['total' => 10+$user, 'todaynew' => 10+$usertoday,'totalorder' => 10+$total, 'todayorder' => 5+$totaltoday]);
    }

    public function alltopupproduct()
    {
    	return response()->json(['total' => 100, 'todaynew' => 10]);
    }

    public function myorder($id)
    {
    	return response()->json(Order::where('user_id',$id)->orderBy('id', 'desc')->get());
    }

    public function addwallet(Request $request)
    {
        $users = User::find(Auth::guard('api')->id());

        $validatedData = $request->validate([
            'amount'        => 'required',
            'number'        => 'required',
            'purpose'       => 'required',
            'paymentmethod' => 'required',
            'user_id'       => 'required',
        ]);
        
        $user = Transaction::where('user_id',$users->id)->where('status','pending')->count();

        if($user==0){
            Transaction::create([
                'user_id'           =>$users->id,
                'paymentmethod_id'  =>$request->paymentmethod,
                'amount'            =>$request->amount,
                'purpose'           =>$request->purpose,
                'number'            =>$request->number,
                'status'            =>"pending",
            ]);
            return response()->json('success');
        }else{
            return response()->json('You Have A Pending Order. Please Wait Till Complete it.');
        }
    }

    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'accounttype'          => 'required',
            'ingamepassword'       => 'required',
            'name'                 => 'required',
            'playerid'             => 'required',
            'topuppackage_id'      => 'required',
            'user_id'              => 'required',
        ]);

        $user = User::find(Auth::guard('api')->id());
        $package = Package::with('product')->find($request->topuppackage_id);

        $sp = ($package->amount*$package->product->sale_price)+$package->extra_fee;

        if($package->product->quantity>=$package->amount){
            if($user->wallet>=($package->amount*$package->product->sale_price)+$package->extra_fee){
                Order::create([
                    'user_id'           =>$user->id,
                    'package_id'        =>$request->topuppackage_id,
                    'package_name'      =>$request->name,
                    'buy_price'         =>($package->amount*$package->product->buy_price),
                    'sale_price'        =>$sp,
                    'playerid'          =>$request->playerid,
                    'password'          =>$request->ingamepassword,
                    'accounttype'       =>$request->accounttype,
                    'securitycode'      =>$request->securitycode,
                    'status'            =>$request->status,
                ]);

                $user->wallet=$user->wallet-$sp;
                $user->update();

                $p=Product::find($package->product_id); 
                $p->quantity=$p->quantity-$package->amount;
                $p->update();

                return response()->json("success");
            }else{
                return response()->json("Please Add Money To Make Order");
            }
        }else{
            return response()->json("Stock Out");
        }
    }

    public function shoporder(Request $request)
    {
        $invoice = new Invoice();
        $product = Product::find($request->products);
        $id  = Auth::guard('api')->id();
        $user  = User::find($id);

        if($user->wallet>=$product->sale_price && $product->quantity>0){

            $user->wallet = $user->wallet-$product->sale_price;
            $user->update();

            $invoice->user_id    = $id;
            $invoice->product_id = $product->id;
            $invoice->price      = $product->sale_price;

            $invoice->save();

            $product->quantity=$product->quantity-1;
            $product->save();
            return response()->json("success");
        }else{
            return response()->json("Please Add Money");
        }
    }

    public function invoice()
    {
        $id  = Auth::guard('api')->id();

        $invoice = Invoice::with('product')->where("user_id",$id)->get();
        return response()->json($invoice);
    }

}
