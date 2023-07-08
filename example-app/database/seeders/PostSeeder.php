<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = User::pluck('id')->all();
        $categories = Category::pluck('id')->all();

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 5; $i++) {
            Post::create([
                'title' => $faker->sentence,
                'content' => $faker->paragraph,
                'user_id' => $faker->randomElement($users),
                'category_id' => $faker->randomElement($categories),
            ]);
        }
    }
}
