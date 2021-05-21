<?php


namespace App\Repositories;

use App\Models\Shop;
use App\Traits\RepositoryTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class ShopRepository
{
  use RepositoryTrait;
  private $shop;
  protected $guarded = [];

  public function __construct(Shop $shop)
  {
    $this->shop = $shop;
  }

  public function all()
  {
    $rows = $this->shop->orderBy('name');
    if (request()->has('status')) {
      $rows = $rows->where('status', request()->status);
    }

    return $rows;
  }


  public function findById($rowId)
  {
    return $this->shop->find($rowId);
  }

  public function setupData(Shop $shop, Request $request)
  {
    $shop->name = $request->name;
    $shop->slug = Str::slug($request->name, '-');
    $shop->phone = $request->phone;
    $shop->email = $request->email;
    $shop->address = $request->address;
    $shop->general_day_start = date('H:i:s', strtotime($request->general_day_start));
    $shop->general_day_close = date('H:i:s', strtotime($request->general_day_close));
    $shop->half_day_start = date('H:i:s', strtotime($request->half_day_start));
    $shop->half_day_close = date('H:i:s', strtotime($request->half_day_close));

    $shop->database = $request->database;

    return $shop;
  }

  public function update(Request $request, $rowId)
  {
    $row = $this->shop->find($rowId);
    $row = $this->setupData($row, $request);
    if ($row->save()) {
      return $row;
    }
    return null;
  }

  public function destroy($rowId)
  {
    return $this->shop->find($rowId)->delete();
  }

  public function store(Request $request)
  {
    $row = new Shop();
    $row = $this->setupData($row, $request);
    if ($row->save()) {
      return $row;
    }
    return null;
  }


  /**
   * Create a thumbnail of specified size
   *
   * @param string $path path of thumbnail
   * @param int $width
   * @param int $height
   */
  public function createThumbnail($path, $width, $height)
  {
    $img = Image::make($path)->resize($width, $height, function ($constraint) {
      $constraint->aspectRatio();
    });
    $img->save($path);
  }

  public function uploadImage(string $fileNameToStore, $request)
  {
    $request->file('logo')->storeAs('public/shops', $fileNameToStore);
    $request->file('logo')->storeAs('public/shops/thumbnail/small', $fileNameToStore);
    $request->file('logo')->storeAs('public/shops/thumbnail/medium', $fileNameToStore);

    //create small thumbnail
    $smallThumbnailPath = public_path('storage/shops/thumbnail/small/' . $fileNameToStore);
    $this->createThumbnail($smallThumbnailPath, 150, 93);

    //create medium thumbnail
    $mediumThumbnailPath = public_path('storage/shops/thumbnail/medium/' . $fileNameToStore);
    $this->createThumbnail($mediumThumbnailPath, 300, 185);
  }
}
