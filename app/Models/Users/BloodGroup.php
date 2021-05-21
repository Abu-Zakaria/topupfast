<?php

namespace App\Models\Users;

use App\Models\MyModel;

class BloodGroup extends MyModel
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'name', 'status'
  ];
  public function users()
  {
    return $this->hasMany('App\User');
  }
}
