<?php

namespace App\Http\Controllers;

use App\User;
use App\Order;
use App\Transaction;
use App\WithdrawTransaction;
use App\Invoice;
use App\WithdrawOrder;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    // Dashboard - Analytics
    public function index(){
        $pageConfigs = [
            'pageHeader' => false,
        ];

        if(auth()->user()->is_admin == 2) // for sellers
        {
            $invoice = Invoice::orderBy('id', 'desc')->where('user_id', auth()->user()->id)->take(10)->get();
        }
        else
        {
            $invoice = Invoice::orderBy('id', 'desc')->take(10)->get();
        }
        $orders = Order::all()->count();
        $users = User::all()->count();
        $ordertoday = Order::whereDate('created_at', Carbon::today())->count();
        $usertoday = User::whereDate('created_at', Carbon::today())->count();
        $wallet = User::sum('wallet');
        $tenorder = Order::orderBy('id', 'desc')->with('accept_by')->take(10)->get();
        $tenwallet = Transaction::with('paymentmethod')->with('accept_by')->orderBy('id', 'desc')->take(10)->get();

        $seller_wallet = 0;
        $withdraw_orders_amount = 0;
        // if user is a seller
        $today_orders = '';
        $total_orders = '';
        $transaction_wallet = '';
        $withdraw_transactions_amount = '';
        if(auth()->user()->is_admin == 2)
        {
            $seller_wallet = auth()->user()->getOrdersWalletBalance();
            $withdraw_orders_amount = WithdrawOrder::where('user_id', auth()->user()->id)
                                            ->where('status', 'approved')
                                            ->sum('withdraw_amount');

            $today_orders = Order::where('accept_id', auth()->user()->id)
                                ->where('status', 'complete')
                                ->where('action_date', date('Y-m-d', time()))
                                ->count();

            $total_orders = Order::where('accept_id', auth()->user()->id)
                                ->where('status', 'complete')
                                ->count();

            $transaction_wallet = auth()->user()->getTransactionsWalletBalance();
            $withdraw_transactions_amount = WithdrawTransaction::where('user_id', auth()->user()->id)
                                            ->where('status', 'approved')
                                            ->sum('withdraw_amount');
        }

        return Inertia::render('Dashboard', [
	       	'pageConfigs' 	=> $pageConfigs,
	        'users' 		=> $users,
	        'orders' 		=> $orders,
	        'ordertoday' 	=> $ordertoday,
	        'usertoday' 	=> $usertoday,
            'wallet'        => $wallet,
            'tenorder'      => $tenorder,
            'invoice'       => $invoice,
	        'tenwallet' 	=> $tenwallet,
            'seller_wallet' => $seller_wallet,
            'withdraw_orders_amount'   => $withdraw_orders_amount,
            'today_orders'  => $today_orders,
            'total_orders'  => $total_orders,
            'transaction_wallet' => $transaction_wallet,
            'withdraw_transactions_amount' => $withdraw_transactions_amount,
        ]);
    }

}

