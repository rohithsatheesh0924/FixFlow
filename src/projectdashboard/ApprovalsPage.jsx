import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';

// --- Sub-Navigation Tabs Component (Integrated for consistency) ---
const SubNavTabs = ({ currentPath, projectName }) => {
    const tabs = [
        { name: 'Summary', path: '/dashboard/summary' },
        { name: 'Board', path: '/dashboard' },
        { name: 'List', path: '/dashboard/list' },
        { name: 'Calendar', path: '/dashboard/calendar' },
        { name: 'Timeline', path: '/dashboard/timeline' },
        { name: 'Approvals', path: '/dashboard/approvals' },
        { name: 'Forms', path: '/forms' },
        { name: 'Pages', path: '/dashboard/pages' },
        { name: 'Attachments', path: '/attachments' },
        { name: 'Issues', path: '/dashboard/issues' },
        { name: 'Reports', path: '/reports' },
        { name: 'Archived Iss', path: '/dashboard/archived' },
    ];

    const isActive = (tabPath) => {
        if (tabPath === '/dashboard') {
            return currentPath === tabPath;
        }
        return currentPath.startsWith(tabPath);
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-md mb-6 sticky top-0 z-10">
            <div className="flex items-center justify-between mb-4">
                <h2 className="flex items-center space-x-3 text-2xl font-bold text-gray-900">
                    <div className="w-5 h-5 bg-purple-200 rounded-sm flex items-center justify-center text-sm text-purple-800 font-bold">LP</div>
                    <span>{projectName}</span>
                </h2>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Project settings</button>
            </div>
            
            <nav className="flex space-x-6 overflow-x-auto border-b border-gray-200 pb-2">
                {tabs.map(tab => (
                    <Link 
                        key={tab.name} 
                        to={tab.path} 
                        className={`
                            whitespace-nowrap text-sm font-medium pb-2 transition duration-150
                            ${isActive(tab.path)
                                ? 'text-blue-600 border-b-2 border-blue-600' 
                                : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'
                            }
                        `}
                    >
                        {tab.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

// --- Main Page Component ---
const ApprovalsPage = () => {
    const location = useLocation(); 
    const projectName = 'Landing page'; 
    const [activeFilter, setActiveFilter] = useState('Pending'); // useState is now available

    const approvalFilters = ['Pending', 'Approved', 'Rejected', 'My requests'];

    return (
        <div className="pb-8">
            {/* 1. PROJECT HEADER AND SUB-NAVBAR (STAYS STICKY) */}
            <SubNavTabs currentPath={location.pathname} projectName={projectName} />
            
            {/* 2. MAIN APPROVALS CONTENT AREA */}
            <div className="p-6 bg-white rounded-xl shadow-md">
                
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Approvals</h1>

                {/* Filter/Status Bar */}
                <div className="flex space-x-4 border-b border-gray-200 mb-6">
                    {approvalFilters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`
                                py-2 px-4 text-sm font-medium transition duration-150 rounded-t-lg
                                ${activeFilter === filter 
                                    ? 'text-blue-600 border-b-2 border-blue-600' 
                                    : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'
                                }
                            `}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Approvals List Placeholder */}
                <div className="min-h-[400px] bg-gray-50 border border-gray-200 rounded-lg flex flex-col items-center justify-center p-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-gray-400 mb-4">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.843l-3.29 4.364-1.282-1.283a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06 0l3.841-5.114z" clipRule="evenodd" />
                    </svg>
                    <p className="text-lg font-medium text-gray-600">No {activeFilter.toLowerCase()} requests found.</p>
                    <p className="text-sm text-gray-500 mt-2">All set! Your work looks approved and ready to go.</p>
                </div>
            </div>
        </div>
    );
};

export default ApprovalsPage;
