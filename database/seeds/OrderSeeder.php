<?php

use App\Order;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    public function run()
    {
        $count = (int)$this->command->ask("How many orders do you want to generate?", 10);
        factory(Order::class, $count)->create();
    }
}
