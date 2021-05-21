<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Auth;
class ApiAuthController extends Controller
{
    	
    public function createSlug($title, $id = 0)
    {
        $slug = str_slug($title);
        $allSlugs = $this->getRelatedSlugs($slug, $id);
        if (! $allSlugs->contains('slug', $slug)){
            return $slug;
        }
        $i = 1;
        $is_contain = true;
        do {
            $newSlug = $slug . '-' . $i;
            if (!$allSlugs->contains('slug', $newSlug)) {
                $is_contain = false;
                return $newSlug;
            }
            $i++;
        } while ($is_contain);
    }

    protected function getRelatedSlugs($slug, $id = 0)
    {
        return User::select('slug')->where('slug', 'like', $slug.'%')
        ->where('id', '<>', $id)
        ->get();
    }

	public function register (Request $request) {
	    $validator = Validator::make($request->all(), [
	        'name' => 'required|string|max:255',
	        'email' => 'required|string|email|max:255|unique:users',
	        'phone' => 'required|unique:users', 
	        'password' => 'required|string|min:6|confirmed',
	    ]);
	    if ($validator->fails())
	    {
	        return response(['errors'=>$validator->errors()->all()], 200);
	    }

	    $obj  = array(
	    	'name' 				=> $request->name,
	    	'email' 			=> $request->email,
	    	'phone' 			=> $request->phone,
	    	'password' 			=> Hash::make($request->password),
	    	'remember_token' 	=> Str::random(10),
	    	'slug' 				=> $this->createSlug($request->name),
		);

	    $user = User::create($obj);
	    $token = $user->createToken('Laravel Password Grant Client')->accessToken;
	    $response = ['token' => $token,'user'=>$user];
	    return response($response, 200);
	}


	public function login (Request $request) {
	    $validator = Validator::make($request->all(), [
	        'email' => 'required|string|email|max:255',
	        'password' => 'required|string|min:6',
	    ]);
	    if ($validator->fails())
	    {
	        return response(['errors'=>$validator->errors()->all()], 200);
	    }
	    $user = User::where('email', $request->email)->first();
	    if ($user) {
	        if (Hash::check($request->password, $user->password)) {
	            $token = $user->createToken('Laravel Password Grant Client')->accessToken;
	            $response = ['token' => $token,'user'=>$user];
	            return response($response, 200);
	        } else {
	            $response = ["message" => "Password mismatch"];
	            return response($response, 200);
	        }
	    } else {
	        $response = ["message" =>'User does not exist'];
	        return response($response, 200);
	    }
	}


	public function logout (Request $request) {
	    $token = $request->user()->token();
	    $token->revoke();
	    $response = ['message' => 'You have been successfully logged out!'];
	    return response($response, 200);
	}


	public function updateuser ($id) {
	    return response(User::find($id), 200);
	}
}
