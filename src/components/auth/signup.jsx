import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for API calls

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setLoading(true);

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    // Prepare user data for API call
    const userData = {
      name: username,
      email,
      password,
    };

    try {
      // Make API call to backend signup endpoint
      const response = await axios.post("http://localhost:5000/api/signup", userData);

      // Handle successful signup
      setSuccessMessage("Signup successful! Redirecting to login...");
      setLoading(false);

      // Clear form fields
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // Redirect to login after 2 seconds
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      // Handle errors from the API
      setError(err.response?.data?.msg || "Signup failed. Please try again.");
      setLoading(false);
    }
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

          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;