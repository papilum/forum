import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsLoggedIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
    let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email: email,
        password: password
      });

      // Obrada odgovora sa uspešnom prijavom
      console.log(response.data);
      setIsLoggedIn(true)
      if(response.data.status==200){
        if(response.data.isAdmin==0){
              navigate('/posts')
        }else{
              navigate('/admin')
        } 
      }
     
    } catch (error) {
      console.log(error)
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2 className="login-heading">Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="decoration"></div>
      </div>
    </div>
  );
};

export default Login;
