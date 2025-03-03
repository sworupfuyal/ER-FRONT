import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../images/logo2.png";
import acc from "../../images/myacc.png";

const Header = () => {
  const [navList, setNavList] = useState(false); // State to toggle mobile navigation

  const navItems = [
    { text: "Home", path: "/home" },
    { text: "About", path: "/about" },
    { text: "Services", path: "/services" },
    { text: "Contact", path: "/contact" },
    { text: "Sell", path: "/sellerpage" }, // Add Sell page
    { text: "Buy", path: "/buyerpage" }, // Add Buy page
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
        <div className="acc-toggle-container">
          <div className="acc">
            <Link to="/profile"> {/* Link to the profile page */}
              <img src={acc} alt="Account" />
            </Link>
          </div>

          
        </div>
      </div>
    </header>
  );
};

export default Header;