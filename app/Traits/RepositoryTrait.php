<?php


namespace App\Traits;


trait RepositoryTrait
{
  public function paginate($perPage)
  {
    return $this->all()->paginate($perPage);
  }
}
