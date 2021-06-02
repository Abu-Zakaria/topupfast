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
        $accounttype = Request::all('accounttype');
        $start_date = Request::all('start_date');
        $end_date = Request::all('end_date');
        $accept_id = Request::all('accept_id');
        $product_id = Request::all('product_id');
        $result = Order::with('package')->with('user')->with("accept_by");
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
            if($product->package)
            {
              $package_ids[] = $product->package->id;
            }
          }
          $result = $result->whereIn('package_id', $package_ids);
          $result1 = $result1->whereIn('package_id', $package_ids);
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
      'orders'        => $result->orderBy('id','DESC')
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
    $order  = Order::find(Request::all()['id']);
    if($order->accept_id != 0 && $order->status == 'pending' && $order->accept_id != auth()->user()->id)
    {
      return redirect()->back()->with('error', 'Someone else took the order!');
    }
    $user   = User::find($order->user_id);
    if(Request::all()['status']=='cancel'){

      $package = Package::find($order->package_id);

      $product = Product::find($package->product_id);

      $product->quantity= $product->quantity+$package->amount;
      $product->update();


      $user->wallet = $user->wallet+$order->sale_price;
      $user->update();
    }
    if(request()->status != 'pending')
    {
      $order->action_date = date('Y-m-d', time());
    }
    $order->status=Request::all()['status'];
    $order->comment=Request::all()['comment'];
    $order->update();

    $p_data = Request::all();

    $diff_status = $p_data['status_type'] ?? '';
    $order_comment = $p_data['comment'] ?? '';
    $message = "Hello ".$user->name.",\n\n";
    $con_message = "";
    switch ($diff_status){
      case 'delivery_done':
        $con_message = "Your order No ".$order->id." is now Completed. Please leave a review.\n\nStay with https://TopupFast.Com for Cheap Price and Fast Delivery.";
        break;
      case 'delivery_id_code':
        $con_message = "Your order No ".$order->id." is now Completed. Please Change Your Password for safety.\n\nStay with https://TopupFast.Com for Cheap Price and Fast Delivery.";
        break;
      case 'cancel_for_no_bonus_id':
        $con_message = "Your Order No ".$order->id." Has been Canceled. There are no bonus in this ID Code.\n\nhttps://TopupFast.Com";
        break;
      case 'cancel_for_incorrect_id_pass':
        $con_message = "Your Order No ".$order->id." Has been Canceled. You have submitted the wrong ID and password.\n\nhttps://TopupFast.Com";
        break;
      case 'cancel_for_wrong_security_code':
        $con_message = "Your Order No ".$order->id." Has been Canceled. You have submitted the wrong code.\n\nhttps://TopupFast.Com";
        break;
      default:
        $con_message = "";
    }

    if (!empty($order_comment)){
      $this->sms(["recipient"=>$user->phone,"messagedata"=>$order_comment]);
    }elseif(!empty($con_message)){
      $f_message = $message . $con_message;
      $this->sms(["recipient"=>$user->phone,"messagedata"=>$f_message]);
    }
    return redirect()->back()->with('success', 'Order Update successfully!');
  }

  public function destroy(Package $package)
  {
    $package->forceDelete();return redirect()->back()->with('success', 'Package Deleted successfully!');
  }


  /**
   * write by farjan
   * for sending sms method
   * @data params array
   */
  private function sms($data,$url = "http://sentsms.best:8081/api"){
    if (count($data) == 0) {
      return "Invalid Information!!";
    }
    try{

      $data['action'] = "sendmessage";
      $data['messagetype'] = "SMS:TEXT";
      $data['username'] = "moshiur599";
      $data['password'] = "moshiur599";

      $ch = curl_init($url);

      if ($ch === false) {
        //throw new Exception('failed to initialize');
      }

      curl_setopt($ch,CURLOPT_CUSTOMREQUEST, "POST");
      curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch,CURLOPT_FOLLOWLOCATION, 1);
      curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
      curl_setopt($ch, CURLOPT_TIMEOUT, 45);
      curl_setopt($ch,CURLOPT_POSTFIELDS, http_build_query($data));
      $d = curl_exec($ch);
      if ($d === false) {
        //throw new Exception(curl_error($ch), curl_errno($ch));
      }
      curl_close($ch);
      return $d;
    }catch(Exception $e){
      //return $e->getMessage();
    }
  }


}
