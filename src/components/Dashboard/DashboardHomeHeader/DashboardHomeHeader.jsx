import React, { useState, useEffect } from 'react';
import './DashboardHomeHeader.css';
import axios from 'axios';
import { MdDateRange } from "react-icons/md";

function DashboardHomeHeader() {
    const [username, setUsername] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        // Fetch username
        axios.get('your_backend_url/username')
            .then(response => {
                setUsername(response.data.username);
            })
            .catch(error => {
                console.error('Error fetching username:', error);
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
            <p className='dashHomeHeader-title'>Welcome Back, <span className='dashHomeHeader-username'>{username}</span>!</p>
            <div className='dashHomeHeader-bellow-div'>
                <MdDateRange className='dashHomeHeader-date-icon'/>
                <span className='dashHomeHeader-date-text'>{currentDate}</span>
            </div>
        </div>
    );
}

export default DashboardHomeHeader;
