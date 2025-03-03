// In your frontend code (Buy.jsx), update the axios request:

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./buy.css";

const Buy = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // Set the full URL to your backend instead of a relative path
        const response = await axios.get("http://localhost:5000/api/properties/sell");
        console.log("API Response Data:", response.data);
  
        if (Array.isArray(response.data)) {
          setProperties(response.data);
        } else {
          setError(`Unexpected response format: ${JSON.stringify(response.data)}`);
        }
      } catch (err) {
        console.error("API Fetch Error:", err);
        setError(err?.response?.data?.message || "Error fetching properties.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchProperties();
  }, []);
  
  return (
    <div className="buy-container">
      <h2 className="buy-title">Available Properties</h2>
      {loading && <p className="loading">Fetching properties...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && properties.length === 0 && (
        <p className="no-data">No properties found.</p>
      )}
      <div className="property-list">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img
              src={property.images?.[0] || "/images/placeholder.jpg"}
              alt={`${property.location} Property`}
              className="property-image"
            />
            <div className="property-details">
              <h3>{property.location}</h3>
              <p className="location">
                <i className="fa fa-location-dot"></i> {property.location}
              </p>
              <p className="type">Type: {property.propertytype}</p>
              <p className="price">Price: ${property.price}</p>
              <p className="owner">Owner: {property.firstname} {property.lastname}</p>
              <p className="contact">Contact: {property.email} | {property.contactinfo}</p>
            </div>
            <button className="favorite-button">
              <i className="fa fa-heart"></i> Send Enquiry
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;