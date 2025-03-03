import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import logo1 from "../images/logo2.png"; 
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <Back name="About Elite Residences" title="About Us - Who We Are?" cover={logo1} />
      <div className="container flex mtop">
        <div className="left row">
          <Heading title="About Elite Residences" subtitle="Discover the epitome of luxury living" />

          <p>
            Welcome to Elite Residences, where luxury living meets unparalleled comfort. We are dedicated to providing exceptional living experiences in the most prestigious locations. Our residences are crafted with meticulous attention to detail, offering exquisite designs, premium amenities, and breathtaking views.
          </p>
          <p>
            At Elite Residences, we believe in creating communities that inspire and elevate. Our team of experts is committed to delivering personalized service and ensuring that every resident enjoys a life of utmost convenience and exclusivity.
          </p>
        
        </div>
        <div className="right row">
          <img src={logo1} alt="Elite Residences Logo" /> 
        </div>
      </div>
    </section>
  );
};

export default About;