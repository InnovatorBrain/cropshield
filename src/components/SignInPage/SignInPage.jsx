import React, { useState } from 'react';
import axios from 'axios';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./SignInPage.css";

function SignInPage() {
    const [formData, setFormData] = useState({
        username: '',
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
            console.log(response); // Log entire response object
            if (response.status === 200) {
                localStorage.setItem('accessToken', response.data.token.access);
                localStorage.setItem('refreshToken', response.data.token.refresh);
                window.location.href = '/dashboard';
            } else {
                setError('Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Login failed:', error); // Log the error for debugging
            setError('Login failed. Please try again.');
        }
    };


    return (
        <>
            <div className="SignInPageContainer">
                <div className="SignInPageLefttSide">
                    <div className="SignIn-breadcrumb">
                        <Link to="/">
                            <FaHome className="SignIn-page-homeIcon" />
                        </Link>
                        <span>/ Sign In</span>
                    </div>
                    <div className="SignInPageTitle-div">
                        <h3 className='SignInPageTitle'>Sign In to Your Account</h3>
                        <p className='SignInPageText'>Welcome back! Please enter your credentials.</p>
                    </div>
                </div>
                <div className="SignInPageRightSide">
                    <form className="form" onSubmit={handleSubmit}>
                        <span className="form-title">Sign In</span>
                        <label htmlFor="username" className="label">Username</label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required className="input" />
                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required className="input" />
                        {error && <p className="error">{error}</p>}
                        <div className="passwordOptions">
                            <Link to="/send-password-Email" className="SignIn-form-forgetPassword">Forget Password</Link>
                        </div>
                        <button type="submit" className="submit-button">Sign In</button>
                        <div className='SignIn-page-if-accountexist'>
                            <p className='SignIn-page-if-accounttext'>If you don't have an account</p>
                            <Link to="/register" className='SignIn-page-if-accountlink'>Register Now</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignInPage;
