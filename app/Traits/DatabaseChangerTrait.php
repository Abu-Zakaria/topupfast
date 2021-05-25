<?php

namespace App\Traits;

use App\Models\Shop;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

trait DatabaseChangerTrait {
    public function __construct(){

        if (Auth::check() && Auth::user()->shop && Auth::user()->shop->status == 1) {
            $user = Auth::user();
            $shopInfo = Shop::find($user->shop_id);

            Config::set('database.connections.tenant.database', $shopInfo->database);
            Config::set('database.connections.tenant.username', $shopInfo->username);
            Config::set('database.connections.tenant.password', $shopInfo->password);

            Config::set('database.default', 'tenant');
            dd(User::find(Auth::id()));
        }
    }
}