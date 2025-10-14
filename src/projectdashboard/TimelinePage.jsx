import React from 'react';
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


const TimelinePage = () => {
    const location = useLocation(); 
    const projectName = 'Landing page'; 
    
    return (
        <div className="pb-8">
            {/* 1. PROJECT HEADER AND SUB-NAVBAR (STAYS STICKY) */}
            <SubNavTabs currentPath={location.pathname} projectName={projectName} />
            
            {/* 2. MAIN TIMELINE CONTENT AREA */}
            <div className="p-6 bg-white rounded-xl shadow-md">
                
                {/* Timeline Toolbar (Filters, Zoom, Today Button) */}
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h1 className="text-xl font-bold text-gray-900">Project Timeline</h1>
                    
                    <div className="flex space-x-3 items-center">
                        <Button 
                            onClick={() => console.log('Zoom out clicked')}
                            className="!bg-gray-100 !text-gray-700 !py-1 !px-3 !text-sm hover:!bg-gray-200"
                        >
                            Zoom Out
                        </Button>
                        <Button 
                            onClick={() => console.log('Focus Today clicked')}
                            className="!bg-blue-600 !text-white !py-1 !px-3 !text-sm hover:!bg-blue-700"
                        >
                            Today
                        </Button>
                        <select 
                            className="p-1 border border-gray-300 rounded-md text-sm cursor-pointer bg-white"
                        >
                            <option>Weeks</option>
                            <option>Months</option>
                            <option>Quarters</option>
                        </select>
                    </div>
                </div>

                {/* Timeline Visualization Placeholder */}
                <div className="min-h-[600px] bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-600 text-lg">
                        Gantt Chart / Timeline View Placeholder (Needs library integration)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;
