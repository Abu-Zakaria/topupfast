<?php


namespace App\Repositories\Shops;

use App\Models\Shops\InvoiceType;
use App\Traits\RepositoryTrait;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class InvoiceTypeRepository
{
  use RepositoryTrait;
  private $invoice_type;
  protected $guarded = [];

  public function __construct()
  {
    $this->invoice_type = new InvoiceType();
  }

  public function all()
  {
    $rows = $this->invoice_type->setConnection(Auth::user()->connection)->orderBy('name');
    if (request()->has('status')) {
      $rows = $rows->where('status', request()->status);
    }

    return $rows;
  }


  public function findById($rowId)
  {
    return $this->invoice_type->setConnection(Auth::user()->connection)->find($rowId);
  }

  public function update($rowId)
  {
    $row = $this->invoice_type->setConnection(Auth::user()->connection)->find($rowId);
    return $row->update([
      'name' => request()->name,
      'status' => request()->status,
      'user_id' => Auth::id()
    ]);
  }

  public function destroy($rowId)
  {
    return $this->invoice_type->setConnection(Auth::user()->connection)->find($rowId)->delete();
  }

  public function store()
  {
    return $this->invoice_type->setConnection(Auth::user()->connection)->create([
      'name' => request()->name,
      'user_id' => Auth::id()
    ]);
  }

}
