import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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


const PagesPage = () => {
    const navigate = useNavigate();
    const location = useLocation(); 
    const projectName = 'Landing page'; 

    const handleCreatePage = () => {
        alert("Navigating to new document editor.");
        // navigate('/pages/create'); // Example navigation path
    };

    return (
        <div className="pb-8">
            {/* 1. PROJECT HEADER AND SUB-NAVBAR (STAYS STICKY) */}
            <SubNavTabs currentPath={location.pathname} projectName={projectName} />
            
            {/* 2. MAIN PAGES CONTENT AREA */}
            <div className="p-6 bg-white rounded-xl shadow-md min-h-[600px] flex flex-col">
                
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h1 className="text-xl font-bold text-gray-900">Project Pages</h1>
                    <Button 
                        onClick={handleCreatePage}
                        className="bg-purple-600 hover:bg-purple-700 w-auto px-4 text-sm"
                    >
                        New Page
                    </Button>
                </div>

                {/* Pages List/Empty State Placeholder */}
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-gray-50 border border-gray-200 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-gray-400 mb-4">
                        <path fillRule="evenodd" d="M11.54 22.351A2.25 2.25 0 0013.5 21h1.5a2.25 2.25 0 002.247-2.351l-.514-3.085a6.002 6.002 0 00-6.732-4.108 6.002 6.002 0 00-6.732 4.108l-.514 3.085A2.25 2.25 0 009 21h1.5a2.25 2.25 0 002.04-1.149zM12 7a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V7z" clipRule="evenodd" />
                        <path d="M5.488 9.75a.75.75 0 01.737-.75h.075a.75.75 0 01.737.75v3.15a.75.75 0 01-1.5 0v-3.15zm2.816-1.5a.75.75 0 01.736-.75h.076a.75.75 0 01.737.75v5.15a.75.75 0 01-1.5 0v-5.15zm2.816-1.5a.75.75 0 01.736-.75h.076a.75.75 0 01.737.75v6.15a.75.75 0 01-1.5 0v-6.15zM12 2a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V2z" />
                    </svg>
                    <p className="text-lg font-medium text-gray-600">No pages found.</p>
                    <p className="text-sm text-gray-500 mt-2">Start documenting your project by creating your first page.</p>
                </div>
            </div>
        </div>
    );
};

export default PagesPage;