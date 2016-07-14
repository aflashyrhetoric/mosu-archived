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
    // Sign Up To Mosu
    Route::post('/signup', 'Auth\AuthController@create');
    Route::post('/login', 'Auth\AuthController@login');
    Route::post('/authcheck', 'Auth\AuthController@isLoggedIn');

    // Main App
    Route::get('/jobapplications', 
        'JobApplicationsController@index');

    // Create New JobApp
    Route::post('/jobapplications', 'JobApplicationsController@store');

    // Edit JobApp
    Route::post('/jobapplications/update/{id}', 'JobApplicationsController@update');

    // Delete JobApp
    Route::post('/jobapplications/delete/{id}', 'JobApplicationsController@delete');

    // Auth-locked views/routes
    // Route::group(['prefix' => 'jobapps/create'], function(){});
    // Route::group(['prefix' => 'jobapps/create', 'middleware' => 'auth'], function()
    // {
      // Route::get('/', 'JobApplicationsController@create');
    // });
});