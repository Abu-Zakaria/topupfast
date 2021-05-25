<?php

namespace App\Http\Controllers\Users;

use App\Http\Requests\Users\ReligionRequest;
use App\Repositories\Users\ReligionRepository;
use App\Models\Users\Religion;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class ReligionController extends Controller
{
  private $religionRepository;
  function __construct(ReligionRepository $religionRepository)
  {
    $this->religionRepository = $religionRepository;
  }

  /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
      $religions = $this->religionRepository->paginate(10);
      $breadcrumbs = [
        ['link'=>"/",'name'=>"Home"],['link'=>"",'name'=>"Religions"]
      ];
      return Inertia::render('Religion/Index', [
        'breadcrumbs' => $breadcrumbs,
        'religions' => $religions,
        'has_modal' => true
      ]);
    }

  /**
   * Store a newly created resource in storage.
   *
   * @param ReligionRequest $request
   * @return \Illuminate\Http\Response
   */
  public function store(ReligionRequest $request)
  {
    $religion = $this->religionRepository->store();
    if ($religion) return redirect()
      ->route('religions.index')
      ->with([
        'success' => "$religion->name created successfully!",
      ]);
  }


  /**
   * Update the specified resource in storage.
   *
   * @param ReligionRequest $request
   * @param $id
   * @return \Illuminate\Http\Response
   */
  public function update(ReligionRequest $request, $id)
  {
    $religion = $this->religionRepository->update($id);
    if ($religion->save()) {
      return redirect()
        ->route('religions.index')
        ->with([
          'success' => 'Religion info updated successfully!',
          'religion' => $religion
        ]);
    }
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    $religion = Religion::find($id);
    $name = $religion->name;
    if ($religion->delete()) return redirect()
      ->route('religions.index')
      ->with([
        'success' => "$name deleted successfully!"
      ]);
  }
}
