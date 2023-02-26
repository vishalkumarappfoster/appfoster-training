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

Route::middleware('auth.basic')->group(function () {
    Route::apiResource('books', BooksController::class);
    Route::resource('students', StudentController::class);
    // Route::resource('projects', ProjectController::class);

    // Route::get('/students/{student}/projects', [StudentController::class, 'projects']);
    Route::resource('/students/{student}/projects', ProjectController::class)->shallow()->parameters([
        'projects' => 'id',
    ]);



});

Route::get('/', function () {
    return response()->json([
        'message' => 'This is a simple example of item returned by your APIs. Everyone can see it.'
    ]);
});

