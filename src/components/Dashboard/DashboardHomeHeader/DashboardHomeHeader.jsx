import React, { useState, useEffect } from 'react';
import './DashboardHomeHeader.css';
import axios from 'axios';
import { MdDateRange } from "react-icons/md";

function DashboardHomeHeader() {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        // Fetch user data
        const token = localStorage.getItem('accessToken');
        axios.get('http://127.0.0.1:8000/auth/profile-data/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            setFirstName(response.data.first_name);
            setLastName(response.data.last_name);
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });

        // Get current date and format it according to the user's locale
        const userLocale = navigator.language;
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC' // Specify UTC to ensure accurate date representation
        };
        const formattedDate = new Date().toLocaleDateString(userLocale, options);
        setCurrentDate(formattedDate);
    }, []);

    return (
        <div className="dashHomeHeader-container">
            <p className='dashHomeHeader-title'>Welcome Back, <span className='dashHomeHeader-username'>{first_name} {last_name}</span>!</p>
            <div className='dashHomeHeader-bellow-div'>
                <MdDateRange className='dashHomeHeader-date-icon' />
                <span className='dashHomeHeader-date-text'>{currentDate}</span>
            </div>
        </div>
    );
}

export default DashboardHomeHeader;
