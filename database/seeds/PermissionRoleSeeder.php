<?php

use App\Models\Users\Permission;
use App\Models\Users\Role;

use Illuminate\Database\Seeder;

class PermissionRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin_permissions = Permission::all();
        Role::where('name', 'Super Admin')->first()->permissions()->sync($admin_permissions->pluck('id'), false);
    }
}
