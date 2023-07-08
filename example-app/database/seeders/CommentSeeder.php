<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $users = User::pluck('id')->all();
        $posts = Post::pluck('id')->all();

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 3; $i++) {
            Comment::create([
                'content' => $faker->paragraph,
                'user_id' => $faker->randomElement($users),
                'post_id' => $faker->randomElement($posts),
            ]);
        }



    }
}
