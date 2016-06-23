<?php 
/*
 * This class transforms responses for Job Applications
 * to make them suitable for API use.
 */

namespace App\Adelie\Transformers;


class JobApplicationTransformer extends Transformer {

  public function transform($jobapp)
  {
      return [
        'company' => $jobapp['company'],
        'listing_url' => $jobapp['listing_url'],
        'phase' => $jobapp['phase'],
        'user_id' => $jobapp['user_id'],

        'expected_salary' => $jobapp['expected_salary'],
        'location' => $jobapp['location'],

        'inside_contact_name' => $jobapp['inside_contact_name'],
        'inside_contact_email' => $jobapp['inside_contact_email'],
        
        'notes' => $jobapp['notes'],
        'remote' => $jobapp['remote']
      ];
  }
}