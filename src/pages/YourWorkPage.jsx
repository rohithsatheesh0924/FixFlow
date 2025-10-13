import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

// Component for a single issue card in the recent activity list
const RecentIssueCard = ({ item }) => {
    // Determine the type of item to display (Project or Issue)
    const isProject = item.type === 'project';
    const issueTypeIconColor = '#a78bfa'; 
    const userAvatarColor = item.assigneeInitials === 'SL' ? 'bg-yellow-200' : 'bg-green-200';

    const Icon = () => {
        if (isProject) {
            // Project Icon (Colored Icon)
            const iconBg = { 'Assets': '#8b5cf6', 'Market sample': '#facc15', 'New Landing page': '#3b82f6' }[item.title] || '#a78bfa';
            return (
                <div className={`w-5 h-5 flex-shrink-0 rounded-sm flex items-center justify-center`} style={{ backgroundColor: item.iconColor }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white">
                        <path fillRule="evenodd" d="M1 4a1 1 0 011-1h16a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V4zM2 5v10h16V5H2zm7 3a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V9a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                </div>
            );
        } else {
            // Issue Icon (Purple Document - Checkmark)
            return (
                <div className="w-5 h-5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={issueTypeIconColor} className="w-5 h-5">
                        <path fillRule="evenodd" d="M15.908 1.572a.75.75 0 01.442.923l-3.5 14.5a.75.75 0 01-1.246.064L8 10.45l-5.696 5.37a.75.75 0 01-1.246-.064l-3.5-14.5a.75.75 0 01.442-.923L16 1.572a.75.75 0 01-.092 0z" clipRule="evenodd" />
                    </svg>
                </div>
            );
        }
    };

    return (
        <div className="flex items-center justify-between p-3 hover:bg-gray-50 transition duration-100 rounded-lg cursor-pointer">
            <div className="flex items-start space-x-3">
                <Icon />
                <div>
                    <p className="text-sm font-medium text-gray-900">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.projectKey} · {item.marketSample}</p>
                </div>
            </div>
            {item.type === 'issue' && (
                <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <span>{item.status}</span>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center font-semibold ${userAvatarColor}`}>
                        {item.assigneeInitials}
                    </div>
                </div>
            )}
        </div>
    );
};

// Mock component for the Recent Project Card
const RecentProjectCard = ({ projectName, openIssues, doneIssues, cardColor }) => (
    <div className="w-64 flex-shrink-0 p-4 border border-gray-200 rounded-lg shadow-sm bg-white flex flex-col space-y-3">
        <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 ${cardColor} rounded-md flex items-center justify-center text-sm text-purple-800 font-bold`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.329 15.696A6.974 6.974 0 0110 13a6.974 6.974 0 015.671 2.696c-1.34-1.258-3.08-2.096-4.996-2.096s-3.656.838-4.996 2.096z" clipRule="evenodd" />
                </svg>
            </div>
            <div>
                <p className="text-sm font-semibold text-gray-900">{projectName}</p>
                <p className="text-xs text-gray-500">Team-managed business</p>
            </div>
        </div>
        
        <div className="space-y-1 text-sm">
            <p className="text-xs font-semibold text-gray-500 uppercase">Quick Links</p>
            <div className="flex justify-between">
                <span className="text-gray-700">My open issues</span>
                <span className="text-gray-500">{openIssues}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-gray-700">Done issues</span>
                <span className="text-gray-500">{doneIssues}</span>
            </div>
        </div>

        <div className="text-sm font-medium pt-2">
            <Link to="/dashboard" className="flex items-center justify-between text-blue-600 hover:underline">
                1 board
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M8.25 5.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0V6.31L8.03 9.28a.75.75 0 01-1.06-1.06l2.97-2.97H8.25a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M16.5 10a.75.75 0 000 1.5H18a.75.75 0 000-1.5h-1.5zM3.55 4.303a.75.75 0 00-1.2.75l.443.714a6.5 6.5 0 00-1.236 3.82.75.75 0 001.5-.037 5 5 0 01.942-3.084l.515.226zM15 15.75a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-2.25h-2.25a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
            </Link>
        </div>
    </div>
);

// Empty State Illustration
const EmptyStateIllustration = () => (
    <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" className="w-32 h-24 mb-4">
        <rect x="50" y="50" width="80" height="40" rx="5" fill="#fdbd03" />
        <rect x="130" y="50" width="30" height="40" rx="5" fill="#de350b" />
        <circle cx="65" cy="95" r="10" fill="#2d3032" stroke="#fff" strokeWidth="2" />
        <circle cx="145" cy="95" r="10" fill="#2d3032" stroke="#fff" strokeWidth="2" />
        <rect x="55" y="30" width="20" height="20" fill="#fdbd03" stroke="#fff" strokeWidth="2" />
        <rect x="75" y="30" width="20" height="20" fill="#de350b" stroke="#fff" strokeWidth="2" />
        <rect x="95" y="30" width="20" height="20" fill="#fdbd03" stroke="#fff" strokeWidth="2" />
    </svg>
);


// --- Mock Data ---
const RECENT_ISSUES = [
    { type: 'issue', title: 'Create one-pager', projectKey: 'GTMS1-20', marketSample: 'Market sample', assigneeInitials: 'SL', status: 'Created' },
    { type: 'issue', title: 'Create FAQs', projectKey: 'GTMS1-22', marketSample: 'Market sample', assigneeInitials: 'SL', status: 'Created' },
    { type: 'issue', title: 'Create slide deck', projectKey: 'GTMS1-21', marketSample: 'Market sample', assigneeInitials: 'SL', status: 'Created' },
    { type: 'issue', title: 'Request illustration', projectKey: 'GTMS1-18', marketSample: 'Market sample', assigneeInitials: 'SL', status: 'Created' },
    { type: 'issue', title: 'Draft blog content', projectKey: 'GTMS1-19', marketSample: 'Market sample', assigneeInitials: 'SL', status: 'Created' },
    { type: 'issue', title: 'Draft email content', projectKey: 'GTMS1-17', marketSample: 'Market sample', assigneeInitials: 'SL', status: 'Created' },
    { type: 'issue', title: 'Request creative assets', projectKey: 'GTMS1-16', marketSample: 'Market sample', assigneeInitials: 'SL', status: 'Created' },
    { type: 'issue', title: 'Launch ad campaign', projectKey: 'GTMS1-11', marketSample: 'Market sample', assigneeInitials: 'SL', status: 'Created' },
    { type: 'issue', title: 'Blitz with dev team', projectKey: 'GTMS1-15', marketSample: 'Market sample', assigneeInitials: 'SL', status: 'Created' },
];

const RECENT_PROJECTS_DATA = [
    { projectName: 'Landing page', openIssues: 0, doneIssues: 0, cardColor: 'bg-purple-600' },
    { projectName: 'Market sample', openIssues: 2, doneIssues: 6, cardColor: 'bg-yellow-500' },
    { projectName: 'New Landing page', openIssues: 6, doneIssues: 1, cardColor: 'bg-blue-600' },
];

const VIEWED_ACTIVITIES = {
    'Today': [
        // Projects
        { type: 'project', title: 'Assets', projectKey: 'Team-managed business', iconColor: '#8b5cf6', marketSample: null, assigneeInitials: null },
        { type: 'project', title: 'Market sample', projectKey: 'Team-managed business', iconColor: '#facc15', marketSample: null, assigneeInitials: null },
        { type: 'project', title: 'New Landing page', projectKey: 'Team-managed business', iconColor: '#3b82f6', marketSample: null, assigneeInitials: null },
        // Issues
        { type: 'issue', status: 'Created', title: 'UI design', projectKey: 'LP-5', marketSample: 'New Landing page', assigneeInitials: 'SL', iconColor: 'bg-purple-300' },
        { type: 'issue', status: 'Created', title: 'Version 1.0', projectKey: 'LP-13', marketSample: 'New Landing page', assigneeInitials: 'SL', iconColor: 'bg-purple-300' },
    ],
    'Yesterday': [
        { type: 'issue', status: 'Created', title: 'Competitor analysis', projectKey: 'LP-3', marketSample: 'New Landing page', assigneeInitials: 'SL', iconColor: 'bg-purple-300' },
        { type: 'issue', status: 'Created', title: 'Creating wireframe', projectKey: 'LP-1', marketSample: 'New Landing page', assigneeInitials: 'SL', iconColor: 'bg-purple-300' },
        { type: 'issue', status: 'Created', title: 'Content strategy', projectKey: 'LP-4', marketSample: 'New Landing page', assigneeInitials: 'SL', iconColor: 'bg-purple-300' },
        { type: 'issue', status: 'Created', title: 'Target audience research', projectKey: 'LP-2', marketSample: 'New Landing page', assigneeInitials: 'SL', iconColor: 'bg-purple-300' },
    ],
};
// --- End Mock Data ---


const YourWorkPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Viewed'); // Starting on 'Viewed' to show the new design initially
    const [viewingAll, setViewingAll] = useState(true); // Always true when the tab content is populated

    const tabs = ['Worked on', 'Viewed', 'Assigned to me', 'Starred'];

    const handleViewAllProjects = () => {
        // Since viewingAll controls showing the issue list, we toggle it back to the empty state if they are currently viewing the list
        setViewingAll(prev => !prev);
    };

    const getContentData = () => {
        // FIX: Ensure 'Worked on' also returns a grouped object structure.
        if (activeTab === 'Worked on') {
            return { 'TODAY': RECENT_ISSUES.map(issue => ({ ...issue, type: 'issue' })) };
        }
        
        switch (activeTab) {
            case 'Viewed':
                return VIEWED_ACTIVITIES;
            case 'Assigned to me':
                return { 'TODAY': [{ type: 'issue', status: 'Pending', title: 'Review mockups', projectKey: 'LP-30', marketSample: 'UI/UX', assigneeInitials: 'SL', iconColor: 'bg-red-300' }] };
            case 'Starred':
                return { 'TODAY': [] }; 
            default:
                return {};
        }
    };

    const contentData = getContentData();
    
    // Check if the current tab should show the empty illustration
    // This happens only if the tab is 'Worked on' AND the user hasn't clicked 'View all projects' yet.
    const showEmptyIllustration = !viewingAll && activeTab === 'Worked on';
    
    // The main rendering logic now maps over the groups (e.g., 'Today', 'Yesterday')
    // and then maps over the activities array within those groups.

    return (
        <div className="pb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
                Your work
            </h1>

            {/* Recent Projects Summary Section (Always visible) */}
            <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">Recent projects</h2>
                    <button onClick={handleViewAllProjects} className="text-purple-600 hover:underline text-sm font-medium">
                        View all projects
                    </button>
                </div>
                <div className="flex space-x-6 overflow-x-auto pb-4">
                    {RECENT_PROJECTS_DATA.map((project, index) => (
                        <RecentProjectCard 
                            key={index}
                            projectName={project.projectName}
                            openIssues={project.openIssues}
                            doneIssues={project.doneIssues}
                            cardColor={project.cardColor}
                        />
                    ))}
                </div>
            </div>

            {/* Main Tabs */}
            <div className="border-b border-gray-200 mb-4">
                <nav className="flex space-x-6">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => { setActiveTab(tab); setViewingAll(tab === 'Worked on' ? viewingAll : true); }}
                            className={`
                                py-2 text-sm font-medium transition duration-150
                                ${activeTab === tab 
                                    ? 'text-purple-600 border-b-2 border-purple-600' 
                                    : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'
                                }
                            `}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>
            
            {/* Dynamic Tab Content */}
            <div className="p-4 bg-white rounded-xl min-h-[400px]">
                {showEmptyIllustration ? (
                    // 2. Empty State (Visible INITIALLY for 'Worked on' tab)
                    <div className="flex flex-col items-center justify-center h-full text-center p-12">
                        <EmptyStateIllustration />
                        <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
                            You haven't worked on anything yet
                        </h3>
                        <p className="text-sm text-gray-600 mb-6 max-w-xs text-center">
                            In this page, you'll find your worked on issues. Get started by finding the project your team is working on.
                        </p>
                        <Button 
                            onClick={handleViewAllProjects} 
                            className="bg-purple-600 hover:bg-purple-700 focus:ring-purple-300 w-auto px-6"
                        >
                            View all projects
                        </Button>
                    </div>
                ) : (
                    // 1. Issues/Activity List (Groups issues and projects by day)
                    <div className="space-y-4">
                        {Object.entries(contentData).map(([day, activities]) => (
                            <div key={day} className="space-y-1">
                                <h3 className="text-xs font-semibold text-gray-500 uppercase mt-4 mb-1">{day}</h3>
                                {/* FIX: Ensure activities is an array before mapping */}
                                {Array.isArray(activities) && activities.map((item, index) => (
                                    <RecentIssueCard key={index} item={item} />
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default YourWorkPage;
