<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $guarded = [];

    public function paymentmethod()
    {
    	return $this->belongsTo('App\Paymentmethod');
    }
}
