import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';

const FileCard = ({ fileName, issueKey, issueTitle, previewUrl }) => (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition duration-150">
        
        {/* File Preview Area */}
        <div className="h-32 bg-gray-100 flex items-center justify-center overflow-hidden">
            {/* Using image for preview, with a placeholder fallback */}
            <img 
                src={previewUrl} 
                alt={`Preview of ${fileName}`} 
                className="w-full h-full object-cover"
                onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://placehold.co/400x300/f3f4f6/9ca3af?text=File"; 
                    e.target.style.objectFit = "contain";
                }}
            />
        </div>

        {/* File Details */}
        <div className="p-3">
            <p className="text-sm font-medium text-gray-900 truncate mb-1">{fileName}</p>
            <div className="flex items-center space-x-1">
                {/* Issue Key and Title */}
                <span className="text-xs font-semibold text-gray-600 border border-gray-300 px-1 py-0.5 rounded-sm">
                    {issueKey}
                </span>
                <span className="text-xs text-gray-500 truncate">{issueTitle}</span>
            </div>
        </div>
    </div>
);

const FilterButton = ({ label, icon, isDropdown = false }) => (
    <button 
        className="flex items-center space-x-1 text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-md border border-gray-200 hover:bg-gray-200 transition duration-150"
    >
        {icon}
        <span>{label}</span>
        {isDropdown && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1 text-gray-500">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
        )}
    </button>
);

const MOCK_FILES = [
    { fileName: "Cover Image New 2.jpeg", issueKey: "LP-2", issueTitle: "Design the hero section", previewUrl: "https://placehold.co/400x300/a78bfa/ffffff/png" },
    { fileName: "Organizations.csv", issueKey: "LP-4", issueTitle: "Content strategy", previewUrl: "https://placehold.co/400x300/f3f4f6/374151?text=CSV" },
    { fileName: "Concept.pdf", issueKey: "LP-4", issueTitle: "Creating wireframe", previewUrl: "https://placehold.co/400x300/ef4444/ffffff?text=PDF" },
    { fileName: "Draft_Copy.docx", issueKey: "LP-7", issueTitle: "Responsive design", previewUrl: "https://placehold.co/400x300/3b82f6/ffffff?text=DOCX" },
    { fileName: "Brand_Guidelines.zip", issueKey: "LP-1", issueTitle: "Competitor analysis", previewUrl: "https://placehold.co/400x300/9ca3af/ffffff?text=ZIP" },
    { fileName: "Meeting_Notes.txt", issueKey: "LP-8", issueTitle: "Usability testing", previewUrl: "https://placehold.co/400x300/10b981/ffffff?text=TXT" },
];


// --- Sub-Navigation Bar Component (Copied from FormsPage structure) ---
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


const AttachmentsPage = () => {
    const navigate = useNavigate();
    const location = useLocation(); 
    const projectName = 'Landing page'; 

    const handleShare = () => {
        alert("Share functionality triggered.");
    };

    return (
        <>
            {/* 1. PROJECT HEADER AND SUB-NAVBAR (Ensures sticky behavior) */}
            <SubNavTabs currentPath={location.pathname} projectName={projectName} />
            
            {/* 2. MAIN ATTACHMENTS CONTENT AREA */}
            <div className="pb-8 p-6 bg-white rounded-xl shadow-md">

                {/* Top Row: Search and Share */}
                <div className="flex justify-between items-center mb-6">
                    <div className="relative w-full max-w-sm mr-4">
                        <input type="text" placeholder="Search board" className="w-full p-2 pl-10 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"/>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-500 absolute left-3 top-2.5">
                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.448 4.637l-1.353 1.354a.75.75 0 01-1.06 0l-1.354-1.353A7 7 0 012 9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <button onClick={handleShare} className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path d="M12.5 12.75a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75h-2.5a.75.75 0 01-.75-.75v-2.5z" /><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8.25-4.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v3.25h3.25a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-3.25v3.25a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-3.25h-3.25a.75.75 0 01-.75-.75v-.008a.75.75 0 01.75-.75h3.25V6.5z" clipRule="evenodd" /></svg>
                        <span>Share</span>
                    </button>
                </div>

                {/* Filter Bar */}
                <div className="flex space-x-3 mb-8">
                    <FilterButton label="Added by" isDropdown />
                    <FilterButton label="Attachment type" isDropdown />
                    <FilterButton label="Date added" isDropdown />
                </div>

                {/* Attachments Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {MOCK_FILES.map((file, index) => (
                        <FileCard key={index} {...file} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default AttachmentsPage;
