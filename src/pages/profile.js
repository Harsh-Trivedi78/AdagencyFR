import React, { useState } from 'react';
import '../UserProfile.css';

const AccountSettings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="account-settings">
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <h2 className="sidebar-header">Account Settings</h2>
        <nav>
          <ul>
            <li><a href="#"><i className="icon-password"></i>Change Password</a></li>
            <li><a href="#"><i className="icon-orders"></i>Your Orders</a></li>
            <li><a href="#"><i className="icon-address"></i>Address</a></li>
            <li><a href="#"><i className="icon-legal"></i>Legal Notice</a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <h1>Personal Information</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name *</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone/Mobile *</label>
            <input type="tel" id="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" required />
          </div>
          <button type="submit" className="save-button">Save Changes</button>
        </form>
        <button className="toggle-sidebar" onClick={handleSidebarToggle}>
          {sidebarOpen ? 'Close' : 'Open'}
        </button>
      </main>
    </div>
  );
};

export default AccountSettings;