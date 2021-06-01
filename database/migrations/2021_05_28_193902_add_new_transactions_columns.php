<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewTransactionsColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('transactions', function (Blueprint $table) {
            $table->integer('accept_id')->default(0)->after('status');
            $table->text('comment')->nullable()->after('accept_id');
            $table->string('payment_number')->nullable()->after('paymentmethod_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('transactions', function (Blueprint $table) {
            $table->dropColumn('accept_id');
            $table->dropColumn('comment');
            $table->dropColumn('payment_number');
        });
    }
}
