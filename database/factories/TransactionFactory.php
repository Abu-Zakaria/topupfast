<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Transaction;
use App\User;
use Faker\Generator as Faker;

$factory->define(Transaction::class, function (Faker $faker) {
    $user = User::first();

    return [
        'user_id' => $user->id,
        'paymentmethod_id' => $faker->numberBetween(1, 4),
        'payment_number' => $faker->e164PhoneNumber(),
        'amount' => $faker->numberBetween(100, 1000),
        'purpose' => $faker->colorName(),
        'number' => $faker->e164PhoneNumber(),
        'status' => 'pending',
    ];
});
