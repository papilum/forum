import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ForumPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div className="forum-posts">
    <h1>Forum Posts</h1>
    {posts.map((post) => (
      <div key={post.id} className="post">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-body">{post.body}</p>
        <hr className="post-divider" />
      </div>
    ))}
  </div>
  );
};

export default ForumPosts;
