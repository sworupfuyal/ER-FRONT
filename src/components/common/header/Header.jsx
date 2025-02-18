import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import logo from "../../images/logo2.png";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const navigate = useNavigate();

  const handleSignUpClick = () => navigate("/signup");

  const navItems = [
    { text: "Home", path: "/" },
    { text: "Sell", path: "/sellerpage" },

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
          </ul>
        </nav>

        <div className="button flex">
         
          <button className="btn1" onClick={handleSignUpClick}>
            Sign Up
          </button>
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
