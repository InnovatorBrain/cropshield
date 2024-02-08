import React, { useState } from 'react';
import './Insurance.css'
import axios from 'axios';

const AddPolicy = () => {
  const [formData, setFormData] = useState({
    category: '',
    policyName: '',
    sumAssurance: '',
    premium: '',
    tenure: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send form data to the backend using Axios or any other method
      await axios.post('/api/add-policy', formData);
      
      // Clear form fields after submission
      setFormData({
        category: '',
        policyName: '',
        sumAssurance: '',
        premium: '',
        tenure: '',
      });
      
      // Optionally, you can handle success or show a notification
      alert('Policy added successfully!');
    } catch (error) {
      console.error('Error adding policy:', error);
      // Optionally, you can handle errors or show a notification
      alert('Error adding policy. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>ADD POLICY</h2>
      <form onSubmit={handleSubmit} style={{ margin: '100px', marginTop: '0px' }}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Life Insurance"
            required
          />

          <label htmlFor="policyName">Policy Name</label>
          <input
            type="text"
            className="form-control"
            id="policyName"
            name="policyName"
            value={formData.policyName}
            onChange={handleChange}
            placeholder="Type Here"
            required
          />

          <label htmlFor="sumAssurance">Sum Assurance</label>
          <input
            type="number"
            className="form-control"
            id="sumAssurance"
            name="sumAssurance"
            value={formData.sumAssurance}
            onChange={handleChange}
            placeholder="1250000"
            required
          />

          <label htmlFor="premium">Premium</label>
          <input
            type="number"
            className="form-control"
            id="premium"
            name="premium"
            value={formData.premium}
            onChange={handleChange}
            placeholder="70000"
            required
          />

          <label htmlFor="tenure">Tenure</label>
          <input
            type="number"
            className="form-control"
            id="tenure"
            name="tenure"
            value={formData.tenure}
            onChange={handleChange}
            placeholder="12"
            required
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">ADD</button>
      </form>
    </div>
  );
};

export default AddPolicy;
