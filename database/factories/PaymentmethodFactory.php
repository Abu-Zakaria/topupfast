<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Paymentmethod;
use Faker\Generator as Faker;

$factory->define(Paymentmethod::class, function (Faker $faker) {
    return [
        'name' => $faker->colorName(),
        'number' => $faker->e164PhoneNumber(),
        'logo' => $faker->imageUrl(640, 480, 'cats'),
    ];
});
