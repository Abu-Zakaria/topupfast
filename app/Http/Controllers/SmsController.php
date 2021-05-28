<?php

namespace App\Http\Controllers;

use App\User;
use Request;
use Inertia\Inertia;

class SmsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $users = User::query()->get();
      return Inertia::render('Sms/Index',[
        'users' => $users,
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

    public function sendMessage(Request $request){
      $users = Request::all('users')['users'];
      $message = Request::all('message')['message'];

      $messageType = "SMS:TEXT";
      $config = [];
      $messageCount = 0;
      if (!empty($message)){
        foreach ($users as $k => $user){
          if ($user['phone']) {
            $config["recipient".$k] = $user['phone'];
            $config["messagedata".$k] = $message;
            $config["messagetype".$k] = $messageType;
            $messageCount++;
          }
        }
      }
      $config['messagecount'] = $messageCount;
      if ($messageCount){
        $this->sms($config);
        echo "Successfully Send Message";
      }else{
        echo "Not Send Message Please Later! Thanks";
      }

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
      //$data['messagetype'] = "SMS:TEXT";
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
