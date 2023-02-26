<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required',
            // 'description' => 'required|email|unique:students|max:255',
          'gender'=>'required',
        ];
    }
}
