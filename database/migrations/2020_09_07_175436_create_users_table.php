<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('phone')->unique();
            // adding these columns (by Zakaria)
            // address columns seems missing (from UserRepository)
            $table->string('address')->nullable();
            // birth_date columns seems missing (from UserRepository)
            $table->string('birth_date')->nullable();
            // blood_group_id columns seems missing (from UserRepository)
            $table->string('blood_group_id')->nullable();
            // religion_id columns seems missing (from UserRepository)
            $table->string('religion_id')->nullable();
            // nationality columns seems missing (from UserRepository)
            $table->string('nationality')->nullable();
            // connection columns seems missing (from UserRepository)
            $table->string('connection')->nullable();
            $table->integer('gender_id');   
            $table->string('email')->unique();
            $table->integer('role_id');
            $table->integer('is_admin')->default(0);
            $table->float('wallet')->default(0);
            $table->string('avatar')->nullable()->default('default.png');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->boolean('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
