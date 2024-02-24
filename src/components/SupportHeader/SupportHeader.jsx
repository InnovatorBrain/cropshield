import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { TbMessages } from "react-icons/tb";

import './SupportHeader.css'
import images from '../../constants/images'

const SupportHeader = (props) => {
    useEffect(() => {
        const handleScrollClick = () => {
            window.scrollBy(0, 600);
        };

        const scrollElement = document.getElementById("scroll");
        if (scrollElement) {
            scrollElement.addEventListener("click", handleScrollClick);
        }

        return () => {
            if (scrollElement) {
                scrollElement.removeEventListener("click", handleScrollClick);
            }
        };
    }, []);
    return (
        <>
            <div className="AboutUs-container">
                <img src={images.Support.SupportImageOne} alt="AboutUsTop Visiual" className='AboutUsTop-image' />
                <p className='AboutUs-title'>{props.title} <br /> <span className='AboutUs-title-hr'></span></p>

            </div>
            <div className="Support-main-Container">
                <div className="Support-left-container">
                    <h5 className='Support-main-heading'>A few recommended topics for you</h5>
                    <div className="Support-left-container-p-links">
                        <p className='Support-left-p'><Link to="" className='Support-left-link'>Staying Safe on CropShield</Link> <br /> Online safety best practices</p>
                        <p className='Support-left-p'><Link to="" className='Support-left-link'>Edit Account Information</Link> <br /> Update your account info</p>
                        <p className='Support-left-p'><Link to="" className='Support-left-link'>Profile Tips and Best Practices</Link> <br /> Tips for crafting a great profile</p>
                        <p className='Support-left-p'><Link to="" className='Support-left-link'>Monthly Billing Cycle</Link> <br /> How billing periods work</p>
                    </div>
                </div>
                <div className="Support-right-container">
                    <h5 className='Support-main-heading'>Online Support</h5>
                    <p className="Support-right-p"><BsFillQuestionCircleFill className='Support-right-p-icons' />Resources for Administrators</p>
                    <p className="Support-right-p"> <BsFillQuestionCircleFill className='Support-right-p-icons' />Resources for users</p>
                    <p className="Support-right-p"> <TbMessages className='Support-right-p-icons' />Ask the community</p>

                </div>
            </div>
        </>
    )
}
export default SupportHeader