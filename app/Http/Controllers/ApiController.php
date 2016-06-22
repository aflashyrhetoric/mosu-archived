<?php 

namespace App\Http\Controllers;

use Response;

class ApiController extends Controller {

  const HTTP_NOT_FOUND = 404;
  const HTTP_INTERNAL_ERROR = 500;
  const HTTP_OK = 200;
  const HTTP_CREATED = 201;
  const HTTP_FAILED_VALIDATION = 422;

  /**
   * Default status code of 200 OK.
   * @var int
   **/
  protected $statusCode = 200;

  /**
   * Returns Status Code
   *
   * @return string
   **/
  public function getStatusCode()
  { 
    return $this->statusCode;
  } 

  /**
   * Sets the status code.
   *
   * @return $this
   **/
  public function setStatusCode($statusCode)
  {
    $this->statusCode = $statusCode;
    return $this;
  }

  /**
   * Responds with 404 Error Not Found
   *
   * @return json
   **/
  public function respondNotFound($message = 'Not Found')
  {
    return $this->setStatusCode(self::HTTP_NOT_FOUND)->respondWithError($message);
  }

  /**
   * Responds with internal error
   *
   * @return json
   **/
  public function respondInternalError($message = 'Internal Error!')
  {
    return $this->setStatusCode(self::HTTP_INTERNAL_ERROR)->respondWithError($message);
  }

  /**
   * Responds with JSON
   *
   * @return json
   **/
  public function respond($data, $headers = [])
  {
    return Response::json($data, $this->getStatusCode(), $headers);
  }

  /**
   * Responds with generic error
   *
   * @return json
   **/
  public function respondWithError($message)
  {
    return $this->respond([
      'error' => $message,
      'status_code' => $this->getStatusCode()
    ]);
  }

  /**
   * Failed validation
   *
   * @return response
   **/
  public function respondFailedValidation()
  {
    return $this->setStatusCode(self::HTTP_FAILED_VALIDATION)->respondWithError('Parameters failed validation for a quote.');
  }


  /**********
  ** SUCCESS Responses
  **********/

  /**
   * Successfully created
   *
   * @return json
   **/
  public function respondCreated($message = "Quote created!")
  {
    return $this->setStatusCode(self::HTTP_CREATED)->respond([
      'message' => $message,
      'status_code' => $this->getStatusCode()
    ]);    
  }
}

