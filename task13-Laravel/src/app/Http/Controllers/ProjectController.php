<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use App\Models\Student;
use Illuminate\Http\Exceptions\HttpException;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param int $student_id
     * @return \Illuminate\Http\Response
     */
    public function index($student_id)
    {
        $student = Student::findOrFail($student_id);

        return ProjectResource::collection($student->projects()->paginate(25));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param int $student_id
     * @param  \App\Http\Requests\ProjectRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store($student_id, ProjectRequest $request)
    {
        // try {
        //     $project = new Project($request->validated());
        //     $project->student_id = $student_id;
        //     $project->save();

        //     return new ProjectResource($project);

        // } catch(\Exception $exception) {
        //     throw new HttpException(400, "Invalid data - {$exception->getMessage}");
        // }
        $project = new Project;
    $project->Project_name = $request->input('Project_name');
    $project->description = $request->input('description');
    $project->student_id = $student_id;
    $project->save();

    return new ProjectResource($project);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $student_id
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($student_id, $id)
    {
        $project = Project::where('student_id', $student_id)->findOrFail($id);

        return new ProjectResource($project);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $student_id
     * @param  \App\Http\Requests\ProjectRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($student_id, ProjectRequest $request, $id)
    {
        if (!$id) {
            throw new HttpException(400, "Invalid id");
        }

        try {
            $project = Project::where('student_id', $student_id)->findOrFail($id);
            $project->fill($request->validated())->save();

            return new ProjectResource($project);

        } catch(\Exception $exception) {
            throw new HttpException(400, "Invalid data - {$exception->getMessage}");
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $student_id
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($student_id, $id)
    {
        $project = Project::where('student_id', $student_id)->findOrFail($id);
        $project->delete();

        return response()->json(null, 204);
    }
}
