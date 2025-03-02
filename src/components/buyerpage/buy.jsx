import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "../common/Heading";
import "./buy.css"; // Ensure correct CSS import

const Buy = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties/sell");

        if (Array.isArray(response.data)) {
          setProperties(response.data);
        } else {
          setProperties([]);
        }
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError(err.response?.data?.error || "Failed to fetch properties.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <section className="recent padding">
      <div className="container">
        <Heading title="Properties for Sale" subtitle="Browse our latest property listings." />

        {loading ? (
          <p>Loading properties...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : properties.length > 0 ? (
          <div className="content grid3 mtop">
            {properties.map((property, index) => {
              const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(property.price);
              return (
                <div className="box shadow" key={index}>
                  <div className="img">
                    <img
                      src={property.images?.[0] || "default-placeholder.jpg"}
                      alt={`${property.propertyType || "Property"} for sale`} // More descriptive alt text
                    />
                  </div>
                  <div className="text">
                    <div className="category flex">
                      <span style={{ background: "#25b5791a", color: "#25b579" }}>For Sale</span>
                      <i className="fa fa-heart"></i>
                    </div>
                    <h4>{property.propertyType}</h4>
                    <p><i className="fa fa-location-dot"></i> {property.location}</p>
                    <p><i className="fa fa-user"></i> {property.firstName} {property.lastName}</p>
                    <p><i className="fa fa-envelope"></i> {property.email}</p>
                    <p><i className="fa fa-phone"></i> {property.contactInfo}</p>
                  </div>
                  <div className="button flex">
                    <div>
                      <button className="btn2">{formattedPrice}</button>
                      <label>/sqft</label>
                    </div>
                    <span>{property.propertyType}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No properties available for sale.</p>
        )}
      </div>
    </section>
  );
};

export default Buy;
