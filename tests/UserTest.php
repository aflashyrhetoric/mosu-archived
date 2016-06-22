<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class UserTest extends TestCase
{
    // Wraps each test in Database Transaction
    use DatabaseTransactions;
    /**
     * A basic functional test example.
     * @test userSavedSuccessfully
     * @return void
     */
    public function userSavedSuccessfully()
    {
        $user = new App\User();
        $user->name = "Bob Jones";
        $user->email = "bob@jones.com";
        $user->password = bcrypt("password");
        $user->save();
        $this->assertEquals($user->name, "Bob Jones");
    }
}
