<?php

namespace App\Models\Users;

use App\Models\MyModel;
use DateTimeInterface;
use Illuminate\Database\Eloquent\SoftDeletes;

class Permission extends MyModel
{
    use SoftDeletes;

    public $table = 'permissions';

    protected $fillable = [
        'name', 'status'
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $casts = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'permission_role', 'role_id', 'permission_id');
    }
}
