<?php


namespace App\Repositories\Shops;

use App\Models\Shops\Customer;
use App\Traits\RepositoryTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CustomerRepository
{
  use RepositoryTrait;
  private $customer;
  protected $guarded = [];

  public function __construct()
  {
    $this->customer = new Customer();
  }

  public function all()
  {
    $rows = $this->customer->setConnection(Auth::user()->connection)->orderBy('name');
    if (request()->has('status')) {
      $rows = $rows->where('status', request()->status);
    }

    return $rows;
  }


  public function findById($rowId)
  {
    return $this->customer->setConnection(Auth::user()->connection)->find($rowId);
  }

  public function update(Request $request, $rowId)
  {
    $row = $this->customer->setConnection(Auth::user()->connection)->find($rowId);
    $row = $this->setupData($row, $request);

    if ($row->save()) {
      return $row;
    }
  }

  protected function setupData(Customer $customer, Request $request)
  {
    $customer->name = $request->name;
    $customer->phone = $request->phone;
    $customer->email = $request->email;
    $customer->address = $request->address;
    $customer->initial_balance = $request->initial_balance;
    $customer->creator_id = Auth::user()->id;

    return $customer;
  }

  public function destroy($rowId)
  {
    return $this->customer->setConnection(Auth::user()->connection)->find($rowId)->delete();
  }

  public function store(Request $request)
  {
    $row = (new Customer())->setConnection(Auth::user()->connection);
    $row = $this->setupData($row, $request);
    if ($row->save()) {
      return $row;
    }
  }

}
