<?php

use Illuminate\Support\Facades\Route;

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

Route::get('{any?}', function () {
    return view('vue');
})->where('any', '.*');

//qualunque rotta useremo sarà inviata alla view vue.blade.php
// https://laravel.com/docs/7.x/routing#parameters-regular-expression-constraints
