import React from 'react'
import "./OfferLogo.css"
import images from '../../constants/images'

function OfferLogo() {
    return (
        <>
            <div className="sport-container">
                <div className="Sport-image-cont">
                    <img src={images.Offer.OfferLogoTwo} alt="SportVisiual" className='SportLogo' />
                    <p className='Sport-text'>Garden Tillage</p>
                </div>
                <div className="Sport-image-cont">
                    <img src={images.Offer.OfferLogoThree} alt="SportVisiual" className='SportLogo' />
                    <p className='Sport-text'>Fresh Fruits</p>
                </div>
                <div className="Sport-image-cont">
                    <img src={images.Offer.OfferLogoFour} alt="SportVisiual" className='SportLogo' />
                    <p className='Sport-text'>Vegatables</p>
                </div>
                <div className="Sport-image-cont">
                    <img src={images.Offer.OfferLogoFive} alt="SportVisiual" className='SportLogo' />
                    <p className='Sport-text'>Awesome Wheats</p>
                </div>
                <div className="Sport-image-cont">
                    <img src={images.Offer.OfferLogoSix} alt="SportVisiual" className='SportLogo' />
                    <p className='Sport-text'>Agro Machinery</p>
                </div>
            </div>
        </>
    )
}

export default OfferLogo