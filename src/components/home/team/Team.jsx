import React from "react";
import "./team.css";

// Team data embedded within the component
const teamData = [
  {
    list: "50",
    cover: "/images/customer/team-1.jpg",
    address: "Liverpool, Canada",
    name: "Sargam S. Singh",
    icon: [
      "fa-brands fa-facebook-f",
      "fa-brands fa-linkedin",
      "fa-brands fa-twitter",
      "fa-brands fa-instagram",
    ],
  },
  {
    list: "70",
    cover: "/images/customer/team-2.jpg",
    address: "Montreal, Canada",
    name: "Harijeet M. Siller",
    icon: [
      "fa-brands fa-facebook-f",
      "fa-brands fa-linkedin",
      "fa-brands fa-twitter",
      "fa-brands fa-instagram",
    ],
  },
  {
    list: "80",
    cover: "/images/customer/team-3.jpg",
    address: "Denver, USA",
    name: "Anna K. Young",
    icon: [
      "fa-brands fa-facebook-f",
      "fa-brands fa-linkedin",
      "fa-brands fa-twitter",
      "fa-brands fa-instagram",
    ],
  },
  {
    list: "51",
    cover: "/images/customer/team-4.jpg",
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [
      "fa-brands fa-facebook-f",
      "fa-brands fa-linkedin",
      "fa-brands fa-twitter",
      "fa-brands fa-instagram",
    ],
  },
  {
    list: "42",
    cover: "/images/customer/team-5.jpg",
    address: "New York, USA",
    name: "Adam K. Jollio",
    icon: [
      "fa-brands fa-facebook-f",
      "fa-brands fa-linkedin",
      "fa-brands fa-twitter",
      "fa-brands fa-instagram",
    ],
  },
];

const Team = () => {
  return (
    <section className="team background">
      <div className="container">
        <div className="heading">
          <h2>Our Featured Agents</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
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
                    <i className="fa fa-envelope"></i> Message
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
