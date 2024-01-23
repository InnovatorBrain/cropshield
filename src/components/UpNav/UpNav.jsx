import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react'
import "./UpNav.css"


// Icons
import { ImPhone } from "react-icons/im";

import { LuMail } from "react-icons/lu";
import { LuAlarmClock } from "react-icons/lu";


// Social Media Icons
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";

function UpNav() {
    
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
            <div className="upNav_container">
                <div className="upNav_contacts">
                    <div className="upNav_contacts_">
                        <ImPhone className='upNav_contacts_icons' /> <p className='upNav_text'><a href="tel:+923070286263">(+92) 3070286263</a></p>
                    </div>
                    <div className="upNav_contacts_">
                        <LuMail className='upNav_contacts_icons' /> <p className='upNav_text' ><a href="mailto:fazitanveer2@gmail.com">fazitanveer2@gmail.com</a></p>
                    </div>
                    <div className="upNav_contacts_">
                        <LuAlarmClock className='upNav_contacts_icons' /> <p className='upNav_text' >Mon - Fri: 10 am to 7 pm</p>
                    </div>

                </div>
                <div className="upNav_socialmedia">
                    <FaTwitter className='upNav_socialmedia_icons' />
                    <FaFacebookF className='upNav_socialmedia_icons' />
                    <FaLinkedinIn className='upNav_socialmedia_icons' />
                    <GrGoogle className='upNav_socialmedia_icons' />

                </div>

            </div>
        </>
        : ""
    )
}

export default UpNav