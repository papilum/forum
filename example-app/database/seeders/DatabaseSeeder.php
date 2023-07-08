<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name' => 'Ana',
                'email' => 'ana@example.com',
                'password' => bcrypt('ana123')
            ],
            [
                'name' => 'Pavle',
                'email' => 'pavle@example.com',
                'password' => bcrypt('pavle123')
            ],
            [
                'name' => 'Petar',
                'email' => 'petar@example.com',
                'password' => bcrypt('petar123')
            ]
        ];

        foreach ($users as $user) {
            User::create($user);
        }
        $this->call(CategorySeeder::class);
        $this->call(PostSeeder::class);
        $this->call(CommentSeeder::class);
        $this->call(LikeSeeder::class);
    }
}
