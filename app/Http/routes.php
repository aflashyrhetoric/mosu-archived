<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Naming Conventions 
// Controller: 	JobApplicationsController
// Model: 		JobApplications
// Table Name:	jobapps
// Route: 		jobapps


Route::get('/', 'Controller@index');
Route::get('/logout', 'Auth\AuthController@logout');

Route::group(['prefix'=>'api/v1'], function(){
    // Main App
    Route::get('/jobapplications/{id}', 
        'JobApplicationsController@dashboard');
    // Sign Up To Mosu
    Route::post('/signup', 'Auth\AuthController@create');
    Route::post('/login', 'Auth\AuthController@login');
    // Create New JobApp
    Route::post('/jobapplications', 'JobApplicationsController@store');
    // Edit JobApp
    Route::post('/jobapplications/update/{id}', 'JobApplicationsController@update');

    // Auth-locked views/routes
    // Route::group(['prefix' => 'jobapps/create'], function(){});
    // Route::group(['prefix' => 'jobapps/create', 'middleware' => 'auth'], function()
    // {
      // Route::get('/', 'JobApplicationsController@create');
    // });
});

Route::get('/login', function () {
      return view('login');
});

