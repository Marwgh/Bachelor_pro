<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\QuizzController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\BlogPostController;
use App\Http\Controllers\Api\Tag_PostController;
use App\Http\Controllers\Api\TagController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function() {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout' , [AuthController::class , 'logout']);
    Route::apiResource('/users', UserController::class );
    Route::apiResource('/quizz', QuizzController::class );
    Route::apiResource('/blogPost', BlogPostController::class );
    Route::apiResource('/Tags', TagController::class );
    Route::apiResource('/TagsNPosts', Tag_PostController::class );
    // 
    

});

Route::get('/getPosts', [BlogPostController::class , 'index'] );
Route::get('/getPost', [BlogPostController::class , 'show'] );
Route::post('/signup' , [AuthController::class , 'signup']);
Route::post('/login' , [AuthController::class , 'login']);
Route::post('/quizz' , [QuizzController::class , 'create']);
Route::get('/seeTags', [TagController::class, 'index' ]);
Route::get('/seeTagsNPosts', [Tag_PostController::class , 'index'] );


Route::fallback(function(){
    return response()->json([
        'message' => 'Page Not Found'], 404);
});