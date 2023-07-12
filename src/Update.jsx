import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = ({ posts, setPosts }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [postToUpdate, setPostToUpdate] = useState(null);
  const [formData, setFormData] = useState({ title: '', content: '' });

  useEffect(() => {
    const findPost = () => {
      const post = posts.find((post) => post.id === parseInt(id));
      if (post) {
        setPostToUpdate(post);
        setFormData({ title: post.title, content: post.content });
      } else {
        // Post not found, redirect or show error message
        navigate('/admin/posts');
      }
    };

    findPost();
  }, [id, posts]);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/posts/${id}`, {
        title: formData.title,
        content: formData.content,
      });
      console.log('Post updated:', response.data);
    
      const updatedPosts = posts.map((post) => {
        if (post.id === parseInt(id)) {
          return { ...post, title: formData.title, content: formData.content };
        }
        return post;
      });
      setPosts(updatedPosts);
      navigate('/admin/posts');
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  if (!postToUpdate) {
    return <p>Loading...</p>;
  }

  return (
    <div className="update">
      <h2>Update Post</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleFormChange} />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea id="content" name="content" value={formData.content} onChange={handleFormChange}></textarea>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
