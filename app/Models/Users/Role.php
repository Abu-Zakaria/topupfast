<?php

namespace App\Models\Users;

use App\Models\MyModel;
use App\User;

class Role extends MyModel
{
  protected $table = 'roles';
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'name', 
    'status'
  ];

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $casts = [
    'created_at', 
    'updated_at',
  ];
  /**
   * @var mixed
   */

  public function users()
  {
    return $this->hasMany(User::class);
  }

  public function permissions()
  {
    return $this->belongsToMany(Permission::class, 'permission_role', 'role_id', 'permission_id');
  }
}
