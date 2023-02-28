<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Books\BooksController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\ProjectController;

// Route::apiResource('/students', StudentController::class);
/*

|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::group(['middleware' => ['auth.basic']], function () {
   
    Route::group(['prefix' => 'students'], function () {
        Route::apiResource('projects', ProjectController::class);
        Route::apiResource('{student_id}/projects',StudentController::class);
    });
    Route::get('/projects', [ProjectController::class, 'allProjects']);
    Route::apiResource('students', StudentController::class);
    

});



Route::get('/', function () {
    return response()->json([
        'message' => 'This is a simple example of item returned by your APIs. Everyone can see it.'
    ]);
});

