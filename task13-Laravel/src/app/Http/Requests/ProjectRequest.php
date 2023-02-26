<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProjectRequest extends FormRequest
{
    public function rules()
    {
        return [
            'Project_name' => 'required|string|max:255',
            'description'=>'required',
            'student_id' =>'required|integer',
        ];
    }
}
