import React from 'react';
import './dashboard.css';
import DashboardContent from './dashboardContent';
import Menus from './menus';
import Sidebar from './sidebar';


function Dashboard() {
    return (
        <div className="dashboard">
            <Menus />

            {/* Main */}
            <div className="dashboard__main">
                <DashboardContent />
                <Sidebar />
            </div>

        </div>
    )
}

export default Dashboard
