<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\User;
use Illuminate\Support\Str;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\Hash;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => 'Demo Admin',
        'slug' => Str::slug('Demo Admin'),
        'phone' => '01873356532',
        'email' => 'demo@gmail.com',
        'gender_id' => 1,
        'birth_date' => '1994-08-18',
        'blood_group_id' => 1,
        'religion_id' => 1,
        'role_id' => 1,
        'email_verified_at' => now(),
        'password' => Hash::make('12345678'),
        'remember_token' => Str::random(10),
    ];
});
