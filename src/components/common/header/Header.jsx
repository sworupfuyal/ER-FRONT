import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../images/logo2.png";

const Header = () => {
  const [navList, setNavList] = useState(false); // State to toggle mobile navigation

  const navItems = [
    { text: "Home", path: "/home" },
    { text: "About", path: "/about" },
    { text: "Services", path: "/services" },
    { text: "Blog", path: "/blog" },
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