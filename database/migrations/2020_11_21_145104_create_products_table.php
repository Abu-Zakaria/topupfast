<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->integer('brand_id');
            $table->integer('category_id');
            $table->longText('description');
            $table->string('tag_line')->nullable();
            $table->string('logo')->nullable();
            $table->float('buy_price')->nullable();
            $table->float('sale_price')->nullable();
            $table->integer('is_shop')->nullable();
            $table->float('quantity')->nullable();
            $table->integer('type')->nullable();
            $table->softDeletes();
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
        Schema::dropIfExists('products');
    }
}
