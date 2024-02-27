import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./ProfileBlock.css";

const ProfileBlock = () => {
    // State to store user data
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        passwordLastChanged: ""
    });

    // Effect to fetch user data from API
    useEffect(() => {
        // Sample API endpoint to fetch user data
        fetchUserDataFromAPI()
            .then(data => setUserData(data))
            .catch(error => console.error("Error fetching user data: ", error));
    }, []);

    // Function to fetch user data from API (Replace with actual API call)
    const fetchUserDataFromAPI = async () => {
        // Sample data (Replace with actual API call)
        return {
            name: "John Doe",
            email: "john.doe@example.com",
            passwordLastChanged: "a month ago"
        };
    };

    return (
        <div className="profileBlock-main-container">
            <div className="profileBlock-container">
                <div className="profileBlock-image-container">
                    {/* Use userData.name or any other field to personalize the image URL */}
                    <img src={`https://source.unsplash.com/100x100/?profile/${userData.name}`} alt="Profile" />
                </div>
                <div className="profileBlock-text-container">
                    <h1 className='profileBlock-text-username'>{userData.name}</h1>
                    <button>Edit Profile</button>
                </div>
                <div className="profileBlock-email-container">
                    <p className="profileBlock-text">{userData.email}</p>
                    <p className="profileBlock-text">Password last changed {userData.passwordLastChanged}</p>
                    <Link to="/change-password" className="profileBlock-password-link">Change Password</Link>
                </div>
            </div>
        </div>
    );
};

export default ProfileBlock;
