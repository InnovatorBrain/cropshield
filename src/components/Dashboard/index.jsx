import React, { useState } from 'react';
import "./index.css"
// icons
import { RxHamburgerMenu } from "react-icons/rx";
// ____________DASHBOARD COMPONENTS___________
import DashSidebar from './DashSidebar/DashSidebar';
import DashHeader from './DashHeader/DashHeader';

// Dashboard Home Page
import DashboardHomeHeader from './DashboardHomeHeader/DashboardHomeHeader';
import DashHomeBlock from './DashHomeBlock/DashHomeBlock';
import ProfileBlock from './ProfileBlock/ProfileBlock';

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
            <div className={`dash-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`} >
                <DashHeader />
                <div id="dash-main-content-id">
                    <DashboardHomeHeader />
                    < DashHomeBlock />
                    <ProfileBlock />
                </div>
            </div>
        </div>
    );
}
function DashboardLayoutInsurance() {
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
                <DashInsurance />
            </div>
        </div>
    );
}

export { DashboardLayout, DashboardLayoutInsurance };
