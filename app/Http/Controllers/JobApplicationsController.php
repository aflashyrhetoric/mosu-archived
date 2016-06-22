<?php

namespace App\Http\Controllers;

use Response;
use Input;
use Auth;
use App\Adelie\Transformers\JobApplicationTransformer;
use Illuminate\Http\Request;
use App\JobApplication as JobApplication;
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

  public function index()
  {
    // 1. All (results) at once is bad
    // 2. No easy way to attach meta-information
    // 3. 100% mimics our data-base structure
    // 4. No way to signal headers/response codes
    // return Quote::all();

    // Get all job applications
    $jobapps = JobApplication::all();
    // Return a response with a data array containing all results
    return $this->respond([
      'data' => $this->jobApplicationTransformer->transformCollection($jobapps->toArray())
    ]);
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
    if ( ! $request->has('jobapp')) 
    {
      return $this->respondFailedValidation();

    } else {
      Quote::create($request->all());
      return $this->respondCreated();
    }
  }
}