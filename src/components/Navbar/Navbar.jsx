import React from 'react'
// import React, { useEffect, useState } from 'react'
import './Navbar.css'
import images from '../../constants/images'
import UpNav from '../UpNav/UpNav';
import { RiArrowDropDownLine } from "react-icons/ri";

import { IoPersonSharp } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  // -------------- NAV-EFFECT-SETTINGS START--------------------

  // const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  // const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     const isScrollingDown = prevScrollPos < currentScrollPos;

  //     if (!isScrollingDown || currentScrollPos <= 0) {
  //       setVisible(true);
  //     } else {
  //       setVisible(currentScrollPos <= 500);
  //     }

  //     setPrevScrollPos(currentScrollPos);
  //   };

  //   setVisible(window.pageYOffset <= 500);

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [prevScrollPos]);

  return (
    // visible ? (
    <>
      < UpNav />
      <nav className='app__navbar'>
        <div className='app__navbar-logo'>
          <Link to="/Home">
            <img src={images.NavbarLogo} alt='app logo' />
          </Link>
        </div>
        <ul className="app__navbar-links">
          <li className='p-links'><Link to="/Home">Home</Link></li>
          <li className='p-links'><Link to="/AboutUs">About Us</Link></li>
          <div>
            <div className="dropdown" id="nav-special-id-dropdown">
              <ul className='p-links' id='nav-drop-aligning'>
                <li><Link to="">Insurance</Link><RiArrowDropDownLine className="dropdown-icon" /></li>
              </ul>
              <div className="dropdown-content">
                <Link to="/InsurancePolicies">Insurance Policies</Link>
                <Link to="/ApplyOnline">Apply Online</Link>
                <Link to="/PaymentProcess">Payment Process</Link>
                <Link to="/InsuranceClaims">Insurance claims</Link>
              </div>
            </div>
          </div>

          <li className='p-links'><Link to="/Updates">Updates</Link></li>
          <div>
            <div className="dropdown" id="nav-special-id-dropdown">
              <ul className='p-links' id='nav-drop-aligning'>
                <li><Link to="">System</Link><RiArrowDropDownLine className="dropdown-icon" /></li>
              </ul>
              <div className="dropdown-content">
                <Link to="/Contracts">Contracts</Link>
                <Link to="Stream-Process">Streamlined Data Processing</Link>
                <Link to="Blockchain-Int">Blockchain Assurance</Link>
              </div>
            </div>
          </div>
          <li className='p-links'><Link to="/Contact">Contact</Link></li>

        </ul>
        <div className='app__navbar-login'>
          <Link to="/Dashboard" className='p-links' ><IoPersonSharp size={25} title='Dashboard' /></Link>
        </div>
        <div className='app__navbar-login'>
          <Link to="/Register" className='p-links' id='p-links--' title='Register Now'>Get Started</Link>
        </div>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color="#0F2E0F" fontSize={25} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <TfiClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
              <ul className="app__navbar-smallscreen_links">
                <li><Link to="/Home" onClick={() => setToggleMenu(false)}>Home</Link></li>
                <li><Link to="/AboutUs" onClick={() => setToggleMenu(false)}>AboutUs</Link></li>
                {/* <li><Link to="/Gallery" onClick={() => setToggleMenu(false)}>Gallery</Link></li> */}
                <li className='nav-drop-in-togle'>
                  <div className="dropdown" id='nav-drop-in-togle-id'>
                    <ul className='p-links' id='nav-drop-aligning'>
                      <li><Link to="">Insurance</Link><RiArrowDropDownLine className="dropdown-icon" /></li>
                    </ul>
                    <div className="dropdown-content">
                      <Link to="/Insurance">Insurance</Link>
                      <Link to="/ApplyOnline">Apply Online</Link>
                      <Link to="/InsuranceClaims">Insurance claims</Link>
                    </div>
                  </div>
                </li>
                <li><Link to="/Updates" onClick={() => setToggleMenu(false)}>Updates</Link></li>
                <li className='nav-drop-in-togle'>
                  <div className="dropdown" id='nav-drop-in-togle-id'>
                    <ul className='p-links' id='nav-drop-aligning'>
                      <li><Link to="">System</Link><RiArrowDropDownLine className="dropdown-icon" /></li>
                    </ul>
                    <div className="dropdown-content">
                      <Link to="/Contracts">Contracts</Link>
                      <Link to="/Stream-Process">Streamlined Data Processing</Link>
                      <Link to="/Blockchain-Int">Blockchain Integration</Link>
                    </div>
                  </div>
                </li>
                <li><Link to="/Contact" onClick={() => setToggleMenu(false)}>Contact</Link></li>
                <li id='app__login'>
                  <Link to="/Dashboard" className='p-links' onClick={() => setToggleMenu(false)} title='Dashboard'><IoPersonSharp size={20} /></Link>
                </li>
                <li id='app__table-cart'>
                  <Link to="/Register" className='p-links' onClick={() => setToggleMenu(false)} title='Register Now'>Get Started</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav >

    </>
    // ) : ""
  );
}

export default Navbar