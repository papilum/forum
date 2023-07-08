<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{
    public function index($postId)
    {
        $post = Post::findOrFail($postId);
        $comments = $post->comments;
        return  $comments;
    }

    public function store(Request $request, $postId)
    {
        $validator = Validator::make($request->all(), [
            'content' => 'required|string',
            'user_id' => 'required|exists:users,id',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $post = Post::findOrFail($postId);

        $comment = new Comment([
            'content' => $request->input('content'),
            'user_id' => $request->input('user_id'),
        ]);

        $post->comments()->save($comment);

        return  $comment;
    }
}
