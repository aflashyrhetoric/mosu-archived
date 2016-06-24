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

Route::group(['prefix'=>'api/v1'], function(){
    // Quote Resource Routes

    // Post to /jobapplications

    Route::get('/jobapplications', 'JobApplicationsController@index');
    Route::post('/jobapplications', 'JobApplicationsController@store');

    // Auth-locked views/routes
    Route::group(['prefix' => 'jobapps/create'], function()
    // Route::group(['prefix' => 'jobapps/create', 'middleware' => 'auth'], function()
    {
      Route::get('/', 'JobApplicationsController@create');
    });
});

Route::get('/login', function () {
      return view('login');
});

