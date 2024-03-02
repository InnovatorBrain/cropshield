import React, { useState } from 'react';
import axios from 'axios';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./RegisterPage.css";

function RegisterPage() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '' 
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const { first_name, last_name, email, password, confirm_password } = formData;
    if (!first_name || !last_name || !email || !password || !confirm_password) {
      setError('Please fill out all fields.');
      return;
    }

    // Check if passwords match
    if (password !== confirm_password) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/auth/register/', formData);
      console.log(response.data);
      // Clear form fields
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''
      });
      // Redirect to sign-in page
      window.location.href = '/SignIn';
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error state or display error message to the user
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <>
      <div className="RegisterPageContainer">
        <div className="RegisterPageLefttSide">
          <div className="breadcrumb">
            <Link to="/">
              <FaHome className="Register-page-homeIcon" />
            </Link>
            <span>/ Register</span>
          </div>
          <h3 className='RegisterPageTitle'>Create Your Account</h3>
          <p className='RegisterPageText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nihil rem. Tempora.</p>
        </div>
        <div className="RegisterPageRightSide">
          <form className="form" onSubmit={handleSubmit}>
            <span className="form-title">Register Now</span>
            <span className="form-title-text">Welcome back! Please enter your details</span>
            <label htmlFor="first_name" className="label">First Name</label>
            <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} required className="input" />
            <label htmlFor="last_name" className="label">Last Name</label>
            <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} required className="input" />
            <label htmlFor="email" className="label">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="input" />
            <label htmlFor="password" className="label">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required className="input" />
            <label htmlFor="confirm_password" className="label">Confirm Password</label>
            <input type="password" id="confirm_password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} required className="input" />
            {error && <p className="error">{error}</p>}
            <div className="passwordOptions">
              <Link to="" type="button" className="Register-form-forgetPassword">With All Terms & Conditions</Link>
            </div>
            <button type="submit" className="submit-button">Register</button>
            <div className='Register-page-if-accountexist'>
              <p className='Register-page-if-accounttext'>If you have an account</p>
              <Link to="/SignIn" className='Register-page-if-accountlink'>Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
