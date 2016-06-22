<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJobApplicationsTable extends Migration
{


    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_applications', function(Blueprint $table){
            // Required fields
            $table->increments('id');
            $table->integer('user_id');
            $table->string('company');
            $table->string('listing_url');
            $table->string('phase');
            // Optional
            $table->integer('expected_salary')->unsigned;
            $table->string('location');
            $table->string('inside_contact_name');
            $table->string('inside_contact_email');
            $table->text('notes');
            $table->boolean('remote')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
