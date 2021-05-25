<?php

namespace App\Http\Requests\Users;

use Illuminate\Foundation\Http\FormRequest;

class GenderRequest extends FormRequest
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
      $rules .= '|unique:genders';
    }
    return [
      'name' => $rules
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
      'name.required' => 'Gender name is required',
      'name.string'  => 'Invalid name',
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
