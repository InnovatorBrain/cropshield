import React from 'react'
import './DashHomeBlock.css'
import images from '../../../constants/images'

function DashHomeBlock() {
    return (
        <>
            <div className="DashHomeBlock-container">
                <div className="DashHomeBlock-up-div">
                    Be Active for Crops Health
                </div>
                <div className="DashHomeBlock-down-div">
                    <div className="DashHomeBlock-down-div-1">
                        <div className="DashHomeBlock-down-images-div">
                            <img src={images.DashHomeBlock.DashHomeBlockImage1} className="DashHomeBlock-down-images" alt="" />
                        </div>
                        <p className='DashHomeBlock-down-percentage'>70%</p>
                        <p className='DashHomeBlock-down-simple-text'> Humidity percentage</p>
                    </div>
                    <div className="DashHomeBlock-down-div-1">
                        <div className="DashHomeBlock-down-images-div">
                            <img src={images.DashHomeBlock.DashHomeBlockImage2} className="DashHomeBlock-down-images" alt="" />
                        </div>
                        <p className='DashHomeBlock-down-percentage'>4.1</p>
                        <p className='DashHomeBlock-down-simple-text'> Daily Water PH</p>
                    </div>
                    <div className="DashHomeBlock-down-div-1">
                        <div className="DashHomeBlock-down-images-div">
                            <img src={images.DashHomeBlock.DashHomeBlockImage3} className="DashHomeBlock-down-images" alt="" />
                        </div>
                        <p className='DashHomeBlock-down-percentage'>17 - 24C</p>
                        <p className='DashHomeBlock-down-simple-text'> Today Temprature</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DashHomeBlock