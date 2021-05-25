<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Response;
use Inertia\Inertia;
use Illuminate\Support\Facades\Password;
use App\User;
use Illuminate\Support\Facades\Hash;

class ForgotPasswordController extends Controller
{
		/*
		|--------------------------------------------------------------------------
		| Password Reset Controller
		|--------------------------------------------------------------------------
		|
		| This controller is responsible for handling password reset emails and
		| includes a trait which assists in sending these notifications from
		| your application to your users. Feel free to explore this trait.
		|
		*/

		use SendsPasswordResetEmails;

		/**
		 * Create a new controller instance.
		 *
		 * @return void
		 */
		public function __construct()
		{
				$this->middleware('guest');
		}

	/**
	 * Display the form to request a password reset link.
	 *
	 * @return \Inertia\Response
	 */
		public function showLinkRequestForm()
		{
			return Inertia::render('Auth/Email');
		}


		public function forgot() {
	        $credentials = request()->validate(['email' => 'required|email']);
	        Password::sendResetLink($credentials);	
	        return response()->json(["msg" => 'Reset password link sent on your email id.']);
	    }


	  public function reset() {
        $credentials = request()->validate([
            'email' => 'required|email',
            'token' => 'required|string',
            'password' => 'required|string|confirmed'
        ]);


        $obj = [
        	'email' => $credentials['email'],
            'token' => $credentials['token'],
            'password' => Hash::make($credentials['password']),
        ];

        $reset_password_status = Password::reset($obj, function ($user, $password) {
            $user->password = $password;
            $user->save();
        });

        if ($reset_password_status == Password::INVALID_TOKEN) {
            return response()->json('Invalid token provided', 400);
        }

        return response()->json('Password has been successfully changed please to to www.tinams.com and login');
    }
}
