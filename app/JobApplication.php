<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class JobApplication extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'job_applications';

    protected $fillable = [
        'company',
        'listing_url',
        'phase',
        // Optional
        'expected_salary',
        'location',
        'inside_contact_name',
        'inside_contact_email',
        'notes',
        'remote'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'id'
    ];
    public function user()
	{
	    return $this->belongsTo('App\User', 'foreign_key', 'user_id');
	}


}
