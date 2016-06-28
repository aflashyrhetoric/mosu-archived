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

class JobApplicationsController extends ApiController
{

  /**
   * @var Adelie\TransformersJobApplicationsTransformer\
   */
  protected $JobApplicationTransformer;

  function __construct(JobApplicationTransformer $jobApplicationTransformer) {

    $this->jobApplicationTransformer = $jobApplicationTransformer;

  }

  public function dashboard($id)
  {

    // Get all job applications
    // $jobapps = JobApplication::all();
    $jobapps = User::find($id)->applications;

    // Return a response with a data array containing all results
    return $this->respond(
      $this->jobApplicationTransformer->transformCollection($jobapps->toArray())
    );
  }

  public function show($id)
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
      $jobapp->update($request->all());
      return $this->respondUpdated();
    }  
  }

  /**
   * Create a new quote
   *
   * @return quote/create page
   **/
  public function create()
  {
    return view('welcome');
  }

  /**
   * Stores a new quote
   *
   * @return void
   * @author 
   **/
  public function store(Request $request)
  {
    dd('hit');
    if ( ! $request->has('company')) 
    {
      return $this->respondFailedValidation();

    } else {
      JobApplication::create($request->all());
      return $this->respondCreated();
    }
  }
}