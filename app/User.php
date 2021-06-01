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

		public function gender()
		{
			return $this->belongsTo(\App\Models\Users\Gender::class);
		}

		public function religion()
		{
			return $this->belongsTo(\App\Models\Users\Religion::class);
		}

		public function blood_group()
		{
			return $this->belongsTo(\App\Models\Users\BloodGroup::class);
		}

		public function role()
		{
			return $this->belongsTo(\App\Models\Users\Role::class);
		}

		public function getOrdersWalletBalance()
		{
			if($this->is_admin == 1)
			{
				return false;
			}
			$total_income = 0;
			$orders = Order::where('accept_id', $this->id)->where('status', 'complete')->get();

			foreach($orders as $order)
            {
                $total_income += $order->seller_commission;
            }
            $withdraw_amount = WithdrawOrder::where('user_id', auth()->user()->id)
						                        ->where('status', 'approved')
						                        ->sum('withdraw_amount');
            return $total_income - $withdraw_amount;
		}

		public function getTransactionsWalletBalance()
		{
			if($this->is_admin == 1)
			{
				return false;
			}
			$total_income = 0;
			$transactions = Transaction::where('accept_id', $this->id)->where('status', 'complete')->get();

			foreach($transactions as $transaction)
            {
                $total_income += $transaction->amount;
            }
            $withdraw_amount = WithdrawTransaction::where('user_id', auth()->user()->id)
						                        ->where('status', 'approved')
						                        ->sum('withdraw_amount');
            return $total_income - $withdraw_amount;
		}
}
