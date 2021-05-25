<?php

use App\Models\Users\Religion;
use Illuminate\Database\Seeder;

class ReligionSeeder extends Seeder
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
        		'name' => "Islam",
        		'status' => true,
        	],
        	[
        		'name' => 'Hindu',
        		'status' => true,
        	],
        	[
        		'name' => 'Christian',
        		'status' => true,
        	]
        ];

        Religion::insert($data);
    }
}
