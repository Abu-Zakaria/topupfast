<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
        $phoneRules = 'required';
        $emailRules = 'required';

        if ($this->isPostRequest()) {
            $phoneRules .= '|unique:users';
            $emailRules .= '|unique:users';
        }
        return [
            'name'          => 'required',
            'phone'           => $phoneRules,
            'email'           => $emailRules,
            'gender_id'       => 'required',
            'religion_id'     => 'required',
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
            'name.required' => __("User name is required"),
            'phone.required' => __("Contact no. is required"),
            'email.required' => __("Email is required"),
            'gender_id.required' => __("Gender is required"),
            'religion_id.required' => __("Religion is required"),

        ];
        if ($this->isPostRequest()) {
            $messages['phone.unique']  = 'This contact no. is already used';
            $messages['email.unique']  = 'This email is already used';
        }
        return $messages;
    }

    private function isPostRequest()
    {
        return request()->method() === "POST";
    }
}
