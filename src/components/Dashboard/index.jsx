import React, { useState } from 'react';
import "./index.css"
import { Routes, Route } from 'react-router-dom';
// icons
import { RxHamburgerMenu } from "react-icons/rx";
// Dashboard Components
import DashSidebar from './DashSidebar/DashSidebar';
import DashHeader from './DashHeader/DashHeader';
import DashInsurance from './DashInsurance/DashInsurance';

function DashboardLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="dashboard-container">
            <div className={`DashSideBar-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                <div className="dashSidebar-toggle-button" onClick={toggleSidebar}>
                    <RxHamburgerMenu />
                </div>
                {isSidebarOpen && <DashSidebar />}
            </div>
            <div className={`dash-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <DashHeader />
                <Routes>
                    <Route path="/dashboard/insurance" element={<><div className='DASHBOARD--'><DashInsurance /></div></>} />
                </Routes>
            </div>
        </div>
    );
}

export default DashboardLayout;
