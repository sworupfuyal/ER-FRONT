import React from "react";
import { price } from "../../data/Data";

const PriceCard = () => {
  return (
    <div className="content flex mtop"> {/* Removed unnecessary fragment (<></>) */}
      {price.map((item, index) => (
        <div className="box shadow" key={index}> {/* Added key prop */}
          <div className="topbtn">
            <button className="btn3">{item.best}</button>
          </div>
          <h3>{item.plan}</h3>
          <h1>
            <span>$</span>
            {item.price}
          </h1>
          <p>{item.ptext}</p>

          <ul>
            {item.list.map((val, listIndex) => { // Added key prop here and renamed index
              const { icon, text, change } = val;
              return (
                <li key={listIndex}> {/* Key added here */}
                  <label
                    style={{
                      background: change === "color" ? "#dc35451f" : "#27ae601f",
                      color: change === "color" ? "#dc3848" : "#27ae60",
                    }}
                  >
                    {icon} {/* Make sure 'icon' is a valid React element or string */}
                  </label>
                  <p>{text}</p>
                </li>
              );
            })}
          </ul>
          <button
            className="btn5"
            style={{
              background: item.plan === "Standard" ? "#27ae60" : "#fff",
              color: item.plan === "Standard" ? "#fff" : "#27ae60",
            }}
          >
            Start {item.plan}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PriceCard;