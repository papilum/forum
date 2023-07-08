<?php

namespace Database\Seeders;

use App\Models\Like;
use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Foundation\Auth\User;

class LikeSeeder extends Seeder
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

        for ($i = 0; $i < 5; $i++) {
            Like::create([
                'user_id' => $this->getRandomUser($users),
                'post_id' => $this->getRandomPost($posts),
            ]);
        }
    }

    private function getRandomUser($users)
    {
        return $users[array_rand($users)];
    }

    private function getRandomPost($posts)
    {
        return $posts[array_rand($posts)];
    }
}
