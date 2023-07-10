import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const AdminPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/posts');
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const chartData = posts.map((post) => ({
    title: post.title.length > 15 ? post.title.substring(0, 15) + '...' : post.title,
    popularity: post.likes.length,
  }));

  return (
    <div className="admin-page">
      <h1>Najpopularniji postovi ili teme</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="popularity" fill="rgba(75, 192, 192, 0.6)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdminPage;
