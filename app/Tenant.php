<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    public static function getTenant()
    {
        echo request()->getHttpHost();
    }
}
