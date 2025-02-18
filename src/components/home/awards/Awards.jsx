import React from "react";
import Heading from "../../common/Heading";
import "./awards.css";

const Awards = () => {
  const awards = [
    { icon: "fa-solid fa-briefcase", num: "43 M", name: "Mimo X11 Award" },
    { icon: "fa-solid fa-trophy", num: "32 M", name: "Blue Burmin Award" },
    { icon: "fa-solid fa-lightbulb", num: "51 M", name: "Australian UGC Award" },
    { icon: "fa-solid fa-heart", num: "42 M", name: "IITCA Green Award" },
  ];

  return (
    <section className="awards padding">
      <div className="container">
        <Heading
          title="Over 1,24,000+ Happy Users Being With Us, Still Loving Our Services"
          subtitle="Our Awards"
        />

        <div className="content grid4 mtop">
          {awards.map((award, index) => (
            <div className="box" key={index}>
              <div className="icon">
                <i className={award.icon}></i>
              </div>
              <h1>{award.num}</h1>
              <p>{award.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
