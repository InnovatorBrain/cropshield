import React from 'react'
import { Link } from 'react-router-dom'
import './DashSidebar.css'
import images from '../../../constants/images'


// icons
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { RiAccountBoxLine } from "react-icons/ri";
import { LuSettings } from "react-icons/lu";


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
          <Link to="/dashboard" className='DashSidebar-ListDropdowns-Insurance'>
            <button className='DashSidebar-Lists-buttons'>
              <span className='DashSidebar-Lists-buttons-span'><LuLayoutDashboard className='Dashsidebar-list-icons' />Dashboard</span>
            </button>
          </Link>
          <Link to="" className='DashSidebar-ListDropdowns-Insurance'>
            <div className="dropdown">
              <button className='DashSidebar-Lists-buttons'>
                <span className='DashSidebar-Lists-buttons-span'><HiOutlineMenuAlt2 className='Dashsidebar-list-icons' />My Policies</span>
              </button>
              <div className="dropdown-content-of-dashsidebar-lists">
                {/* Dropdown content goes here */}
                <Link to="/dashboard/apply-policy" className='dropdown-item'>Apply Policy</Link>
                <Link to="/dashboard/applied-policy" className='dropdown-item'>Applied</Link>
                <Link to="/dashboard/Manage-Policy" className='dropdown-item'>Manage Policies</Link>
                <Link to="/dashboard/All" className='dropdown-item'>Renew</Link>
                <Link to="/dashboard/Progress" className='dropdown-item'>Progress</Link>
                {/* Add more dropdown items as needed */}
              </div>
            </div>
          </Link>
          <Link to="/dashboard/reporting" className='DashSidebar-ListDropdowns-Insurance'>
            <button className='DashSidebar-Lists-buttons'>
              <span className='DashSidebar-Lists-buttons-span'><HiAdjustmentsHorizontal className='Dashsidebar-list-icons' />Reporting</span>
            </button>
          </Link>
          <Link to="/dashboard/Profile" className='DashSidebar-ListDropdowns-Insurance'>
            <button className='DashSidebar-Lists-buttons'>
              <span className='DashSidebar-Lists-buttons-span'><RiAccountBoxLine className='Dashsidebar-list-icons' />Profile</span>
            </button>
          </Link>
          <Link to="/dashboard/settings" className='DashSidebar-ListDropdowns-Insurance' >
            <button className='DashSidebar-Lists-buttons'>
              <span className='DashSidebar-Lists-buttons-span'><LuSettings className='Dashsidebar-list-icons' />Settings</span>
            </button>
          </Link>

        </div>
        <button className='DashSidebar-Lists-Logout'>
          <span className='DashSidebar-Lists-span-logout'>LogOut</span>
        </button>
      </div>

    </>

  )
}

export default DashSidebar