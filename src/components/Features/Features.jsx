import React, { useState } from 'react';
import "./Features.css";
import { TbPoint } from "react-icons/tb";
import images from '../../constants/images';

const Features = () => {
    const [activeButton, setActiveButton] = useState('content1'); // Initialize with 'content1'

    const toggleContent = (contentId) => {
        if (activeButton !== contentId) {
            setActiveButton(contentId);
        }
    }

    return (
        <>
            <div className="features-main-container">
                <div className="features-left-side">
                    <div className="features-hint">
                        <hr />
                        <p>Features</p>
                    </div>
                    <p className="features-title">
                        We Empower Farmers Worldwide with Over 2000+ <span>Partners</span>
                    </p>
                    <p className='features-title-descriptions'>
                        Revolutionize traditional approaches with AI-driven innovation in CropShield. Ensure seamless functionality.
                    </p>
                    <div className="features-title-points-div">
                        <p className="features-title-points" onClick={() => toggleContent('content1')}>
                            <TbPoint className='features-title-points-icons' /> Facilitate streamlined communication processes.
                        </p>
                        <p className="features-title-points" onClick={() => toggleContent('content2')}>
                            <TbPoint className='features-title-points-icons' /> Cultivate cutting-edge paradigms adeptly.
                        </p>
                        <p className="features-title-points" onClick={() => toggleContent('content3')}>
                            <TbPoint className='features-title-points-icons' /> Foster pioneering paradigms adeptly.
                        </p>
                    </div>
                </div>
                {/* -------RIGHT_SIDE-Starts------- */}
                <div className="features-right-side">
                    <div className="features-right-buttons-div">
                        <button className={activeButton === 'content1' ? 'active-button' : ''} onClick={() => toggleContent('content1')}>Full Satisfaction</button>
                        <button className={activeButton === 'content2' ? 'active-button' : ''} onClick={() => toggleContent('content2')}>Expert Team</button>
                        <button className={activeButton === 'content3' ? 'active-button' : ''} onClick={() => toggleContent('content3')}>Mission & Vision</button>
                    </div>

                    <div className={`features-content ${activeButton === 'content1' ? 'active' : ''}`}>
                        <div className="features-content-main fade-in">
                            <div className="features-image">
                                <img src={images.Features.FeatureImageOne} alt="" />
                            </div>
                            <div className="features-image-points">
                                <p><TbPoint className='features-title-points-icons' />Empowering Farmers with Smart Solutions. </p>
                                <p><TbPoint className='features-title-points-icons' />Your Reliable Partner in Crop Insurance. </p>
                                <p><TbPoint className='features-title-points-icons' />Leading the Way in Crop Insurance. </p>
                                <p><TbPoint className='features-title-points-icons' />Experience the CropShield Advantage. </p>
                                <p><TbPoint className='features-title-points-icons' />CropShield Redefines Crop Insurance Standards. </p>
                            </div>
                        </div>
                    </div>
                    <div className={`features-content ${activeButton === 'content2' ? 'active' : ''}`}>
                        <div className="features-content-main fade-in">
                            <div className="features-image">
                                <img src={images.Features.FeatureImageTwo} alt="" />
                            </div>
                            <div className="features-image-points">
                                <p><TbPoint className='features-title-points-icons' />Pioneering Solutions Beyond Conventional Ideas. </p>
                                <p><TbPoint className='features-title-points-icons' />Focused on Delivering Excellence. </p>
                                <p><TbPoint className='features-title-points-icons' />Crafting Solutions Tailored to Needs. </p>
                                <p><TbPoint className='features-title-points-icons' />Driving Growth Through Expertise. </p>
                                <p><TbPoint className='features-title-points-icons' />Guiding Your Success with Proven Strategies. </p>
                            </div>
                        </div>
                    </div>
                    <div className={`features-content ${activeButton === 'content3' ? 'active' : ''}`}>
                        <div className="features-content-main fade-in">
                            <div className="features-image">
                                <img src={images.Features.FeatureImageThree} alt="" />
                            </div>
                            <div className="features-image-points">
                                <p><TbPoint className='features-title-points-icons' />Agricultural Transformation Beyond Traditional Methods. </p>
                                <p><TbPoint className='features-title-points-icons' />Enabling Sustainable Growth for Farmers. </p>
                                <p><TbPoint className='features-title-points-icons' />Committed to Delivering Quality Support. </p>
                                <p><TbPoint className='features-title-points-icons' />Setting New Standards Through Strategic Positioning. </p>
                                <p><TbPoint className='features-title-points-icons' />Fostering Resilience. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;
