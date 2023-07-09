import React, { useState } from 'react';

const Posts = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="posts">
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by title"
        />
      </div>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p className="author">Author: {post.user.name}</p>
            <p className="likes">Likes: {post.likes.length}</p>
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
           
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default Posts;
