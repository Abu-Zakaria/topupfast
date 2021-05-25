<?php

namespace App\Models\Users;

use App\Models\MyModel;
use App\User;

class Address extends MyModel
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'user_id', 'address', 'type'
  ];

  public function user()
  {
    return $this->belongsTo(User::class);
  }
}
