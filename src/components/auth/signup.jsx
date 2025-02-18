import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("buyer");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    // Simulate API call (replace with actual API call later)
    setTimeout(() => {
      if (Math.random() < 0.8) { // 80% success rate for demo
        setSuccessMessage("Signup successful! Redirecting to login...");
        setLoading(false);
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError("Signup failed. Please try again.");
        setLoading(false);
      }
    }, 2000); // Simulate 2-second delay
  };

  return (
    <div className="signup-container">
      {/* Left Section */}
      <div className="left-section">
        <h2>Come join us!</h2>
        <p>
          We are so excited to have you here. If you haven't already, create an
          account to get access to exclusive offers, rewards, and discounts.
        </p>

        <Link to="/login">
          <button className="signin-btn">
            Already have an account? Sign In.
          </button>
        </Link>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h2>Signup</h2>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="user-type-dropdown"
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>

          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;