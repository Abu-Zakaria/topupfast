<?php


namespace App\Repositories\Users;

use App\Models\Users\Religion;
use App\Traits\RepositoryTrait;
use Illuminate\Support\Str;

class ReligionRepository
{
  use RepositoryTrait;

  private $religion;
  protected $guarded = [];

  public function __construct(Religion $religion)
  {
    $this->religion = $religion;
  }

  public function all()
  {
    $rows = $this->religion->orderBy('name');
    if (request()->has('status')) {
      $rows = $rows->where('status', request()->status);
    }

    return $rows;
  }


  public function findById($rowId)
  {
    return $this->religion->find($rowId);
  }

  public function update($rowId)
  {
    $rows = $this->religion->find($rowId);
    return $rows->update([
      'name' => request()->name,
      'slug' => Str::slug(request()->name),
      'status' => request()->status
    ]);
  }

  public function destroy($rowId)
  {
    return $this->religion->find($rowId)->delete();
  }

  public function store()
  {
    return $this->religion->create([
      'name' => request()->name,
      'slug' => Str::slug(request()->name)
    ]);
  }
}
