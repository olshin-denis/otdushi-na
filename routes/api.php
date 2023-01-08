<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\WindowController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('/user', function (Request $request) {
    return $request->user();
})
    ->middleware('auth:sanctum');
// Аuthorization
//Route::post('/register', [UserController::class, 'userRegister']);
Route::post('/login', [UserController::class, 'userLogin'])
    ->middleware('guest');
Route::get('/logout', [UserController::class, 'userLogout'])
    ->middleware('auth');
// Creation of windows
Route::get('/windows', [WindowController::class, 'getWindows']);
Route::get('/{user:id}', [WindowController::class, 'cabinet'])
    ->middleware(['admin', 'can']);
Route::post('/window', [WindowController::class, 'createWindow'])
    ->middleware(['admin', 'auth']);
Route::get('/window/{window:id}', [WindowController::class, 'getWindowRedaction']);
//    ->middleware(['admin', 'auth']);
Route::post('/window/{window:id}', [WindowController::class, 'windowRedaction'])
    ->middleware(['admin', 'auth']);
Route::delete('window/delete/{window:id}', [WindowController::class, 'windowDelete'])
    ->middleware(['admin', 'auth']);




