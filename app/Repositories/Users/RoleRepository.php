<?php


namespace App\Repositories\Users;

use App\Models\Users\Role;
use App\Traits\RepositoryTrait;

class RoleRepository
{
  use RepositoryTrait;

  private $role;
  protected $guarded = [];

  public function __construct(Role $role)
  {
    $this->role = $role;
  }

  public function all()
  {
    return $this->role->with('permissions')->orderBy('name', 'asc');
  }

  public function findById($roleId)
  {
    return $this->role->with('permissions')->find($roleId);
  }

  public function update($roleId)
  {
    $role = $this->role->find($roleId);
    $role->name = request()->name;
    $role->status = request()->status;

    if ($role->save() && sizeof(request()->permissions)) {
      $role->permissions()->sync(request()->permissions);
    }
    return $role;
  }

  public function destroy($roleId)
  {
    return $this->role->find($roleId)->delete();
  }

  public function store()
  {
    $role = $this->role->create([
      'name' => request()->name,
    ]);

    if ($role && sizeof(request()->permissions)) {
      $role->permissions()->sync(request()->permissions);
    }
    return $role;
  }
}
