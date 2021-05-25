<?php

namespace App\Http\Controllers\Users;

use App\Http\Requests\Users\BloodGroupRequest;
use App\Repositories\Users\BloodGroupRepository;
use App\Models\Users\BloodGroup;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class BloodGroupController extends Controller
{
  private $bloodGroupRepository;
  function __construct(BloodGroupRepository $bloodGroupRepository)
  {
    $this->bloodGroupRepository = $bloodGroupRepository;
  }

  /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
      $bloodGroups = $this->bloodGroupRepository->paginate(10);
      $breadcrumbs = [
        ['link'=>"/",'name'=>"Home"],['link'=>"",'name'=>"Blood Groups"]
      ];
      return Inertia::render('BloodGroup/Index', [
        'breadcrumbs' => $breadcrumbs,
        'blood_groups' => $bloodGroups,
        'has_modal' => true
      ]);
    }

  /**
   * Store a newly created resource in storage.
   *
   * @param BloodGroupRequest $request
   * @return \Illuminate\Http\Response
   */
  public function store(BloodGroupRequest $request)
  {
    $blood_group = $this->bloodGroupRepository->store();
    if ($blood_group) return redirect()
      ->route('blood-groups.index')
      ->with([
        'success' => "$blood_group->name created successfully!",
      ]);
  }


  /**
   * Update the specified resource in storage.
   *
   * @param BloodGroupRequest $request
   * @param $id
   * @return \Illuminate\Http\Response
   */
  public function update(BloodGroupRequest $request, $id)
  {
    $blood_group = $this->bloodGroupRepository->update($id);
    if ($blood_group->save()) {
      return redirect()
        ->route('blood-groups.index')
        ->with([
          'success' => 'BloodGroup info updated successfully!',
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
    $blood_group = BloodGroup::find($id);
    $name = $blood_group->name;
    if ($blood_group->delete()) return redirect()
      ->route('blood-groups.index')
      ->with([
        'success' => "$name deleted successfully!"
      ]);
  }
}
