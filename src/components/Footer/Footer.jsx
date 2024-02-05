import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaInstagram, FaSpotify, FaTwitter } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="Footer-main-container">
        <div className="Footer_Container">
          <div className="Footer_AboutUs_Section">
            <ul>
              <li className='Footer_AboutUs_title'>
                About Us
              </li>
              <li><Link to="/about">About Us Overview</Link></li>
              <li><Link to="">Feedback</Link></li>
              <li><Link to="">Community</Link></li>
              <li><Link to="">Crop Insurance AI</Link></li>
              <li><Link to="">Blockchain Solutions</Link></li>
            </ul>
          </div>
          <div className="Footer_Services_Section">
            <ul>
              <li className="Footer_Services_title">
                Services
              </li>
              <li><Link to="">Terms of Service</Link></li>
              <li><Link to="">Trust, Safety & Security</Link></li>
              <li><Link to="">Fast & Automated Claim <br></br>Processing</Link></li>
              <li><Link to="">Monitoring Tools</Link></li>
              <li><Link to="">Blockchain Solutions</Link></li>
              <li><Link to="">Partnership Opportunities</Link></li>
            </ul>
          </div>
          <div className="Footer_ContactUs_Section">
            <ul>
              <li className="Footer_ContactUs_title">
                Contact Us
              </li>
              <li><Link to="">Customer Support</Link></li>
              <li><Link to="">Help & Support</Link></li>
              <li><Link to="">FAQs</Link></li>
              <li><Link to="">Email Support</Link></li>
              <li><Link to="">Live Chat and<br />Questions</Link></li>
            </ul>
          </div>

          <div className="Footer_Images_Section">
            <div className="appStoreImageOne">
              <h3>Get a Newslatter</h3>
              <p>Sign up for our newsletter to hear our latest insurance Policies and updates</p>
            </div>
            <div className="appStoreImageTwo">
              <div className="form-control">
                <input
                  type="email"
                  autocomplete="email"
                  aria-label="Email address" required />
                <label>
                  <span style={{ transitionDelay: '0ms' }}>E</span>
                  <span style={{ transitionDelay: '50ms' }}>m</span>
                  <span style={{ transitionDelay: '100ms' }}>a</span>
                  <span style={{ transitionDelay: '150ms' }}>i</span>
                  <span style={{ transitionDelay: '200ms' }}>l</span>
                  <span style={{ transitionDelay: '250ms' }}> </span>
                  <span style={{ transitionDelay: '300ms' }}>a</span>
                  <span style={{ transitionDelay: '350ms' }}>d</span>
                  <span style={{ transitionDelay: '400ms' }}>d</span>
                  <span style={{ transitionDelay: '450ms' }}>r</span>
                  <span style={{ transitionDelay: '500ms' }}>e</span>
                  <span style={{ transitionDelay: '550ms' }}>s</span>
                  <span style={{ transitionDelay: '600ms' }}>s</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="thin-line"></div>
        <div className="Footer_SocialMedia_Section_cont">
          <div className="Footer_SocialMedia_Section">
            <ul className='Footer_SocialMedia_Ul'>
              <li className='Footer_FollowUs_Text'>Follow Us:</li>
              <li>
                <a href="https://www.facebook.com">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com">
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.spotify.com">
                  <FaSpotify />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>

          <li className='AllRightReserve'>© 2020 - 2024 Cropshield®. All Rights Reserved</li>

        </div>
      </div>
    </>
  );
}

export default Footer;