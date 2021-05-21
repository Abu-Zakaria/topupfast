<?php

namespace App\Support;

use App\Models\Shop;
use App\Models\Subscription;
use App\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ShopSupport
{
    public static function create(Subscription $subscription)
    {
        $shop = Shop::create([
            'id' => $subscription->id,
            'name' => $subscription->shop_name,
            'slug' => Str::slug($subscription->shop_name, '-'),
            'logo' => $subscription->shop_logo,
            'phone' => $subscription->shop_phone,
            'email' => $subscription->shop_email,
            'address' => $subscription->shop_address,

            'database' => $subscription->shop_database,
        ]);
    }


    public static function destroy(Subscription $subscription)
    {
        return Shop::where('database', '=', $subscription->shop_database)->delete();
    }


    public static function createShopAdmin(User $user)
    {
        return DB::table('users')->insert([
            'id' => $user->id,
            'name' => $user->name,
            'slug' => $user->slug,
            'phone' => $user->phone,
            'email' => $user->email,
            'connection' => 'tenant',
            'gender_id' => $user->gender_id,
            'birth_date' => $user->birth_date,
            'blood_group_id' => $user->blood_group_id,
            'religion_id' => $user->religion_id,
            'subscription_id' => $user->subscription_id,
            'role_id' => $user->role_id,
            'password' => $user->password,
            'created_at' => $user->created_at,
        ]);
    }
}
