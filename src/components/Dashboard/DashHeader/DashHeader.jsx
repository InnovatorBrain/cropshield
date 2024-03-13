import React, { useState, useEffect } from 'react';
import './DashHeader.css';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import axios from 'axios';


function DashHeader() {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    profile_picture: {
      image: null
    }
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get('http://127.0.0.1:8000/auth/profile-data/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError("Failed to fetch user data");
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
        className="DashHeader-input"
        name="text"
        placeholder="Search..."
        type="search"
      />
      {/* Search Input ends*/}

      <div className="DashHeader-nav-pofile">
        <Link>
          <IoMdNotificationsOutline className="DashHeader-notification-id" />
        </Link>
        <div className="DashHeader-user">
          {userData.profile_picture && userData.profile_picture.image ? (
            <img
              src={`http://127.0.0.1:8000${userData.profile_picture.image}`}
              alt={`${userData.first_name} ${userData.last_name}`}
              className="DashHeader-user-img"
            />
          ) : (
            <div className="DashHeader-user-img-placeholder">No Image</div>
          )}
          <span className="DashHeader-user-img-span">{userData.first_name} {userData.last_name}</span>
        </div>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default DashHeader;
