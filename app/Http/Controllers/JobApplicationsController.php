<?php

namespace App\Http\Controllers;

use Response;
use Input;
use Auth;
use App\Adelie\Transformers\JobApplicationTransformer;
use Illuminate\Http\Request;
use App\JobApplication as JobApplication;
use App\User as User;
use App\Http\Requests;
use JWTAuth;  
use Tymon\JWTAuth\Exceptions\JWTException;


class JobApplicationsController extends ApiController
{

  /**
   * @var Adelie\TransformersJobApplicationsTransformer\
   */
  protected $JobApplicationTransformer;

  function __construct(JobApplicationTransformer $jobApplicationTransformer) {

    $this->jobApplicationTransformer = $jobApplicationTransformer;

  }

  /* 
   * Get all job applications for current user
   */
  public function index()
  {

    $user = JWTAuth::parseToken()->authenticate();
    // return $this->respond($user->id);
    $jobapps = User::find($user->id)->applications;

    // $jobapps = JobApplication::all();
    // return $this->respond(typeof($user));
    // $jobapps = User::find($user->id)->applications();

    // Return a response with a data array containing all results
    return $this->respond(
      $this->jobApplicationTransformer->transformCollection($jobapps->toArray())
    );
  }

  public function show(Request $request)
  {

    $jobapp = JobApplication::find($id);

    // If nothing is found
    if (! $jobapp) {
      // Return failure response
      return $this->respondNotFound('Sorries, this particular Job Application does not exist.');
    }
    else {
      return $this->respond([
        'data' => $this->jobApplicationTransformer->transform($jobapp)
      ]);
    }  
  }

  /**
   * Update Job App
   *
   * @return void 
   **/
  public function update(Request $request, $id)
  {
    $jobapp = JobApplication::find($id);

    // If nothing is found
    if (! $jobapp) {
      // Return failure response
      return $this->respondNotFound('Sorries, this particular Job Application does not exist.');
    }
    else {
      $jobapp->update([
        'company' => 'company',
        'listing_url' => 'http://company.com',
        'phase' => 'saved',
        'expected_salary' => 15000,
        'location' => 'New York',
        'inside_contact_name' => 'Joe',
        'inside_contact_email' => 'company@gmail.com',
        'notes' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum laboriosam placeat asperiores delectus, optio ducimus, itaque non ad voluptatum accusamus.',
        'remote' => true
      ]);
      
      //   'company' => $request['company'],
      //   'listing_url' => $request['listing_url'],
      //   'phase' => $request['phase'],
      //   'expected_salary' => $request['expected_salary'],
      //   'location' => $request['location'],
      //   'inside_contact_name' => $request['inside_contact_name'],
      //   'inside_contact_email' => $request['inside_contact_email'],
      //   'notes' => $request['notes'],
      //   'remote' => $request['remote']
      // ]);

      return $this->respondUpdated();
    }  
  }

  /**
   * Stores a new Job Application
   *
   * @return void
   * @author 
   **/
  public function store(Request $request)
  {
    if ( ! $request->has('company')) 
    {
      return $this->respondFailedValidation();

    } else {
      $user = JWTAuth::parseToken()->authenticate();
      // return $this->respond($user->id);
      JobApplication::create([
            'company' => $request['company'],
            'listing_url' => $request['listing_url'],
            'phase' => $request['phase'],
            'expected_salary' => $request['expected_salary'],
            'location' => $request['location'],
            'inside_contact_name' => $request['inside_contact_name'],
            'inside_contact_email' => $request['inside_contact_email'],
            'notes' => $request['notes'],
            'remote' => $request['remote'],
            'user_id' => $user->id
        ]);
      return $this->respondCreated();
    }
  }

  public function delete($id)
  {
    $jobapp = JobApplication::find($id);

    // If nothing is found
    if (! $jobapp) {
      // Return failure response
      return $this->respondNotFound('Sorries, this particular Job Application does not exist.');
    }
    else {
      // Otherwise, delete the record and return 200 OK
      $jobapp->delete(); 
      return $this->respondDeleted();
    }
  }

  public function user()
  {
    return $this->belongsTo('App\User');
  }
}