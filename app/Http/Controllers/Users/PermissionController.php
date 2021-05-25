<?php

namespace App\Http\Controllers\Users;

use App\Http\Requests\Users\PermissionRequest;
use App\Repositories\Users\PermissionRepository;
use App\Models\Users\Permission;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class PermissionController extends Controller
{
  private $permissionRepository;
  function __construct(PermissionRepository $permissionRepository)
  {
    $this->permissionRepository = $permissionRepository;
  }

  /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
      $permissions = $this->permissionRepository->paginate(10);
      $breadcrumbs = [
        ['link'=>"/",'name'=>"Home"],['link'=>"",'name'=>"Permissions"]
      ];
      return Inertia::render('Permission/Index', [
        'breadcrumbs' => $breadcrumbs,
        'permissions' => $permissions,
        'has_modal' => true
      ]);
    }

  /**
   * Store a newly created resource in storage.
   *
   * @param PermissionRequest $request
   * @return \Illuminate\Http\Response
   */
  public function store(PermissionRequest $request)
  {
    $permission = $this->permissionRepository->store();
    if ($permission) return redirect()
      ->route('permissions.index')
      ->with([
        'success' => "$permission->name created successfully!",
      ]);
  }


  /**
   * Update the specified resource in storage.
   *
   * @param PermissionRequest $request
   * @param $id
   * @return \Illuminate\Http\Response
   */
  public function update(PermissionRequest $request, $id)
  {
    $permission = $this->permissionRepository->update($id);
    if ($permission->save()) {
      return redirect()
        ->route('permissions.index')
        ->with([
          'success' => 'Permission info updated successfully!',
          'permission' => $permission
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
    $permission = Permission::find($id);
    $name = $permission->name;
    if ($permission->delete()) return redirect()
      ->route('permissions.index')
      ->with([
        'success' => "$name deleted successfully!"
      ]);
  }
}
