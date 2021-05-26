<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Package;
use App\Product;
use Faker\Generator as Faker;

$factory->define(Package::class, function (Faker $faker) {
    $first_product = Product::first();
    $last_product = Product::latest('created_at')->first();

    return [
        'product_id' => $faker->numberBetween($first_product->id, $last_product->id),
        'amount' => $faker->numberBetween(20, 40),
        'extra_fee' => $faker->numberBetween(20, 40),
        'name' => $faker->colorName(),
    ];
});
