import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [sellItems, setSellItems] = useState([]); // State for sell items
  const [buyItems, setBuyItems] = useState([]); // State for buy items
  const [selectedItem, setSelectedItem] = useState(null); // State for selected item to update/delete

  // Mock data for sell and buy items (replace with API calls)
  useEffect(() => {
    // Fetch sell items (replace with actual API call)
    const fetchSellItems = async () => {
      const mockSellItems = [
        { id: 1, name: "Item 1", price: 100, description: "Description for Item 1" },
        { id: 2, name: "Item 2", price: 200, description: "Description for Item 2" },
      ];
      setSellItems(mockSellItems);
    };

    // Fetch buy items (replace with actual API call)
    const fetchBuyItems = async () => {
      const mockBuyItems = [
        { id: 1, name: "Bought Item 1", price: 150, description: "Description for Bought Item 1" },
        { id: 2, name: "Bought Item 2", price: 250, description: "Description for Bought Item 2" },
      ];
      setBuyItems(mockBuyItems);
    };

    fetchSellItems();
    fetchBuyItems();
  }, []);

  // Handle update item
  const handleUpdateItem = (item) => {
    setSelectedItem(item);
    // Navigate to an update form or show a modal (implementation depends on your design)
    alert(`Update item: ${item.name}`);
  };

  // Handle delete item
  const handleDeleteItem = (itemId) => {
    const updatedSellItems = sellItems.filter((item) => item.id !== itemId);
    setSellItems(updatedSellItems);
    alert(`Item ${itemId} deleted`);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token from localStorage
    localStorage.removeItem("user"); // Clear user data from localStorage
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="profile-container">
      <h1>My Profile</h1>

      {/* Sell Items Section */}
      <div className="section">
        <h2>My Sell Items</h2>
        {sellItems.length > 0 ? (
          <ul className="item-list">
            {sellItems.map((item) => (
              <li key={item.id} className="item">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>{item.description}</p>
                <div className="item-actions">
                  <button onClick={() => handleUpdateItem(item)}>Update</button>
                  <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No sell items listed.</p>
        )}
      </div>

      {/* Buy Items Section */}
      <div className="section">
        <h2>My Buy Items</h2>
        {buyItems.length > 0 ? (
          <ul className="item-list">
            {buyItems.map((item) => (
              <li key={item.id} className="item">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No buy items found.</p>
        )}
      </div>

      {/* Logout Button */}
      <div className="logout-section">
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;