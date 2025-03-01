import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import logo from "../../images/logo2.png";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to mimic login status
  const navigate = useNavigate();

  // Function to simulate login (replace with actual login logic later)
  const handleLogin = () => {
    setIsLoggedIn(true);
    // You might want to store a fake token or user object in localStorage here
    // to simulate a real login scenario.
  };

  // Function to simulate logout (replace with actual logout logic later)
  const handleLogout = () => {
    setIsLoggedIn(false);
    // Clear fake token or user object from localStorage here
  };

  const handleSignUpClick = () => navigate("/signup");

  const navItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Services", path: "/services" },
    { text: "Blog", path: "/blog" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <header>
      <div className="container flex">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <nav className="nav">
          <ul className={navList ? "small" : "flex"}>
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink to={item.path} onClick={() => setNavList(false)}>
                  {item.text}
                </NavLink>
              </li>
            ))}

            {/* Conditionally render Sell and Buy items */}
            {isLoggedIn && (
              <>
                <li>
                  <NavLink to="/sellerpage" onClick={() => setNavList(false)}>
                    Sell
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/buyerpage" onClick={() => setNavList(false)}>
                    Buy
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>

        <div className="button flex">
          {/* Conditionally render Login/Logout and Sign Up buttons */}
          {isLoggedIn ? (
            <button className="btn1" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <button className="btn1" onClick={handleLogin}>
                Login (Simulate)
              </button>
              <button className="btn1" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </>
          )}
        </div>

        <div className="toggle">
          <button onClick={() => setNavList(!navList)}>
            {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;