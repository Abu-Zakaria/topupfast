<?php


Route::post('/login', 'Auth\ApiAuthController@logins')->name('login.api');
Route::post('/register','Auth\ApiAuthController@register')->name('register.api');
Route::post('/logout', 'Auth\ApiAuthController@logout')->name('logout.api');

Route::post('/addwallet', 'OtherController@addwallet')->middleware('auth:api');
Route::post('/packageorderss', 'OtherController@store')->middleware('auth:api');
Route::post('password/email', 'Auth\ForgotPasswordController@forgot');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');

// verified



Route::get('/updateuser/{id}', 'Auth\ApiAuthController@updateuser');
Route::get('/mytransaction/{id}', 'TransactionController@mytransaction');
Route::get('/myorder/{id}', 'OtherController@myorder');
Route::get('/paymentMethod/{id}', 'PaymentmethodController@allpaymentmethod');
Route::get('/paymentMethod/', 'PaymentmethodController@allpaymentmethod');
Route::get('/topuppackage/{id}', 'PackageController@alltopuppackage');
Route::get('/singleproduct/{id}', 'ProductController@singleproduct');
Route::get('/invoice', 'OtherController@invoice');
Route::post('/shoporder', 'OtherController@shoporder');



Route::get('/banner', 'BannerController@allbanner');
Route::get('/notice', 'NoticeController@allnotice');
Route::get('/brand', 'BrandController@allshopbrand');
Route::get('/countsamary', 'OtherController@allcountsamary');
Route::get('/topupproduct', 'ProductController@alltopupproduct');
Route::get('/shopproduct', 'ProductController@allshopproduct');

