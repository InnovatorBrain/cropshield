import React from 'react'
import images from '../../constants/images'
import './HeaderBlock.css'

const HeaderBlock = () => {
    return (
        <>
            <div className="HeaderBlock-main-container">
                <img src={images.AboutUs.AboutUsImageOne} className='HeaderBlock-background-image' alt="" />
                <div className="Carousel_Left_side">
                    <h1 className="Carousel_tite_one">Digital Crop Revolution, </h1>
                    <p className="Carousel_title_text">Through cutting-edge technology and tailored digital platforms, we are changing the world of agriculture one farm at a time. By providing farmers with personalized tools and insights, we aim to mitigate risks, increase resilience, and ultimately enhance the livelihoods of agricultural communities.</p>
                </div >
            </div>
        </>
    )
}

export default HeaderBlock
