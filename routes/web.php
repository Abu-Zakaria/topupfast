<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Auth::routes(['verify' => true]);

Route::get('/sendsms', "OtherController@sendsms");
Route::post('password/reset', 'Auth\ForgotPasswordController@reset')->name("passwordrecet");

Route::get('/logout', function() {
   return view('logout');
    // return "aa";
});

Route::group([
	'middleware' => 'lang'
], function () {
	Route::middleware(['auth','is_admin_or_seller'])->group(function () {

		Route::resource('order', 'OrderController');
		Route::post('seller/order/accept', "SellerController@acceptOrder");

		Route::middleware('is_seller')->resource('seller/orders', 'Seller\OrderController', [
			'as' => 'seller'
		]);
		Route::resource('withdraw_requests', "WithdrawRequestController");

		Route::middleware(['is_admin'])->group(function() {
			Route::resource('brand', 'BrandController');
			Route::resource('category', 'CategoryController');
			Route::resource('product', 'ProductController');
			Route::resource('package', 'PackageController');
			Route::resource('paymentmethod', 'PaymentmethodController');
			Route::resource('banner', 'BannerController');
			Route::resource('notice', 'NoticeController');
			Route::resource('sms', 'SmsController');
			Route::get('/canclealltransaction', 'TransactionController@canclealltransaction')->name('canclealltransaction');
			Route::get('/users', 'UserController@index')->name('users.index');


			Route::get('/users/{slug}', 'UserProfileController@show')->name('users.show');
				Route::post('/users/profile/account/{id}', 'UserProfileController@accountUpdate')
					->name('users.profile.account.update');
				Route::post('/users/password/{id}', 'PasswordResetController@update')
					->name('users.password.update');
				Route::post('/users/profile/avatar/{id}', 'UserProfileController@uploadImage')
					->name('users.profile.avatar.update');
				Route::post('/users', 'UserController@store')->name('users.store');

				Route::post('/sms/send_message', 'SmsController@sendMessage')->name('sms.send_message');

      // added by Zakaria for users.index page
				Route::post('/users/store_user', 'UserController@storeUser')->name('users.store_user');
				Route::put('/users/{id}', 'UserController@update')->name('users.update');
				Route::put('/updatewallet/{id}', 'UserController@updatewallet')->name('users.updatewallet');
				Route::delete('/users/{id}', 'UserController@destroy')->name('users.destroy');

				Route::group([
					'prefix' => 'settings',
					'namespace' => 'Users'
				], function () {
					// Role routes
					Route::get('/roles', 'RoleController@index')->name('roles.index');
					Route::post('/roles', 'RoleController@store')->name('roles.store');
					Route::put('/roles/{roleId}', 'RoleController@update')->name('roles.update');
					Route::delete('/roles/{roleId}', 'RoleController@destroy')->name('roles.destroy');

					Route::get('/permissions', 'PermissionController@index')->name('permissions.index');
					Route::post('/permissions', 'PermissionController@store')->name('permissions.store');
					Route::put('/permissions/{roleId}', 'PermissionController@update')->name('permissions.update');
					Route::delete('/permissions/{roleId}', 'PermissionController@destroy')->name('permissions.destroy');

					// Gender routes
					Route::get('/genders', 'GenderController@index')->name('genders.index');
					Route::post('/genders', 'GenderController@store')->name('genders.store');
					Route::put('/genders/{genderId}', 'GenderController@update')->name('genders.update');
					Route::delete('/genders/{genderId}', 'GenderController@destroy')->name('genders.destroy');

					// Religion routes
					Route::get('/religions', 'ReligionController@index')->name('religions.index');
					Route::post('/religions', 'ReligionController@store')->name('religions.store');
					Route::put('/religions/{religionId}', 'ReligionController@update')->name('religions.update');
					Route::delete('/religions/{religionId}', 'ReligionController@destroy')->name('religions.destroy');

					// Blood group routes
					Route::get('/blood-groups', 'GenderController@index')->name('blood-groups.index');
					Route::post('/blood-groups', 'GenderController@store')->name('blood-groups.store');
					Route::put('/blood-groups/{bloodGroupId}', 'GenderController@update')->name('blood-groups.update');
					Route::delete('/blood-groups/{bloodGroupId}', 'GenderController@destroy')->name('blood-groups.destroy');
				});
		});

		Route::get('/', 'DashboardController@index');

		Route::resource('transaction', 'TransactionController');
		Route::resource('invoice', 'InvoiceController');
	});
});
