import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./ProfileBlock.css";

const ProfileBlock = () => {
    const [userData, setUserData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        passwordLastChanged: ""
    });

    useEffect(() => {
        fetchUserDataFromAPI();
    }, []);

    const fetchUserDataFromAPI = async () => {
        const token = localStorage.getItem('token');

        try {
            const response = await axios.get('http://127.0.0.1:8000/auth/profile-data/', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setUserData(response.data);
        } catch (error) {
            console.error("Error fetching user data: ", error);
        }
    };

    return (
        <div className="profileBlock-main-container">
            <div className="profileBlock-container">
                <div className="profileBlock-image-container">
                    <img src={`https://source.unsplash.com/100x100/?profile/${userData.first_name}`} alt="Profile" />
                </div>
                <div className="profileBlock-text-container">
                    <h1 className='profileBlock-text-username'>{userData.first_name} {userData.last_name}</h1>
                    <button className='profileBlockButton'>Edit Profile</button>
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
