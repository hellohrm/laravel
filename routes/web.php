<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Artisan;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/admin', function () {
    return view('admin');
});

Route::get('/config-cache', function () {
    $exitcode=Artisan::call('config:cache');
    return 'config:cache' ;
});

Route::get('/config-clear', function () {
    $exitcode=Artisan::call('config:clear');
    return 'config:clear';
});

Route::get('/route-cache', function () {
    $exitcode=Artisan::call('route:cache');
    return 'route:cache';
});

Route::get('/route-clear', function () {
    $exitcode=Artisan::call('route:clear');
    return 'route:clear' ;
});



Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
