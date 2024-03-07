import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './PolicyProgress.css'; // Import CSS for styling

const PolicyProgress = ({ userId }) => {
  const [policy, setPolicy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(null);

  // Dummy data for demonstration
  const dummyPolicyData = {
    policyId: 'P123456',
    farmerName: 'John Doe',
    policyName: 'Crop Insurance Policy',
    installmentsPaid: 5,
    totalInstallments: 10,
    policyAmount: 10000,
    totalPaidAmount: 5000,
  };

  useEffect(() => {
    // Simulating fetching data from API
    setTimeout(() => {
      setPolicy(dummyPolicyData);
      setFormData(dummyPolicyData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleClaim = () => {
    // Perform any necessary actions to claim the policy
    // For demonstration, let's just log a message
    console.log('Policy claimed!');
    // You can also add further logic here to redirect the user or perform additional actions
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  if (loading) {
    return (
      <div className="policy-progress-container">
        <h3>Loading...</h3>
      </div>
    );
  }

  if (!policy) {
    return (
      <div className="policy-progress-container">
        <h3>No Policy Found</h3>
        <p>You have not applied for any policy yet.</p>
      </div>
    );
  }

  const { policyId, farmerName, policyName, installmentsPaid, totalInstallments, policyAmount, totalPaidAmount } = policy;
  const progress = (installmentsPaid / totalInstallments) * 100;

  return (
    <div className="policy-progress-container">
      <h3>{policyName}</h3>
      <div className="policy-details">
        <p><span>Policy ID:</span> {policyId}</p>
        <p><span>Farmer Name:</span> {farmerName}</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}>
            <span className="progress-label">{`${progress}% Complete`}</span>
          </div>
        </div>
        {editing ? (
          <div className="edit-form">
            <label htmlFor="installmentsPaid">Installments Paid:</label>
            <input
              type="number"
              id="installmentsPaid"
              name="installmentsPaid"
              value={formData.installmentsPaid}
              onChange={handleChange}
            />
            <label htmlFor="policyAmount">Policy Amount:</label>
            <input
              type="number"
              id="policyAmount"
              name="policyAmount"
              value={formData.policyAmount}
              onChange={handleChange}
            />
            {/* Add more editable fields as needed */}
          </div>
        ) : (
          <>
            <p>Installments Paid: {installmentsPaid} / {totalInstallments}</p>
            <p>Policy Amount: ${policyAmount}</p>
            <p>Total Paid Amount: ${totalPaidAmount}</p>
            {/* Add more non-editable policy details as needed */}
          </>
        )}
        <div className="actions">
          <button onClick={handleClaim}>Claim</button>
        </div>
      </div>
    </div>
  );
};

export default PolicyProgress;
