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
                        We Are Global Stakeholder
                        Over 2000+ <span>Companies</span>
                    </p>
                    <p className='features-title-descriptions'>
                        Appropriately enhance principle-centered innovation rather
                        than high standards in platforms. Credibly orchestrate functional.
                    </p>
                    <div className="features-title-points-div">
                        <p className="features-title-points" onClick={() => toggleContent('content1')}>
                            <TbPoint className='features-title-points-icons' /> Communicate orthogonal process
                        </p>
                        <p className="features-title-points" onClick={() => toggleContent('content2')}>
                            <TbPoint className='features-title-points-icons' /> Professionally grow cutting-edge paradigms
                        </p>
                        <p className="features-title-points" onClick={() => toggleContent('content3')}>
                            <TbPoint className='features-title-points-icons' /> Professionally grow cutting-edge paradigms
                        </p>
                    </div>
                </div>
                {/* -------RIGHT_SIDE-Starts------- */}
                <div className="features-right-side">
                    <div className="features-right-buttons-div">
                        <button className={activeButton === 'content1' ? 'active-button' : ''} onClick={() => toggleContent('content1')}>Full Satisfaction</button>
                        <button className={activeButton === 'content2' ? 'active-button' : ''} onClick={() => toggleContent('content2')}>Expart Team</button>
                        <button className={activeButton === 'content3' ? 'active-button' : ''} onClick={() => toggleContent('content3')}>Mission & Vission</button>
                    </div>

                    <div className="features-content" style={{ display: activeButton === 'content1' ? 'block' : 'none' }}>
                        <div className="features-content-main">
                            <div className="features-image">
                                <img src={images.Features.FeatureImageOne} alt="" />
                            </div>
                            <div className="features-image-points">
                                <p><TbPoint className='features-title-points-icons' />Rather than unique Idea. </p>
                                <p><TbPoint className='features-title-points-icons' />Entums estibulum dignissim posuere </p>
                                <p><TbPoint className='features-title-points-icons' />Quality users after Breed Applications. </p>
                                <p><TbPoint className='features-title-points-icons' />Market Positioning Expertise. </p>
                                <p><TbPoint className='features-title-points-icons' />Rather than unique Idea. </p>
                            </div>
                        </div>
                    </div>
                    <div className="features-content" style={{ display: activeButton === 'content2' ? 'block' : 'none' }}>
                        <div className="features-content-main">
                            <div className="features-image">
                                <img src={images.Features.FeatureImageTwo} alt="" />
                            </div>
                            <div className="features-image-points">
                                <p><TbPoint className='features-title-points-icons' />Rather than unique Idea. </p>
                                <p><TbPoint className='features-title-points-icons' />Entums estibulum dignissim posuere </p>
                                <p><TbPoint className='features-title-points-icons' />Quality users after Breed Applications. </p>
                                <p><TbPoint className='features-title-points-icons' />Market Positioning Expertise. </p>
                                <p><TbPoint className='features-title-points-icons' />Rather than unique Idea. </p>
                            </div>
                        </div>
                    </div>
                    <div className="features-content" style={{ display: activeButton === 'content3' ? 'block' : 'none' }}>
                        <div className="features-content-main">
                            <div className="features-image">
                                <img src={images.Features.FeatureImageThree} alt="" />
                            </div>
                            <div className="features-image-points">
                                <p><TbPoint className='features-title-points-icons' />Rather than unique Idea. </p>
                                <p><TbPoint className='features-title-points-icons' />Entums estibulum dignissim posuere </p>
                                <p><TbPoint className='features-title-points-icons' />Quality users after Breed Applications. </p>
                                <p><TbPoint className='features-title-points-icons' />Market Positioning Expertise. </p>
                                <p><TbPoint className='features-title-points-icons' />Rather than unique Idea. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;
