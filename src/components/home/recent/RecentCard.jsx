import React from "react";
import { list } from "../../data/Data";

const RecentCard = () => {
  return (
    <div className="content grid3 mtop"> {/* Removed unnecessary fragment */}
      {list.map((val, index) => {
        const { cover, category, location, name, price, type } = val;
        return (
          <div className="box shadow" key={index}> {/* Added key prop */}
            <div className="img">
              <img src={cover} alt={name} /> {/* Added alt text */}
            </div>
            <div className="text">
              <div className="category flex">
                <span
                  style={{
                    background: category === "For Sale" ? "#25b5791a" : "#ff98001a",
                    color: category === "For Sale" ? "#25b579" : "#ff9800",
                  }}
                >
                  {category}
                </span>
                <i className="fa fa-heart"></i> {/* Make sure Font Awesome is included */}
              </div>
              <h4>{name}</h4>
              <p>
                <i className="fa fa-location-dot"></i> {location} {/* Make sure Font Awesome is included */}
              </p>
            </div>
            <div className="button flex">
              <div>
                <button className="btn2">{price}</button>
                <label htmlFor="">/sqft</label>
              </div>
              <span>{type}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentCard;