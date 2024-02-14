import React, { useState, useEffect } from 'react';
import './DashHeader.css';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import axios from 'axios';

function DashHeader() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Simulating a GET request to fetch user data from an API
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []); // Fetch user data when the component mounts

  return (
    <div className="DashHeader-container">
      <div className="DashHeader-breadcrumb">
        <Link to="/">
          <FaHome className="DashHeader-Register-page-homeIcon" />
        </Link>
        <span>/ Dashboard</span>
      </div>
      {/* Search Input starts */}

      <input
        className="DashHeader-input" // Set the class name
        name="text"
        placeholder="Search..." // Set the placeholder text
        type="search"
      />
      {/* Search Input ends*/}

      <div className="DashHeader-nav-pofile">
        <Link>
          <IoMdNotificationsOutline className="DashHeader-notification-id" />
        </Link>
        <div className="DashHeader-user">
          <img
            src={userData.image} // Assuming your API returns the image URL
            alt={userData.name} // Assuming your API returns the user's name
            className="DashHeader-user-img"
          />
          <span className="DashHeader-user-img-span">{userData.name}</span>
        </div>
      </div>
    </div>
  );
}

export default DashHeader;
