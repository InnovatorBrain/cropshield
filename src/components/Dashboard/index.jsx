import React from 'react';
import "./index.css"
import { Routes, Route } from 'react-router-dom';

// Dashboard Components
import DashSidebar from './DashSidebar/DashSidebar';
import DashHeader from './DashHeader/DashHeader';
import DashInsurance from './DashInsurance/DashInsurance';

function DashboardLayout() {
    return (
        <div className="dashboard-container">
            <div className='DashSideBar-content'>
                <DashSidebar />
            </div>
            <div className="dash-main-content">
                <DashHeader />
                <Routes>
                    <Route path="/dashboard/insurance" element={<DashInsurance />} />
                </Routes>
            </div>
        </div>
    );
}

export default DashboardLayout;
