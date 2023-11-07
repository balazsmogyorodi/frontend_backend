<?php

use App\Http\Controllers\WriterController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/api/writers', [WriterController::class,'index']);
Route::post('/api/writers', [WriterController::class,'store']);





Route::get('/', function () {
    return view('welcome');
});
