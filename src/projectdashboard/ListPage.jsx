import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

// Mock Data for the List View
const MOCK_ISSUES = [
    { key: 'LP-2', title: 'Target audience research', type: 'Task', status: 'TESTING', category: 'Testing', assignee: 'Sam Lee', dueDate: '25 OCT, 2025' },
    { key: 'LP-3', title: 'Competitor analysis', type: 'Task', status: 'TESTING', category: 'Testing', assignee: 'Sam Lee', dueDate: '' },
    { key: 'LP-4', title: 'Content strategy', type: 'Task', status: 'DESIGN', category: 'Content', assignee: 'Sam Lee', dueDate: '' },
    { key: 'LP-1', title: 'Creating wireframe', type: 'Story', status: 'DESIGN', category: 'Design', assignee: 'Sam Lee', dueDate: '25 OCT, 2025' },
    { key: 'LP-5', title: 'UI design', type: 'Bug', status: 'TO DO', category: 'Design', assignee: 'Sam Lee', dueDate: '25 OCT, 2025' },
    { key: 'LP-6', title: 'Design the hero section', type: 'Task', status: 'TO DO', category: 'Design', assignee: 'Sam Lee', dueDate: '' },
    { key: 'LP-10', title: 'Incorporate visual elements', type: 'Task', status: 'TO DO', category: 'Design', assignee: 'Sam Lee', dueDate: '' },
    { key: 'LP-7', title: 'Responsive Design', type: 'Task', status: 'TO DO', category: 'Testing', assignee: 'Sam Lee', dueDate: '' },
    { key: 'LP-8', title: 'Usability Testing', type: 'Task', status: 'TO DO', category: 'Testing', assignee: 'Sam Lee', dueDate: '' },
    { key: 'LP-9', title: 'Copywriting and SEO optimization', type: 'Task', status: 'TO DO', category: 'Content', assignee: 'Sam Lee', dueDate: '' },
];

// --- Helper Components ---

// Sub-Navigation Tabs (Reused from Dashboard)
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

// Component to render a single row in the list view
const ListRow = ({ issue, isHeader = false }) => {
    const statusColor = {
        'TESTING': 'bg-red-200 text-red-800',
        'DESIGN': 'bg-blue-200 text-blue-800',
        'TO DO': 'bg-gray-200 text-gray-800',
    }[issue.status] || 'bg-gray-100 text-gray-700';

    const cellClass = isHeader ? 'font-semibold text-gray-600 text-sm' : 'text-sm text-gray-900';
    const cellPadding = isHeader ? 'py-2' : 'py-3';

    // Checkbox SVG (Only shown on non-header rows)
    const Checkbox = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400 cursor-pointer hover:text-blue-500">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1.25 12.375a.75.75 0 01-1.06-1.06l3.5-3.5a.75.75 0 011.06 0l3.5 3.5a.75.75 0 01-1.06 1.06L10 11.06l-3.21 3.315z" />
        </svg>
    );

    // Issue Type Icon (Simple Checkmark Blue)
    const TypeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2563eb" className="w-4 h-4">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
        </svg>
    );

    return (
        <div className={`grid grid-cols-[30px_50px_30px_1fr_100px_100px_100px] gap-2 items-center px-4 ${cellPadding} ${!isHeader ? 'border-t border-gray-100 hover:bg-gray-50' : 'border-b-2 border-gray-200 bg-gray-50'}`}>
            <div className="flex justify-center">
                {!isHeader && <Checkbox />}
            </div>
            
            <div className={cellClass}>
                {isHeader ? 'Type' : <TypeIcon />}
            </div>
            
            <div className={cellClass}>
                {isHeader ? 'Key' : issue.key}
            </div>

            <div className={cellClass}>
                {isHeader ? 'Summary' : issue.title}
            </div>

            <div className={isHeader ? cellClass : 'flex items-center justify-center'}>
                {isHeader ? 'Status' : (
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusColor}`}>
                        {issue.status}
                    </span>
                )}
            </div>

            <div className={cellClass}>
                {isHeader ? 'Assignee' : (
                    <div className="flex items-center space-x-1">
                        <div className="w-5 h-5 rounded-full bg-cyan-200 text-xs flex items-center justify-center font-semibold">SL</div>
                        <span>{issue.assignee}</span>
                    </div>
                )}
            </div>

            <div className={cellClass}>
                {isHeader ? 'Due Date' : issue.dueDate}
            </div>
        </div>
    );
};


const ListPage = () => {
    const navigate = useNavigate(); // Now imported
    const location = useLocation(); // Now imported
    const projectName = 'Landing page'; 

    const handleActionClick = (action) => {
        console.log(`${action} action clicked.`);
    };

    return (
        <>
            {/* 1. PROJECT HEADER AND SUB-NAVBAR (STAYS STICKY) */}
            <SubNavTabs currentPath={location.pathname} projectName={projectName} />
            
            {/* 2. MAIN LIST CONTENT AREA */}
            <div className="pb-8 p-4 bg-white rounded-xl shadow-md">

                {/* Search/Filter/Group Actions */}
                <div className="relative z-10 flex items-center justify-between mb-4 flex-shrink-0">
                    <div className="flex items-center space-x-2">
                        {/* Search Input */}
                        <div className="relative w-64 flex-shrink-0">
                            <input type="text" placeholder="Search board" className="w-full p-2 pl-10 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"/>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-500 absolute left-3 top-2.5">
                                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.448 4.637l-1.353 1.354a.75.75 0 01-1.06 0l-1.354-1.353A7 7 0 012 9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        {/* User Avatar Placeholder */}
                        <div className="flex -space-x-1">
                            <div className="w-6 h-6 rounded-full bg-cyan-200 text-xs flex items-center justify-center font-semibold border-2 border-gray-100">CS</div>
                            <div className="w-6 h-6 rounded-full bg-purple-200 text-xs flex items-center justify-center font-semibold border-2 border-gray-100">SL</div>
                        </div>
                    </div>
                    
                    {/* Share/Filter/Group Actions */}
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <a href="#" onClick={() => handleActionClick('Share')} className="flex items-center space-x-1 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path d="M12.5 12.75a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75h-2.5a.75.75 0 01-.75-.75v-2.5z" /><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8.25-4.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v3.25h3.25a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-3.25v3.25a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-3.25h-3.25a.75.75 0 01-.75-.75v-.008a.75.75 0 01.75-.75h3.25V6.5z" clipRule="evenodd" /></svg><span>Share</span>
                        </a>
                        <a href="#" onClick={() => handleActionClick('Filter')} className="flex items-center space-x-1 hover:text-gray-900"><span>Filter</span></a>
                        <a href="#" onClick={() => handleActionClick('Group')} className="flex items-center space-x-1 hover:text-gray-900"><span>Group by: Status</span></a>
                        <a href="#" onClick={() => handleActionClick('More')} className="flex items-center space-x-1 hover:text-gray-900"><span>More</span></a>
                    </div>
                </div>

                {/* List Table Container */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                    {/* Table Header Row */}
                    <ListRow issue={{}} isHeader={true} />

                    {/* Issue Data Rows */}
                    {MOCK_ISSUES.map((issue) => (
                        <ListRow key={issue.key} issue={issue} isHeader={false} />
                    ))}

                    {/* Create Link at the bottom */}
                    <div className="p-3 border-t border-gray-200 bg-gray-50 hover:bg-gray-100 cursor-pointer">
                        <span className="text-sm text-blue-600 font-medium">+ Create</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListPage;
