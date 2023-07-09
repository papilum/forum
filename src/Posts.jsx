import React from 'react';

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p className="author">Author: {post.user.name}</p>
          <div className="comments-section">
            <h3>Comments:</h3>
            {post.comments.length > 0 ? (
              <ul className="comments-list">
                {post.comments.map((comment) => (
                  <li key={comment.id} className="comment">
                    {comment.content}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No comments yet.</p>
            )}
          </div>
          <p className="likes">Likes: {post.likes.length}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
