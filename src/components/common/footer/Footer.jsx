import React from "react";
import "./footer.css";
import logo1 from "../../images/logo2.png"; 

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src={logo1} alt="Elite Residences" />
            
            </div>
          </div>

          {/* Static Footer Content */}
          <div className="box">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="box">
            <h3>Support</h3>
            <ul>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="box">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="legal">
        <span>© Elite Residences by Sworup.</span>
      </div>
    </>
  );
};

export default Footer;
