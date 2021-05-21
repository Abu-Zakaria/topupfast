<?php

namespace App\Http\Requests\Users;

use Illuminate\Foundation\Http\FormRequest;

class RoleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
      $rules = 'required|string';
      if ($this->isPostRequest()) {
        $rules .= '|unique:roles';
      }
      return [
        'name' => $rules,
        'permissions' => 'required|array'
      ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
      $messages = [
        'name.required' => 'Role name is required',
        'permissions.required' => 'Permissions are required',
        'name.string'  => 'Invalid name',
        'permissions.array'  => 'Invalid permissions',
      ];
      if ($this->isPostRequest()) {
        $messages['name.unique']  = 'Already exists! Try another one';
      }
      return $messages;
    }

    private function isPostRequest()
    {
      return request()->method() === "POST";
    }
}
