import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './Posts';
import Photos from './Photos';
import ForumPosts from './ForumPosts';
import AdminPage from './AdminPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/posts');
        setPosts(response.data.data);
        console.log(response.data.data)
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<Posts posts={posts} setPosts={setPosts} />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/trending" element={<ForumPosts />} />
        <Route path="/admin" element={<AdminPage posts={posts} />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
