<?php

namespace App\Http\Controllers\Users;

use App\Http\Requests\Users\GenderRequest;
use App\Repositories\Users\GenderRepository;
use App\Models\Users\Gender;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class GenderController extends Controller
{
  private $genderRepository;
  function __construct(GenderRepository $genderRepository)
  {
    $this->genderRepository = $genderRepository;
  }

  /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
      $genders = $this->genderRepository->paginate(10);
      $breadcrumbs = [
        ['link'=>"/",'name'=>"Home"],['link'=>"",'name'=>"Genders"]
      ];
      return Inertia::render('Gender/Index', [
        'breadcrumbs' => $breadcrumbs,
        'genders' => $genders,
        'has_modal' => true
      ]);
    }

  /**
   * Store a newly created resource in storage.
   *
   * @param GenderRequest $request
   * @return \Illuminate\Http\Response
   */
  public function store(GenderRequest $request)
  {
    $gender = $this->genderRepository->store();
    if ($gender) return redirect()
      ->route('genders.index')
      ->with([
        'success' => "$gender->name created successfully!",
      ]);
  }


  /**
   * Update the specified resource in storage.
   *
   * @param GenderRequest $request
   * @param $id
   * @return \Illuminate\Http\Response
   */
  public function update(GenderRequest $request, $id)
  {
    $gender = $this->genderRepository->update($id);
    if ($gender) {
      return redirect()
        ->route('genders.index')
        ->with([
          'success' => 'Gender info updated successfully!',
          'gender' => $gender
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
    $gender = Gender::find($id);
    $name = $gender->name;
    if ($gender->delete()) return redirect()
      ->route('genders.index')
      ->with([
        'success' => "$name deleted successfully!"
      ]);
  }
}
