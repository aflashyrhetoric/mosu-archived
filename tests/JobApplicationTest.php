<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class JobApplicationTest extends TestCase
{
    // Wraps each test in Database Transaction
    use DatabaseTransactions;
    /**
     * A basic functional test example.
     * @test jobApplicationSavedSuccessfully
     * @return void
     */
    public function jobApplicationSavedSuccessfully()
    {
        // $app = factory(App\JobApplication::class)->make();
        $users = factory(App\User::class, 5)
                   ->create()
                   ->each(function($u) {
                        $u->applications()->save(factory(App\JobApplication::class)->make());
                    });
        
    }
}
