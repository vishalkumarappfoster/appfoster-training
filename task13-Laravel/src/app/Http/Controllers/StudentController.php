<?php

namespace App\Http\Controllers;

use App\Http\Requests\StudentRequest;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\StudentResource;
use App\Models\Project;
use App\Models\Student;
use Illuminate\Http\Exceptions\HttpException;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return StudentResource::collection(Student::paginate(25));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StudentRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StudentRequest $request)
    {
        try {
            $student = new Student;
            $student->fill($request->validated())->save();

            return new StudentResource($student);

        } catch(\Exception $exception) {
            throw new HttpException(400, "Invalid data - {$exception->getMessage}");
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $student_id
     * @return \Illuminate\Http\Response
     */
    public function show($student_id)
    {
        $student = Student::findOrFail($student_id);

        return new StudentResource($student);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\StudentRequest  $request
     * @param  int  $student_id
     * @return \Illuminate\Http\Response
     */
    public function update(StudentRequest $request, $student_id)
    {
        if (!$student_id) {
            throw new HttpException(400, "Invalid id");
        }

        try {
            $student = Student::find($student_id);
            $student->fill($request->validated())->save();

            return new StudentResource($student);

        } catch(\Exception $exception) {
            throw new HttpException(400, "Invalid data - {$exception->getMessage}");
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $student_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($student_id)
    {
        $student = Student::findOrFail($student_id);
        $student->delete();

        return response()->json(null, 204);
    }

    /**
     * Get all the projects for a specific student.
     *
     * @param  int  $student_id
     * @return \Illuminate\Http\Response
     */
    public function projects($student_id)
    {
        $student = Student::findOrFail($student_id);
        $projects = $student->projects;

        return ProjectResource::collection($projects);
    }


    //creating projects
   
}
