import React, { useState } from 'react';

const Posts = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortToggle = () => {
    setSortOrder((prevOrder) => (prevOrder === 'desc' ? 'asc' : 'desc'));
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedPosts = filteredPosts.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.likes.length - b.likes.length;
    } else {
      return b.likes.length - a.likes.length;
    }
  });

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
      <button className="sort-button" onClick={handleSortToggle}>
        Sort {sortOrder === 'asc' ? 'Asc' : 'Desc'}
      </button>
      {sortedPosts.length > 0 ? (
        sortedPosts.map((post) => (
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
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default Posts;
