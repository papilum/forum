import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [role, setRole] = useState(sessionStorage.getItem('role') || '');
  let navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/logout');
      setIsLoggedIn(false);
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  let navLinks;
  if (isLoggedIn) {
    if (role == 'admin') {
      navLinks = (
        <>
          <li>
            <Link to="/admin">Admin Page</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
     <button onClick={handleLogout}>Logout</button>
    </li>
          
        </>
      );
    } else {
      navLinks = (
        <>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
          <li>
            <Link to="/trending">Trending</Link>
          </li>
          <li>
     <button onClick={handleLogout}>Logout</button>
    </li>
        </>
      );
    }
   
  } else {
    navLinks = (
      <>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </>
    );
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Forum</Link>
      </div>
      <ul className="nav-links">{navLinks}</ul>
    </nav>
  );
};

export default Navbar;
