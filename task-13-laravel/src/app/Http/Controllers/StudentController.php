<?php

namespace App\Http\Controllers;

use App\Models\StudentModel;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        return view('student.index');
    }

    // public function index()
    // {
    //     $students = StudentModel::all();
    //     return view('students.index', compact('students'));
    // }

    public function create()
    {
        return view('students.create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:60',
            'email' => 'required|email|max:100',
            'gender' => 'nullable|in:M,F,O',
        ]);

        $student = StudentModel::create($validatedData);

        return redirect()->route('students.index')->with('success', 'Student added successfully!');
    }

    public function edit(StudentModel $student)
    {
        return view('students.edit', compact('student'));
    }

    public function update(Request $request, StudentModel $student)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:60',
            'email' => 'required|email|max:100',
            'gender' => 'nullable|in:M,F,O',
        ]);

        $student->update($validatedData);

        return redirect()->route('students.index')->with('success', 'Student updated successfully!');
    }

    public function destroy(StudentModel $student)
    {
        $student->delete();

        return redirect()->route('students.index')->with('success', 'Student deleted successfully!');
    }
}
