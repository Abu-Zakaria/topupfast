<?php

namespace App\Http\Controllers;

use App\Transaction;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use Auth;
use App\User;
use Redirect;

class TransactionController extends Controller
{
  public function index()
  {
    $transaction = Transaction::orderBy('id','DESC')->paginate(10);

    $user_id = Request::all('user_id');
    $number = Request::all('number');
    $status = Request::all('status');
    $start_date = Request::all('start_date');
    $end_date = Request::all('end_date');
    $result = Transaction::with('paymentmethod')->with('accept_by');
    $result1 = Transaction::with('paymentmethod')->with('accept_by');

    // if(auth()->user()->is_admin == 2)
    // {
    //   $result->where('user_id', auth()->user()->id);
    //   $result1->where('user_id', auth()->user()->id);
    // }

    if ($user_id['user_id']!=NULL) {
      $result = $result->where('user_id', $user_id);
      $result1 = $result1->where('user_id', $user_id);
    }

    if ($number['number']!=NULL) {
      $result = $result->where('number', $number);
      $result1 = $result1->where('number', $number);
    }

    if ($status['status']!=NULL) {
      $result = $result->where('status', $status);
      $result1 = $result1->where('status', $status);
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

    $amount = $result1->where('status','!=','cancel')->sum('amount');

    return Inertia::render('Transaction/Index',[
      'filters'   => Request::all('user_id'),
      'amount'    => $amount,
      'transaction'    => $result->orderBy('id','DESC')
        ->paginate(),
    ]);
  }

  public function create()
  {
    return Inertia::render('Package/Create');
  }

  public function store()
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

  public function edit(Package $package)
  {
    return Inertia::render('Package/Edit',[
      'package'=>$package
    ]);
  }

  public function update()
  {
    $id = Request::all()['id'];
    $transaction = Transaction::find($id);

    $user = User::find($transaction->user_id);

    if(Request::all()['status']=='complete'){

      $user->wallet= $user->wallet+$transaction->amount;
      $user->save();

    }
    $transaction->status=Request::all()['status'];
    $transaction->accept_id = auth()->user()->id;
    $transaction->comment = Request::all()['comment'];
    $transaction->save();

    if (Request::all()['status'] == 'cancel') {
      $message = "Hello ".$user->name.",\n\nSorry we cannot verify your payment. Please contact(Whatsapp) on our support to know more.";
      $this->sms(["recipient"=>$user->phone,"messagedata"=>$message]);
    }elseif(Request::all()['status'] == 'complete'){
      $message = "Hello ".$user->name.",\n\nYour ".$transaction->amount." Taka has been added to your wallet. You Can Place Order Now.";
      $this->sms(["recipient"=>$user->phone,"messagedata"=>$message]);
    }

    return redirect()->back()->with('success', 'Transaction Updated successfully!');
  }

  public function destroy(Package $package)
  {
    $package->forceDelete();return redirect()->back()->with('success', 'Package Deleted successfully!');
  }

  public function mytransaction($id)
  {
    return response()->json(Transaction::where('user_id',$id)->get());
  }

  public function canclealltransaction()
  {
    $transaction = Transaction::where('status','pending')->get();
    foreach ($transaction as $key => $var) {
      $value=Transaction::find($var->id);
      $value->status='cancel';
      $value->update();
    }
    return Redirect::back();
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
      // return $e->getMessage();
    }
  }


}
