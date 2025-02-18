import React from "react";
import Heading from "../../common/Heading";
import banner from "../../images/banner.png"; // Correct import for image
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${banner})` }}> {/* Use imported image */}
      <div className="container">
      <div className="container1">

        <Heading
          title="Search Your Next Home "
          subtitle="Find new & featured property located in your local city."
        />
        </div>

        
      </div>
    </section>
  );
};

export default Hero;