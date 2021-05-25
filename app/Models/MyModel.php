<?php


namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class MyModel extends Model
{
  use HasAdvancedFilter;

  public function getLastUpdatedAttribute()
  {
    return $this->updated_at ? $this->updated_at->diffForHumans() : '';
  }

  public function getDefaultDateTimeAttribute()
  {
    return date('d-m-Y h:i A', strtotime($this->updated_at));
  }

  public function getDefaultDateAttribute()
  {
    return date('d-m-Y', strtotime($this->updated_at));
  }

  public static function scopeActive($query)
  {
    return $query->where('status', 1);
  }
  protected $appends = ['default_date_time', 'default_date', 'last_updated'];
}
