<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(App\Product::class, function (Faker $faker) {
    return [
        'name' => $faker->colorName(),
        'brand_id' => 1,
        'category_id' => 1,
        'description' => $faker->text(15),
        'buy_price' => $faker->numberBetween(4, 20),
        'sale_price' => $faker->numberBetween(6, 30),
        'seller_commission' => $faker->numberBetween(3, 10),
    ];
});
