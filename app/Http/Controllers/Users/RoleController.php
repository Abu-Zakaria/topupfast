<?php

namespace App\Http\Controllers\Users;

use App\Http\Requests\Users\RoleRequest;
use App\Repositories\Users\RoleRepository;
use App\Models\Users\Role;
use App\Http\Controllers\Controller;
use App\Models\Users\Permission;
use Inertia\Inertia;
use Inertia\Response;

class RoleController extends Controller
{
  private $roleRepository;
  function __construct(RoleRepository $roleRepository)
  {
    $this->roleRepository = $roleRepository;
  }

  /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
      $roles = $this->roleRepository->paginate(10);
      $permissions = Permission::active()->get();
      $breadcrumbs = [
        ['link'=>"/",'name'=>"Home"],['link'=>"",'name'=>"Roles"]
      ];
      return Inertia::render('Role/Index', [
        'breadcrumbs' => $breadcrumbs,
        'roles' => $roles,
        'permissions' => $permissions,
        'has_modal' => true
      ]);
    }

  /**
   * Store a newly created resource in storage.
   *
   * @param RoleRequest $request
   * @return \Illuminate\Http\Response
   */
  public function store(RoleRequest $request)
  {
    $role = $this->roleRepository->store();
    if ($role) return redirect()
      ->route('roles.index')
      ->with([
        'success' => "$role->name created successfully!",
      ]);
  }


  /**
   * Update the specified resource in storage.
   *
   * @param RoleRequest $request
   * @param $id
   * @return \Illuminate\Http\Response
   */
  public function update(RoleRequest $request, $id)
  {
    $role = $this->roleRepository->update($id);
    if ($role->save()) {
      return redirect()
        ->route('roles.index')
        ->with([
          'success' => 'Role info updated successfully!',
          'role' => $role
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
    $role = Role::find($id);
    $name = $role->name;
    if ($role->delete()) return redirect()
      ->route('roles.index')
      ->with([
        'success' => "$name deleted successfully!"
      ]);
  }
}
