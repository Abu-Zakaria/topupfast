<?php

use App\Models\Users\Gender;
use Illuminate\Database\Seeder;

class GenderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
        	[
        		'name' => 'Male',
        		'status' => true,
        	],
        	[
        		'name' => 'Female',
        		'status' => true,
        	],
        	[
        		'name' => 'Other',
        		'status' => true
        	]
        ];

        Gender::insert($data);
    }
}
