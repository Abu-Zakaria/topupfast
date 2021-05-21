<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UsersTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('users')->insert([
			'id' 		=> 1,
			'name' 		=> 'Jual Ahmed',
			'slug' 		=> Str::slug('jual ahmed', '-'),
			'phone' 	=> '01784622362',
			'gender_id' => 1,
			'email' 	=> 'md.jual.ah@gmail.com',
			'role_id' 	=> 1,
			'password' 	=> Hash::make('password'),
			'status' 	=> 1,
			'created_at'=> date('Y-m-d H:i:s'),
			'updated_at'=> date('Y-m-d H:i:s'),
		]);
	}
}
