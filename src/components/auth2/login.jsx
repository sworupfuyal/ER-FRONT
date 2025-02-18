import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('./sellerpage/sell'); // Directly navigate to /seller/sell
  };

  return (
    <div className="signup-container">
      {/* Left Section */}
      <div className="left-section">
        <h2>Thanks for your trust!</h2>
        <p>
          We are so excited to have you here. Log in to access your account.
        </p>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required /> 
          <input type="password" placeholder="Password" required /> 
          <button type="submit" className="signup-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;