<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\DatabaseConnection;
use App\Http\Controllers\Controller;
use App\Models\Shop;
use App\Models\Subscription;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class LoginController extends Controller
{
  /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

  use AuthenticatesUsers;

  /**
   * Where to redirect users after login.
   *
   * @var string
   */
  protected $redirectTo = '/';

  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
    $this->middleware('guest')->except('logout');
  }

  /**
   * Show the application's login form.
   *
   * @return \Inertia\Response
   */
  public function showLoginForm()
  {
    return Inertia::render('Auth/Login');
  }

  /**
   * Get the login username to be used by the controller.
   *
   * @return string
   */
  public function username()
  {
    $login = request()->input('email');

    $field = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'phone';
    request()->merge([$field => $login]);

    return $field;
  }


  /**
   * The user has been authenticated.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  mixed  $user
   * @return mixed
   */
  protected function authenticated(Request $request, $user)
  {
  }


  /**
   * The user has logged out of the application.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return mixed
   */
  protected function loggedOut(Request $request)
  {
    Config::set('database.default', 'mysql');
    DB::purge('mysql');
    DB::reconnect('mysql');
  }
}
