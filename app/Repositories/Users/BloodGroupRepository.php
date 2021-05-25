<?php


namespace App\Repositories\Users;

use App\Models\Users\BloodGroup;
use App\Traits\RepositoryTrait;

class BloodGroupRepository
{
  use RepositoryTrait;
  private $bloodGroup;
  protected $guarded = [];

  public function __construct(BloodGroup $bloodGroup)
  {
    $this->bloodGroup = $bloodGroup;
  }

  public function all()
  {
    return $this->bloodGroup->orderBy('name', 'asc');
  }

  public function findById($bloodGroupId)
  {
    return $this->bloodGroup->find($bloodGroupId);
  }

  public function update($bloodGroupId)
  {
    $role = $this->bloodGroup->find($bloodGroupId);
    $role->name = request()->name;
    $role->status = request()->status;

    return $role;
  }

  public function destroy($bloodGroupId)
  {
    return $this->bloodGroup->find($bloodGroupId)->delete();
  }

  public function store()
  {
    return $this->bloodGroup->create([
      'name' => request()->name,
    ]);
  }
}
