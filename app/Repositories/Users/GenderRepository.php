<?php


namespace App\Repositories\Users;

use App\Models\Users\Gender;
use App\Traits\RepositoryTrait;
use Illuminate\Support\Str;

class GenderRepository
{
  use RepositoryTrait;
  private $gender;
  protected $guarded = [];

  public function __construct(Gender $gender)
  {
    $this->gender = $gender;
  }

  public function all()
  {
    $rows = $this->gender->orderBy('name');
    if (request()->has('status')) {
      $rows = $rows->where('status', request()->status);
    }

    return $rows;
  }


  public function findById($rowId)
  {
    return $this->gender->find($rowId);
  }

  public function update($rowId)
  {
    $row = $this->gender->find($rowId);
    return $row->update([
      'name' => request()->name,
      'slug' => Str::slug(request()->name),
      'status' => request()->status
    ]);
  }

  public function destroy($rowId)
  {
    return $this->gender->find($rowId)->delete();
  }

  public function store()
  {
    return $this->gender->create([
      'name' => request()->name,
      'slug' => Str::slug(request()->name)
    ]);
  }

}
