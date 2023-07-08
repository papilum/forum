<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LikeController extends Controller
{
    public function index($postId)
    {
        $post = Post::findOrFail($postId);
        $likes = $post->likes;
        return  $likes;
    }

    public function store(Request $request, $postId)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $post = Post::findOrFail($postId);

        $like = new Like([
            'user_id' => $request->input('user_id'),
        ]);

        $post->likes()->save($like);

        return new $like;
    }
}
