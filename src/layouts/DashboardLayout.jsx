import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';

const DashboardLayout = () => {
    // These values would typically come from an Auth Context in a real app
    const projectName = 'Landing page'; 
    const userInitials = 'SL';

    return (
        <div className="min-h-screen bg-gray-50 flex">
            
            {/* Sidebar (Fixed width, full height) */}
            <Sidebar projectName={projectName} />

            <div className="flex flex-col flex-1 h-screen overflow-hidden">
                
                {/* Header (Stays fixed at the top) */}
                <Header userInitials={userInitials} />

                {/* Main Content Area (Scrollable within this container) */}
                <main className="flex-1 p-6 overflow-y-auto">
                    {/* The <Outlet> renders the current nested route component (e.g., ProjectDashboard) */}
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
