<?php


namespace App\Repositories;

use App\Models\Subscription;
use App\Support\RandomStringGenerator;
use App\Traits\RepositoryTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class SubscriptionRepository
{
  use RepositoryTrait;

  private $subscription;
  protected $guarded = [];

  public function __construct(Subscription $subscription)
  {
    $this->subscription = $subscription;
  }

  public function all()
  {
    $subscriptions = $this->subscription->orderBy('id', "DESC");

    if (\request()->has('status')) {
      $subscriptions = $subscriptions->where('status', \request()->status);
    }

    return $subscriptions->orderBy('id', 'desc');
  }

  public function findById($rowId)
  {
    return $this->subscription->find($rowId);
  }

  public function findBySlug(string $slug)
  {
    return $this->subscription->where('slug', $slug)
      ->first();
  }

  public function store(Request $request)
  {
    $subscription = new Subscription();
    $subscription = $this->setupData($subscription, $request);
    $subscription->created_at = date('Y-m-d H:i:s');
    if ($subscription->save()) {
      return $subscription;
    }
    return null;
  }

  public function update(Request $request, $id)
  {
    $subscription = $this->findById($id);
    $database = $this->generateDatabaseName($subscription->shop_name);

    $subscription->shop_database = $database;
    $subscription->status = 2;

    if ($subscription->save()) {
      return $subscription;
    }
    return null;
  }

  private function setupData(Subscription $subscription, $request)
  {
    $subscription->shop_name = $request->shop_name;
    $subscription->shop_slug = Str::slug($request->shop_name);
    $subscription->shop_phone = $request->shop_phone;
    $subscription->shop_email = $request->shop_email;
    $subscription->shop_address = $request->shop_address;
    $subscription->shop_open = date('H:i:s', strtotime($request->shop_open));
    $subscription->shop_close = date('H:i:s', strtotime($request->shop_close));
    return $subscription;
  }


  public function generateDatabaseName($shop_name)
  {
    $shop_database = 'dokani_' . str_replace(' ', '_', $shop_name) . '_';
    $token = (new RandomStringGenerator())->generate(6);
    $shop_database .= $token;

    return $shop_database;
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
    $request->file('avatar')->storeAs('public/shops', $fileNameToStore);
    $request->file('avatar')->storeAs('public/shops/thumbnail/small', $fileNameToStore);
    $request->file('avatar')->storeAs('public/shops/thumbnail/medium', $fileNameToStore);

    //create small thumbnail
    $smallThumbnailPath = public_path('storage/shops/thumbnail/small/'.$fileNameToStore);
    $this->createThumbnail($smallThumbnailPath, 150, 93);

    //create medium thumbnail
    $mediumThumbnailPath = public_path('storage/shops/thumbnail/medium/'.$fileNameToStore);
    $this->createThumbnail($mediumThumbnailPath, 300, 185);
  }


}
