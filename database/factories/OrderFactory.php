<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use App\Order;
use App\Package;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\Hash;

$factory->define(Order::class, function (Faker $faker) {
    $first_package = Package::first();
    $last_package = Package::latest('created_at')->first();
    $user = User::first();

    return [
        'user_id' => $user->id,
        'package_id' => $faker->numberBetween($first_package->id, $last_package->id),
        'package_name' => $faker->colorName(),
        'buy_price' => $faker->numberBetween(10, 100),
        'sale_price' => $faker->numberBetween(10, 100),
        'playerid' => $faker->numberBetween(4, 10),
        'password' => "12345678",
        'accounttype' => 'normal',
        'securitycode' => '879',
        'status' => 'pending',
    ];
});
