<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Auth::routes();

Route::get('/', 'Frontend\HomeController')->name('home');
Route::get('/blogs', 'Frontend\BlogController@index')->name('blogs.index');
