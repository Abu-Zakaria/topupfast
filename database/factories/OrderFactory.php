<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Order;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\Hash;

$factory->define(Order::class, function (Faker $faker) {
    return [
        'user_id' => 4,
        'package_id' => 1,
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
