<?php


namespace App\Repositories\Shops;

use App\Models\Shops\Branch;
use App\Traits\RepositoryTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BranchRepository
{
  use RepositoryTrait;
  private $branch;
  protected $guarded = [];

  public function __construct()
  {
    $this->branch = new Branch();
  }

  public function all()
  {
    $rows = $this->branch->setConnection(Auth::user()->connection)
      ->with([
        'shop', 
        'creator',
        'invoice_type'
      ])->orderBy('name');

    if (request()->has('status')) {
      $rows = $rows->where('status', request()->status);
    }

    return $rows;
  }


  public function findById($rowId)
  {
    return $this->branch->setConnection(Auth::user()->connection)
    ->with([
      'shop', 
      'creator',
      'invoice_type'
    ])
    ->find($rowId);
  }

  public function update(Request $request, $rowId)
  {
    $row = $this->branch->setConnection(Auth::user()->connection)->find($rowId);
    $row = $this->setupData($row, $request);

    if ($row->save()) {
      return $row;
    }
  }

  protected function setupData(Branch $branch, Request $request)
  {
    $branch->name = $request->name;
    $branch->phone = $request->phone;
    $branch->email = $request->email;
    $branch->address = $request->address;
    $branch->invoice_type_id = $request->invoice_type_id;
    $branch->shop_id = $request->shop_id;
    $branch->user_id = Auth::user()->id;

    return $branch;
  }

  public function destroy($rowId)
  {
    return $this->branch->setConnection(Auth::user()->connection)->find($rowId)->delete();
  }

  public function store(Request $request)
  {
    $row = (new Branch())->setConnection(Auth::user()->connection);
    $row = $this->setupData($row, $request);
    if ($row->save()) {
      return $row;
    }
  }

}
