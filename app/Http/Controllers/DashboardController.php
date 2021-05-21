<?php

namespace App\Http\Controllers;

use App\User;
use App\Order;
use App\Transaction;
use App\Invoice;
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

        $orders = Order::all()->count();
        $users = User::all()->count();
        $ordertoday = Order::whereDate('created_at', Carbon::today())->count();
        $usertoday = User::whereDate('created_at', Carbon::today())->count();
        $wallet = User::sum('wallet');
        $tenorder = Order::orderBy('id', 'desc')->take(10)->get();
        $invoice = Invoice::orderBy('id', 'desc')->take(10)->get();
        $tenwallet = Transaction::with('paymentmethod')->orderBy('id', 'desc')->take(10)->get();

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
        ]);
    }

}

