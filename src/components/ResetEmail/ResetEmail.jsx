import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./ResetEmail.css"; // Use the same CSS file as RegisterPage

function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    email: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
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

    // Check if the email field is filled
    const { email } = formData;
    if (!email) {
      setError('Please enter your email.');
      return;
    }

    try {
      setLoading(true);
      // Make a POST request to your backend endpoint for sending password reset emails
      await axios.post('http://127.0.0.1:8000/auth/send-password-Email/', { email });
      setSuccess(true);
      setError('');
    } catch (error) {
      console.error('Password reset failed:', error);
      setError('Password reset failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const openEmailClient = () => {
    // Logic to open the user's email client in a new tab
    window.open('mailto:', '_blank');
  };

  return (
    <>
      <div className="ResetPasswordPageContainer">
        <div className="ResetPasswordPageLeftSide">
          <div className="breadcrumb">
            <Link to="/">
              <FaHome className="Reset-password-homeIcon" />
            </Link>
            <span>/ Reset Password</span>
          </div>
          <h3 className='ResetPasswordPageTitle'>Reset Your Password</h3>
          <p className='ResetPasswordPageText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nihil rem. Tempora.</p>
        </div>
        <div className="ResetPasswordPageRightSide">
          {!success && (
            <form className="form" onSubmit={handleSubmit}>
              <span className="form-title">Reset Password</span>
              <span className="form-title-text">Please enter your email to reset your password</span>
              <label htmlFor="email" className="label">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="input" />
              {error && <p className="error">{error}</p>}
              <button type="submit" className="submit-button" disabled={loading}>{loading ? 'Sending...' : 'Reset Password'}</button>
              <div className='Reset-password-if-accountexist'>
                <p className='Reset-password-if-accounttext'>Remember your password?</p>
                <Link to="/SignIn" className='Reset-password-if-accountlink'>Sign In</Link>
              </div>
            </form>
          )}
          {success && (
            <div className="success-message">
              <p className="email-send-success-text">Password reset email sent successfully!</p>
              <button className="email-client-button" onClick={openEmailClient}>Open Email Client</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ResetPasswordPage;
