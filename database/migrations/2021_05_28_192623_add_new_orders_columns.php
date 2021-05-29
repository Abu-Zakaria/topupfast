<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewOrdersColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->integer('seller_commission')->default(0)->after('status');
            $table->integer('accept_id')->after('seller_commission');
            $table->text('comment')->nullable()->after('accept_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('seller_commission');
            $table->dropColumn('accept_id');
            $table->dropColumn('comment');
        });
    }
}
