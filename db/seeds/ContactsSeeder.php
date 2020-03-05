<?php

use Phinx\Seed\AbstractSeed;

class ContactsSeeder extends AbstractSeed
{
    public function run()
    {
        $faker = Faker\Factory::create();

        $contactsData = [];

        for ($i = 0; $i < 200; $i++) {
            $contactsData[] = [
                'first_name' => $faker->firstName,
                'last_name' => $faker->lastName,
                'email' => $faker->email,
                'user_id' => rand(1, 2)
            ];
        }

        $contactsTable = $this->table('contacts');
        $contactsTable->insert($contactsData)
            ->save();
    }
}
