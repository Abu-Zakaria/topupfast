<?php


namespace App\Repositories\Users;

use App\Models\Users\Permission;
use App\Traits\RepositoryTrait;

class PermissionRepository
{
  use RepositoryTrait;

  private $permission;
  protected $guarded = [];

  public function __construct(Permission $permission)
  {
    $this->permission = $permission;
  }

  public function all()
  {
    $permissions = $this->permission->orderBy('name', 'asc');
    if (request()->has('search') && !empty(request()->search)) {
      $search = request()->search;
      $permissions = $permissions->where('name', 'like', "%$search%");
    }
    return $permissions;
  }

  public function findById($permissionId)
  {
    return $this->permission->find($permissionId);
  }

  public function update($permissionId)
  {
    $permission = $this->permission->find($permissionId);
    $permission->name = request()->name;
    $permission->status = request()->status;

    return $permission;
  }

  public function destroy($permissionId)
  {
    return $this->permission->find($permissionId)->softDelete();
  }

  public function store()
  {
    return $this->permission->create([
      'name' => request()->name,
    ]);
  }
}
