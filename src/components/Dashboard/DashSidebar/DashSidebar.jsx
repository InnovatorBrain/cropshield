import React from 'react'
import './DashSidebar.css'
import images from '../../../constants/images'


function DashSidebar() {
  return (
    <>
      <div className="DashSidebar-container">
        <div className="DashSidebar-LogoSection">
          <img src={images.NavbarLogo} alt="CropShield" className='DashSidebar-Logo' />
          <h1 className='DashSidebar-LogoText'>CropShield.</h1>
        </div>

        <div className="DashSidebar-ListDropdowns-section">
          {/* Use Link to here */}
        </div>
      </div>

    </>

  )
}

export default DashSidebar