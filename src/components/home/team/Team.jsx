import React from "react";
import "./team.css";
import ros from "../../images/ros.png";
import raj from "../../images/raj.png";
import nik from "../../images/nik.png";
import nir from "../../images/nir.png";



// Team data embedded within the component
const teamData = [
 {
     list: "45",
     cover: ros,
     address: "Toronto, Canada",
     name: "Rosalina D. William",
     Contact:"9898989898",
     icon:["9898989898"],
   },
   {
     list: "60",
     cover: raj,
     address: "New York, USA",
     name: "Raj K. Sharma",
     Contact:"9898989898",
     icon: ["9898989898"],
   },
   {
     list: "75",
     cover: nik,
     address: "Chicago, USA",
     name: "Nikolas P. Watson",
     Contact:"9898989898",
     icon: ["9898989898"],
   },
   {
     list: "55",
     cover: nir,
     address: "Vancouver, Canada",
     name: "Niraj M. Patel",
     
     icon: ["9898989898"],
   }
];

const Team = () => {
  return (
    <section className="team background">
      <div className="container">
        <div className="heading">
          <h2>Our Featured Agents</h2>
          <p>
            Don't waste your time Directly contact thorough our offline Agents with high level expertise in this field.
          </p>
        </div>

        <div className="content mtop grid3">
          {teamData.map((member, index) => (
            <div className="box" key={index}>
              <button className="btn3">{member.list} Listings</button>
              <div className="details">
                <div className="img">
                  <img src={member.cover} alt={member.name} />
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <div className="location">
                  <i className="fa fa-location-dot"></i>
                  <label>{member.address}</label>
                </div>
                <h4>{member.name}</h4>

                <ul className="social-icons">
                  {member.icon.map((iconClass, iconIndex) => (
                    <li key={iconIndex}>
                      <i className={iconClass}></i>
                    </li>
                  ))}
                </ul>

                <div className="button flex">
                  <button>
                    <i className="fa fa-envelope"></i> Contact
                  </button>
                  <button className="btn4">
                    <i className="fa fa-phone-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
