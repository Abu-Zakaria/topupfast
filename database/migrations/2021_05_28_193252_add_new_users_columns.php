<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewUsersColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('address')->nullable()->after('status');
            $table->string('birth_date')->nullable()->after('address');
            $table->string('blood_group_id')->nullable()->after('birth_date');
            $table->string('religion_id')->nullable()->after('birth_date');
            $table->string('nationality')->nullable()->after('religion_id');
            $table->string('connection')->nullable()->after('nationality');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('address');
            $table->dropColumn('birth_date');
            $table->dropColumn('blood_group_id');
            $table->dropColumn('religion_id');
            $table->dropColumn('nationality');
            $table->dropColumn('connection');
        });
    }
}
