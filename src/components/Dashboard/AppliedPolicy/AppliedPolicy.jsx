// AppliedPolicy.js
import React, { useState, useEffect } from 'react';
import './AppliedPolicy.css'; 
import axios from 'axios';
import { Link } from 'react-router-dom'; 

const AppliedPolicy = () => {
    const [appliedPolicy, setAppliedPolicy] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAppliedPolicy = async () => {
            try {
                const response = await axios.get('/api/appliedpolicy'); // Replace with your API endpoint
                setAppliedPolicy(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching applied policy:', error);
            }
        };
        fetchAppliedPolicy();
    }, []);

    return (
        <div className="applied-policy-container">
            <h5>Applied Policy Details</h5>
            {loading ? (
                <p>Loading...</p>
            ) : appliedPolicy ? (
                <div className="policy-details">
                    <p><span>Farmer Name:</span> {appliedPolicy.farmerName}</p>
                    <p><span>Policy ID:</span> {appliedPolicy.policyId}</p>
                    <p><span>Farm Size:</span> {appliedPolicy.farmSize ? (appliedPolicy.farmSize / 1024).toFixed(2) + ' KB' : 'N/A'}</p>
                    <p><span>Approved:</span> {appliedPolicy.approved ? 'Yes' : 'No'}</p>
                    {/* Add additional columns and data here */}
                </div>
            ) : (
                <div className="no-applied-policy-message">
                    <p>You have not applied for any policy yet.</p>
                    <p><Link to="/apply-policy" className="apply-policy-link">Apply for a policy now</Link></p>
                </div>
            )}
            <div className="navigation-buttons">
                <Link to="/dashboard/apply-policy" className="back-button" id='back-button-id'>Go Back For Apply</Link>
            </div>
        </div>
    );
};

export default AppliedPolicy;
