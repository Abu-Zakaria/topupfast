<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\UserRequest;
use App\Repositories\UserRepository;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\User;
use App\Models\Users\Gender;
use App\Models\Users\Religion;
use App\Models\Users\BloodGroup;
use Illuminate\Support\Facades\Request;

class UserController extends Controller
{
	protected $userRepository;
	public function __construct(UserRepository $userRepository)
	{
		$this->userRepository = $userRepository;
	}


	public function updatewallet(Request $request,$id)
	{
			
		$user = User::find($id);
		$user->wallet =  $request::all()['wallet'];
		$user->save();
		return redirect()
				->route('users.index')
				->with('success', 'User Update completed successfully!');
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index(Request $request)
	{
		$id 	= Request::all('user_id');
		$email 	= Request::all('email');
		$phone 	= Request::all('phone');
		$result = User::query();

		if ($id['user_id']!=NULL) {
		    $result = $result->where('id', $id);
		}

		if ($email['email']!=NULL) {
		    $result = $result->where('email', $email);
		}

		if ($phone['phone']!=NULL) {
		    $result = $result->where('phone', $phone);
		}

		$genders = Gender::where('status', true)->get();
		$religions = Religion::where('status', true)->get();
		$blood_groups = BloodGroup::where('status', true)->get();

		return Inertia::render('User/Index', [
            'filters' 	=> Request::all('user_id'),
            'users' 	=> $result->orderBy('id','DESC')
                ->paginate(),
            'genders' => $genders,
            'religions' => $religions,
            'blood_groups' => $blood_groups
        ]);
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param UserCreateRequest $request
	 * @return Response
	 */
	public function store(UserRequest $request)
	{
		$role = Role::where('name', 'Subscriber')->first();
		$user = $this->userRepository->store($request);
		$user->role_id = $role->id;
		if ($request->hasFile('avatar')) {
			$extension = $request->file('avatar')->extension();
			//filename to store
			$fileNameToStore = \time().'.'.$extension;

			//Upload File
			$this->userRepository->uploadImage($fileNameToStore, $request);

			$user->avatar = $fileNameToStore;
		}
		if ($user->save()) {
			return redirect()
				->route('users.index')
				->with('success', 'User registration completed successfully!');
		}
	}

	public function storeUser(UserRequest $request)
	{
		$user = $this->userRepository->store($request);

		if ($user->save()) {
			return redirect()
				->route('users.index')
				->with('success', 'User created successfully!');
		}	
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param UserUpdateRequest $request
	 * @param int $id
	 * @return Response
	 */
	public function update(UserRequest $request, $id)
	{
		$user = $this->userRepository->update($request, $id);
		// new image provided
		if ($request->hasFile('avatar')) {
			if ($user->avatar !== 'default.jpg') {
				$originalImagePath = 'public/users/'.$user->avatar;
				$smallImagePath = 'public/users/thumbnail/small/'.$user->avatar;
				$mediumImagePath = 'public/users/thumbnail/medium/'.$user->avatar;

				Storage::delete($originalImagePath);
				Storage::delete($smallImagePath);
				Storage::delete($mediumImagePath);
			}

			$extension = $request->file('avatar')->extension();
			//filename to store
			$fileNameToStore = \time().'.'.$extension;

			//Upload File
			$this->userRepository->uploadImage($fileNameToStore, $request);

			$user->avatar = $fileNameToStore;
		}
		if ($user->save()) {
			return redirect()
				->route('users.index')
				->with('success', "$user->name's information updated successfully!");
		}
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}
}
