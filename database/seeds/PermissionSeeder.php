<?php

use App\Models\Users\Permission;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            [ 'name' => 'user_management_access' ],
            [ 'name' => 'permission_create' ],
            [ 'name' => 'permission_edit' ],
            [ 'name' => 'permission_show' ],
            [ 'name' => 'permission_delete' ],
            [ 'name' => 'permission_access' ],
            [ 'name' => 'role_create' ],
            [ 'name' => 'role_edit' ],
            [ 'name' => 'role_show' ],
            [ 'name' => 'role_delete' ],
            [ 'name' => 'role_access' ],
            [ 'name' => 'user_create' ],
            [ 'name' => 'user_edit' ],
            [ 'name' => 'user_show' ],
            [ 'name' => 'user_delete' ],
            [ 'name' => 'user_access' ],

            [ 'name' => 'subscription_edit' ],
            [ 'name' => 'subscription_show' ],
            [ 'name' => 'subscription_delete' ],
            [ 'name' => 'subscription_access' ],
            [ 'name' => 'shop_create' ],
            [ 'name' => 'shop_edit' ],
            [ 'name' => 'shop_show' ],
            [ 'name' => 'shop_delete' ],
            [ 'name' => 'shop_access' ],
            [ 'name' => 'branch_create' ],
            [ 'name' => 'branch_edit' ],
            [ 'name' => 'branch_show' ],
            [ 'name' => 'branch_delete' ],
            [ 'name' => 'branch_access' ],
        ];

        Permission::insert($permissions);
    }
}
