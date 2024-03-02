import React, { useState } from 'react';
import axios from 'axios';
import { FaHome } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import "./ResetPassword.css";

function ResetPasswordEmailPage() {
  const { uid, token } = useParams();
  const [formData, setFormData] = useState({
    password: '',
    confirm_password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { password, confirm_password } = formData;
    if (password !== confirm_password) {
      setError('Password and Confirm Password do not match');
      return;
    }

    try {
      await axios.post(`http://localhost:8000/auth/reset-password-Email/${uid}/${token}/`, {
        password,
        confirm_password
      });
      setSuccess(true);
      setError('');
    } catch (error) {
      setError('Failed to reset password. Please try again.');
    }
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
          {!success ? (
            <form onSubmit={handleSubmit} className="form">
              <span className="form-title">Reset Password</span>
              <span className="form-title-text">Please enter your new password</span>
              <label htmlFor="password" className="label">Password</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required className="input" />
              <label htmlFor="confirm_password" className="label">Confirm Password</label>
              <input type="password" id="confirm_password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} required className="input" />
              {error && <p className="error">{error}</p>}
              <button type="submit" className="submit-button">Reset Password</button>
            </form>
          ) : (
            <div className="success-message">
              <p>Password reset successfully!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ResetPasswordEmailPage;
