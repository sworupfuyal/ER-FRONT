import React, { useState } from 'react';
import axios from 'axios';
import './sell.css';

const Sell = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactInfo: '',
    propertyType: 'apartment',
    location: '',
    price: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to array
    setFormData(prevState => ({
      ...prevState,
      images: files,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert images to an array of file paths or URLs (you can upload images to a file storage service like AWS S3)
    const imageUrls = formData.images.map(file => URL.createObjectURL(file));

    const propertyData = {
      ...formData,
      images: imageUrls, // Replace with actual image URLs after uploading
    };

    try {
      // Send property data to the backend
      const response = await axios.post('http://localhost:5000/api/properties/sell', propertyData);
      console.log('Property submitted successfully:', response.data);

      // Reset the form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        contactInfo: '',
        propertyType: 'apartment',
        location: '',
        price: '',
        images: [],
      });

      alert('Property submitted successfully!');
    } catch (err) {
      console.error('Error submitting property:', err.response?.data || err.message);
      alert('Failed to submit property. Please try again.');
    }
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

        <input 
          type="email" 
          name="email" 
          placeholder="Email*" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <input 
          type="text" 
          name="contactInfo" 
          placeholder="Contact Info*" 
          value={formData.contactInfo} 
          onChange={handleChange} 
          required 
        />

        <div className="property-type">
          <label>Property Type</label>
          <select 
            name="propertyType" 
            value={formData.propertyType} 
            onChange={handleChange}
          >
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="land">Land</option>
          </select>
        </div>

        <input 
          type="text" 
          name="location" 
          placeholder="Location*" 
          value={formData.location} 
          onChange={handleChange} 
          required 
        />

        <input 
          type="number" 
          name="price" 
          placeholder="Price*" 
          value={formData.price} 
          onChange={handleChange} 
          required 
        />

        <div className="image-upload">
          <label>Upload Property Images</label>
          <input 
            type="file" 
            name="images" 
            multiple 
            onChange={handleImageUpload} 
            accept="image/*" 
          />
          {formData.images.length > 0 && (
            <div className="image-preview">
              {formData.images.map((file, index) => (
                <img 
                  key={index} 
                  src={URL.createObjectURL(file)} 
                  alt={`Property Image ${index + 1}`} 
                  className="preview-image"
                />
              ))}
            </div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Sell;