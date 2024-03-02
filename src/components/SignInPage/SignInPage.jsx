import React, { useState } from 'react';
import axios from 'axios';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./SignInPage.css";

function SignInPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
        try {
            const response = await axios.post('http://localhost:8000/auth/SignIn/', formData);
            console.log(response.data); // Log response data for debugging
            // Check if login was successful based on response data
            if (response.status === 200) {
                // Redirect user to dashboard upon successful login
                window.location.href = '/dashboard';
            } else {
                setError('Login failed. Please try again.'); // Handle other response statuses if needed
            }
        } catch (error) {
            console.error('Login failed:', error);
            setError('Login failed. Please try again.'); // Display error message to the user
        }
    };

    return (
        <>
            <div className="SignInPageContainer">
                <div className="RegisterPageLefttSide">
                    <div className="breadcrumb">
                        <Link to="/">
                            <FaHome className="Register-page-homeIcon" />
                        </Link>
                        <span>/ Sign In</span>
                    </div>
                    <h3 className='RegisterPageTitle'>Sign In to Your Account</h3>
                    <p className='RegisterPageText'>Welcome back! Please enter your credentials.</p>
                </div>
                <div className="RegisterPageRightSide">
                    <form className="form" onSubmit={handleSubmit}>
                        <span className="form-title">Sign In</span>
                        <label htmlFor="email" className="label">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="input" />
                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required className="input" />
                        {error && <p className="error">{error}</p>} {/* Display error message if login fails */}
                        <div className="passwordOptions">
                            <Link to="/send-password-Email" className="Register-form-forgetPassword">Forget Password</Link>
                        </div>
                        <button type="submit" className="submit-button">Sign In</button>
                        <div className='Register-page-if-accountexist'>
                            <p className='Register-page-if-accounttext'>If you don't have an account</p>
                            <Link to="/register" className='Register-page-if-accountlink'>Register Now</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignInPage;
