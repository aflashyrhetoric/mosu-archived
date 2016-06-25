<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->safeEmail,
        'password' => bcrypt(str_random(10)),
        'remember_token' => str_random(10),
    ];
});
$factory->define(App\JobApplication::class, function (Faker\Generator $faker) {
	$phases = [
		'saved',
		'applied',
		'interviewing',
		'offered'
	];
    return [
        'user_id' => function () {
            return factory(App\User::class)->create()->id;
        },
        'company' => $faker->company,
        'listing_url' => $faker->url,
        'phase' => $phases[array_rand($phases, 1)],

        'expected_salary' => $faker->numberBetween(42000, 80000),
        'location' => $faker->city,
        'inside_contact_name' => $faker->name,
        'inside_contact_email' => $faker->email,
        'notes' => $faker->realText($faker->numberBetween(200, 450)),
        'remote' => $faker->boolean
    ];
});
