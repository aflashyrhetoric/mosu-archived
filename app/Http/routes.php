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

Route::group(['prefix'=>'api/v1'], function(){
    // Quote Resource Routes
    Route::resource('jobapplications', 'JobApplicationsController');

    // Post to /quotes
    Route::post('/jobapps', 'JobApplicationsController@store');

    // Auth-locked views/routes
    Route::group(['prefix' => 'jobapps/create', 'middleware' => 'auth'], function()
    {
      Route::get('/', 'JobApplicationsController@create');
    });
});


Route::get('/', function () {
      return view('welcome');
});

Route::get('/login', function () {
      return view('login');
});

