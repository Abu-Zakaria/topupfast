<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Notifications\ResetPasswordNotification;
class User extends Authenticatable implements MustVerifyEmail
{
		use HasApiTokens,Notifiable;
		/**
		 * The attributes that are mass assignable.
		 *
		 * @var array
		 */ 
		

		protected $guarded = [];

		/**
		 * The attributes that should be hidden for arrays.
		 *
		 * @var array
		 */
		protected $hidden = [
				'password', 'remember_token',
		];

		/**
		 * The attributes that should be cast to native types.
		 *
		 * @var array
		 */
		protected $casts = [
				'email_verified_at' => 'datetime',
		];

		// public function sendPasswordResetNotification($token)
		// {
		//     $this->notify(new ResetPasswordNotification($token));
		// }
}
