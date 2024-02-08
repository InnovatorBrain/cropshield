import React, { useState } from 'react';
import './Customer.css';
import axios from 'axios';

const CustomerSignup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    mobile: '',
    address: '',
    profile_pic: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profile_pic: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await axios.post('YOUR_API_ENDPOINT', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // Handle success response
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <div>
      {/* Include Navbar component here */}
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Username"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              placeholder="First Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="mobile">Contact</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              placeholder="Contact"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Address"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="profile_pic">Profile Picture</label>
            <input
              type="file"
              className="form-control"
              id="profile_pic"
              name="profile_pic"
              onChange={handleFileChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>

      {/* Include Footer component here */}
    </div>
  );
};

export default CustomerSignup;
