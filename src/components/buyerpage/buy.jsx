// Buy.jsx
import React, { useState, useEffect } from "react";
import Heading from "../common/Heading";
import "./buy.css"; // You might want to rename this CSS file to something like "buy.css"

const Buy = () => {
  const [properties, setProperties] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('/api/properties'); // Fetch properties from your backend
        setProperties(response.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError(err.response?.data?.error || "Failed to fetch properties.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  },);

  return (
    <section className='recent padding'>
      <div className='container'>
        <Heading title='Properties for Sale' subtitle='Browse our latest listings.' /> {/* Updated title and subtitle */}

        {loading ? (
          <p>Loading properties...</p> // Loading state
        ) : error ? (
          <p className="error-message">{error}</p> // Error state
        ) : (
          <div className="content grid3 mtop">
            {properties.map((property, index) => (
              <div className="box shadow" key={index}>
                <div className="img">
                  <img src={property.imageUrl} alt={property.title} /> {/* Assuming you have an imageUrl field */}
                </div>
                <div className="text">
                  <div className="category flex">
                    <span style={{ background: "#25b5791a", color: "#25b579" }}>For Sale</span> {/* Hardcoded "For Sale" */}
                    <i className="fa fa-heart"></i>
                  </div>
                  <h4>{property.title}</h4>
                  <p>
                    <i className="fa fa-location-dot"></i> {property.location}
                  </p>
                </div>
                <div className="button flex">
                  <div>
                    <button className="btn2">{property.price}</button>
                    <label htmlFor="">/sqft</label>
                  </div>
                  <span>{property.type}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Buy;