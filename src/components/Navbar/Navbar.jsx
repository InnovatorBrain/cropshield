import React, { useEffect, useState } from 'react'
import './Navbar.css'
import images from '../../constants/images'
import { RiArrowDropDownLine } from "react-icons/ri";

import { IoPersonSharp } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);


  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


  return (
    visible ?

      <>
        <nav className='app__navbar'>
          <div className='app__navbar-logo'>
            <Link to="/Home">
              <img src={images.NavbarLogo} alt='app logo' />
            </Link>
          </div>
          <ul className="app__navbar-links">
            <li className='p-links'><Link to="/Home">Home</Link></li>
            <li className='p-links'><Link to="/AboutUs">About Us</Link></li>
            {/* <li className='p-links'><Link to="/Gallery">Insurance</Link></li> */}
            <div>
              <div className="dropdown">
                <ul className='p-links' id='nav-drop-aligning'>
                  <li><Link to="/Gallery">Insurance</Link><RiArrowDropDownLine className="dropdown-icon" /></li>
                </ul>
                <div className="dropdown-content">
                  <a href="Insurance">Insurance</a>
                  <a href="/ApplyOnline">Apply Online</a>
                  <a href="/InsuranceClaims">Insurance claims</a>
                </div>
              </div>
            </div>
            <li className='p-links'><Link to="/Menu">Menu</Link></li>
            <li className='p-links'><Link to="/Contact">Contact</Link></li>
            <li className='p-links'><Link to="/Shop">Shop</Link></li>
          </ul>
          <div className='app__navbar-login'>
            <Link to="/Cart" className='p-links' ><IoPersonSharp size={25} /></Link>
          </div>
          <div className='app__navbar-login'>
            <Link to="/Book-Table" className='p-links' id='p-links--' >Get Started</Link>
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
                    <div className="dropdown">
                      <ul className='p-links' id='nav-drop-aligning'>
                        <li><Link to="">Insurance</Link><RiArrowDropDownLine className="dropdown-icon" /></li>
                      </ul>
                      <div className="dropdown-content">
                        <a href="/Insurance">Insurance</a>
                        <a href="/ApplyOnline">Apply Online</a>
                        <a href="/InsuranceClaims">Insurance claims</a>
                      </div>
                    </div>
                  </li>
                  <li><Link to="/Menu" onClick={() => setToggleMenu(false)}>Menu</Link></li>
                  <li><Link to="/Contact" onClick={() => setToggleMenu(false)}>Contact</Link></li>
                  <li><Link to="/Shop" onClick={() => setToggleMenu(false)}>Shop</Link></li>
                  <li id='app__login'>
                    <Link to="/Cart" className='p-links' onClick={() => setToggleMenu(false)}><IoPersonSharp size={20} /></Link>
                  </li>
                  <li id='app__table-cart'>
                    <Link to="/Book-Table" className='p-links' onClick={() => setToggleMenu(false)}>Get Started</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav >
      </>
      : ""
  )
}

export default Navbar