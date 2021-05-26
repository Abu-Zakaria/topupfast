<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Tests\Laravel\App;

class Product extends Model
{
    use SoftDeletes;
    protected $guarded = [];

    public function package()
    {
      return $this->hasOne('App\Package');
    }
}
