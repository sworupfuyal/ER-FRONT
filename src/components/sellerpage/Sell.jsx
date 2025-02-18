import React, { useState } from 'react';
import Back from "../common/Back";
import Heading from "../common/Heading";
import './sell.css'; // Import the CSS file

const Sell = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    neighborhood: '',
    fullAddress: '',
    floor: '',
    bedrooms: '',
    buildingHistory: '',
    petsPolicy: 'allowed', // Default to "pets allowed"
    doorman: false,
    storage: false,
    elevator: false,
    washerDryer: false,
    naturalLight: false,
    laundryRoom: false,
    highCeilings: false,
    otherAmenity: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to API)
    console.log(formData);
  };

  return (
    <div className="seller-property-container">
      <div className="form-header">
        <h1>The Fastest &<br />Easiest Way to Sell<br />Your Property</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="name-inputs">
          <input 
            type="text" 
            name="firstName" 
            placeholder="First name*" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last name*" 
            value={formData.lastName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} required />
        <input type="text" name="neighborhood" placeholder="Neighborhood" value={formData.neighborhood} onChange={handleChange} />
        <input type="text" name="fullAddress" placeholder="Full address" value={formData.fullAddress} onChange={handleChange} />
        <input type="text" name="floor" placeholder="Floor" value={formData.floor} onChange={handleChange} />
        <input type="text" name="bedrooms" placeholder="Total Bedrooms" value={formData.bedrooms} onChange={handleChange} />
        <textarea name="buildingHistory" placeholder="Building History" value={formData.buildingHistory} onChange={handleChange} />

        <div className="pets-policy">
          <label>Pets Policy</label>
          <div className="radio-buttons">
            <label>
              <input 
                type="radio" 
                name="petsPolicy" 
                value="allowed" 
                checked={formData.petsPolicy === 'allowed'} 
                onChange={handleChange} 
              />
              Pets allowed
            </label>
            <label>
              <input 
                type="radio" 
                name="petsPolicy" 
                value="no" 
                checked={formData.petsPolicy === 'no'} 
                onChange={handleChange} 
              />
              No pets
            </label>
          </div>
        </div>

        <div className="amenities">
          <label>Amenities</label>
          <div className="checkbox-list">
            <label><input type="checkbox" name="doorman" checked={formData.doorman} onChange={handleChange} /> Doorman</label>
            <label><input type="checkbox" name="storage" checked={formData.storage} onChange={handleChange} /> Storage</label>
            <label><input type="checkbox" name="elevator" checked={formData.elevator} onChange={handleChange} /> Elevator</label>
            <label><input type="checkbox" name="washerDryer" checked={formData.washerDryer} onChange={handleChange} /> Washer/Dryer</label>
            <label><input type="checkbox" name="naturalLight" checked={formData.naturalLight} onChange={handleChange} /> Natural Light</label>
            <label><input type="checkbox" name="laundryRoom" checked={formData.laundryRoom} onChange={handleChange} /> Laundry Room</label>
            <label><input type="checkbox" name="highCeilings" checked={formData.highCeilings} onChange={handleChange} /> High Ceilings</label>
            <label><input type="checkbox" name="otherAmenity" checked={formData.otherAmenity} onChange={handleChange} /> Other</label>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Sell;