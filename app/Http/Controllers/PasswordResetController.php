<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Repositories\UserRepository;

class PasswordResetController extends Controller
{
	protected $userRepository;
	public function __construct(UserRepository $userRepository)
	{
		$this->userRepository = $userRepository;
	}

	public function update(Request $request, $id)
	{
		$validator = Validator::make($request->all(), [
			'password' => 'required|string|min:6|confirmed'
		]);

		if ($validator->fails()) {
			return redirect()
				->back()
				->withErrors($validator)
				->withInput();
		}
		$user = $this->userRepository->updatePassword($request, $id);

		if ($user) {
			return redirect()
				->back()
				->with('success', 'Password changed successfully!');
		}
	}



}
