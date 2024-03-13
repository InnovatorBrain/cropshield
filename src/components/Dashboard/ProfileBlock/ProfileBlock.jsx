import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./ProfileBlock.css";

const ProfileBlock = () => {
    const [userData, setUserData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        profile_picture: {
            custom_user: null,
            image: null
        }
    });
    const [imageFile, setImageFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUserDataFromAPI();
    }, []);

    const fetchUserDataFromAPI = async () => {
        const token = localStorage.getItem('accessToken');

        try {
            const response = await axios.get('http://127.0.0.1:8000/auth/profile-data/', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setUserData(response.data);
        } catch (error) {
            console.error("Error fetching user data: ", error);
            setError("Failed to fetch user data");
        }
    };

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        setImageFile(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsUploading(true);

        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            const token = localStorage.getItem('accessToken');
            const url = 'http://127.0.0.1:8000/auth/profile-picture/';
            await axios.post(url, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            fetchUserDataFromAPI();
        } catch (error) {
            console.error("Error uploading profile picture: ", error);
            setError("Failed to upload profile picture");
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="profileBlock-main-container">
            <div className="profileBlock-container">
                <div className="profileBlock-image-container">
                    {userData.profile_picture && userData.profile_picture.image ? (
                        <img src={`http://127.0.0.1:8000${userData.profile_picture.image}`} alt="Profile" />
                    ) : (
                        <div className="placeholder-image">No Profile Picture</div>
                    )}
                    <input type="file" accept="image/*" onChange={handleFileInputChange} />
                    <button onClick={handleSubmit} disabled={!imageFile || isUploading}>Upload Image</button>
                    {error && <p className="error-message">{error}</p>}
                </div>
                <div className="profileBlock-text-container">
                    <h1 className='profileBlock-text-username'>{userData.first_name} {userData.last_name}</h1>
                    {/* Link or button for editing profile */}
                    <button className='profileBlockButton'>Edit Profile</button>
                </div>
                <div className="profileBlock-email-container">
                    <p className="profileBlock-text">{userData.email}</p>
                    <Link to="/change-password" className="profileBlock-password-link">Change Password</Link>
                </div>
            </div>
        </div>
    );
};

export default ProfileBlock;
