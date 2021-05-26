<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call([
           UsersTableSeeder::class,
           // PermissionSeeder::class,
           // PermissionRoleSeeder::class,
           BloodGroupSeeder::class,
           GenderSeeder::class,
           ReligionSeeder::class,
           ProductSeeder::class,
           PackageSeeder::class,
           OrderSeeder::class,
         ]);
    }
}
