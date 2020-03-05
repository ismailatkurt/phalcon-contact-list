<?php

use Phinx\Seed\AbstractSeed;

class UsersSeeder extends AbstractSeed
{
    public function run()
    {
        $usersData = [
            [
                'username'    => 'admin',
                'password' => password_hash('admin_test_pass', PASSWORD_BCRYPT, ['12'])
            ],
            [
                'username'    => 'test',
                'password' => password_hash('test_pass', PASSWORD_BCRYPT, ['12'])
            ]
        ];

        $usersTable = $this->table('users');
        $usersTable->insert($usersData)
            ->save();
    }
}
