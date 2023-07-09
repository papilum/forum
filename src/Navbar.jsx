import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = (isLoggedIn,setIsLoggedIn) => {
 

  const handleLogout = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/logout');
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Forum</Link>
      </div>
      <ul className="nav-links">
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
