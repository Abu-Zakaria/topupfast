<?php

use Illuminate\Database\Seeder;

class PaymentmethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Paymentmethod::class, 4)->create();
    }
}
