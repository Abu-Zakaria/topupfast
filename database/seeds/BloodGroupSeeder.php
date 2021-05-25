<?php

use App\Models\Users\BloodGroup;
use Illuminate\Database\Seeder;

class BloodGroupSeeder extends Seeder
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
        		'name' => "A+",
        		'status' => true,
        	],
        	[
        		'name' => "A-",
        		'status' => true,
        	],
        	[
        		'name' => "B+",
        		'status' => true,
        	],
        	[
        		'name' => "B-",
        		'status' => true,
        	],
        	[
        		'name' => "AB+",
        		'status' => true,
        	],
        	[
        		'name' => "AB-",
        		'status' => true,
        	],
        	[
        		'name' => "O+",
        		'status' => true,
        	],
        	[
        		'name' => "O-",
        		'status' => true,
        	],
        ];

        BloodGroup::insert($data);
    }
}
