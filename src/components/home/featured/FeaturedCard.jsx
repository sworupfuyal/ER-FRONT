import React from "react";
import "./Featured.css";

import { featured } from "../../data/Data";



const FeaturedCard = () => {
  return (
    <div className="content grid5 mtop"> {/* Removed unnecessary fragment */}
      {featured.map((items, index) => (
        <div className="box" key={index}> {/* Added key prop */}
          <img src={items.cover} alt={items.name} /> {/* Added alt text */}
          <h4>{items.name}</h4>
          <label>{items.total}</label>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCard;