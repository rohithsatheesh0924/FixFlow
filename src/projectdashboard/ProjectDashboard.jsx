import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import CreateIssueModal from '../components/CreateIssueModal';
import IssueDetailModal from '../components/IssueDetailModal';

// Mock Kanban Card component (simplified for dashboard context)
const KanbanCard = ({ issue, onCardClick }) => {
    const colorMap = {
        'red': 'bg-red-100 text-red-700',
        'orange': 'bg-orange-100 text-orange-700',
        'purple': 'bg-purple-100 text-purple-700',
        'green': 'bg-green-100 text-green-700',
        'blue': 'bg-blue-100 text-blue-700',
    };
    
    const statusColor = colorMap[issue.statusColor] || 'bg-gray-100 text-gray-700';
    const userInitials = issue.assigneeInitials || 'CS';

    return (
        <div 
            className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition duration-150 mb-3 cursor-pointer"
            onClick={() => onCardClick(issue)}
        >
            <p className="text-sm font-medium text-gray-900 mb-1">{issue.title}</p>
            <div className="flex items-center justify-between mt-2">
                <span className="text-xs font-semibold text-gray-500">{issue.key}</span>
                <div className="flex items-center space-x-2">
                    {issue.date && <span className="text-xs text-gray-500">{issue.date}</span>}
                    <div className={`w-5 h-5 rounded-full ${statusColor} flex items-center justify-center text-xs font-semibold`}>
                        {userInitials}
                    </div>
                </div>
            </div>
        </div>
    );
};


const KanbanColumn = ({ column, handleKanbanColumnCreate, onCardClick }) => (
    <div className="w-64 flex-shrink-0 flex flex-col h-full">
        <div className="flex items-center justify-between mb-3 px-3 flex-shrink-0">
            <h4 className={`text-sm font-semibold text-gray-700 uppercase tracking-wider`}>
                {column.title} <span className="text-gray-400">{column.count}</span>
            </h4>
            <span className="text-gray-400 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M10 3a.75.75 0 01.75.75V8.5h4.75a.75.75 0 010 1.5H10.75v4.75a.75.75 0 01-1.5 0v-4.75H4.5a.75.75 0 010-1.5h4.75V3.75A.75.75 0 0110 3z" /></svg>
            </span>
        </div>
        
        <div className="px-1 overflow-y-auto flex-1">
            {column.issues.map((issue) => (
                <KanbanCard key={issue.key} issue={issue} onCardClick={onCardClick} />
            ))}
            
            <div 
                className="text-sm text-blue-600 font-medium cursor-pointer flex items-center space-x-1 hover:text-blue-800 px-3 mt-3 flex-shrink-0"
                onClick={handleKanbanColumnCreate}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 0110 3z" clipRule="evenodd" />
                </svg>
                <span>Create</span>
            </div>
        </div>
        
    </div>
);

const KanbanIllustration = () => (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M400 200 C 400 300, 300 400, 200 400 C 100 400, 0 300, 0 200 C 0 100, 100 0, 200 0 C 300 0, 400 100, 400 200 Z" fill="#2684ff" style={{ transform: 'scale(1.2) translate(0px, 100px)', transformOrigin: 'center' }} opacity="0.1"/>
        <path d="M400 200 C 400 300, 300 400, 200 400 C 100 400, 0 300, 0 200 C 0 100, 100 0, 200 0 C 300 0, 400 100, 400 200 Z" fill="#5050f7" style={{ transform: 'scale(0.8) translate(50px, -50px)', transformOrigin: 'center' }} opacity="0.1"/>
        <rect x="60" y="100" width="280" height="180" rx="8" ry="8" fill="#fff" stroke="#e5e7eb" strokeWidth="2" style={{ transform: 'translate(0, 50px) scale(0.75)', transformOrigin: 'center' }} />
        <rect x="70" y="110" width="260" height="15" rx="4" ry="4" fill="#f3f4f6" style={{ transform: 'translate(0, 50px) scale(0.75)', transformOrigin: 'center' }} />
        <rect x="70" y="135" width="20" height="4" rx="2" ry="2" fill="#d1d5db" style={{ transform: 'translate(0, 50px) scale(0.75)', transformOrigin: 'center' }} />
        <rect x="100" y="135" width="200" height="4" rx="2" ry="2" fill="#d1d5db" style={{ transform: 'translate(0, 50px) scale(0.75)', transformOrigin: 'center' }} />
        <rect x="70" y="145" width="20" height="4" rx="2" ry="2" fill="#3b82f6" style={{ transform: 'translate(0, 50px) scale(0.75)', transformOrigin: 'center' }} />
        <rect x="100" y="145" width="200" height="4" rx="2" ry="2" fill="#d1d5db" style={{ transform: 'translate(0, 50px) scale(0.75)', transformOrigin: 'center' }} />
        <rect x="150" y="80" width="120" height="120" fill="#f59e0b" style={{ transform: 'rotate(-10deg) translate(20px, 30px)', transformOrigin: 'center' }} opacity="0.8"/>
        <rect x="100" y="100" width="100" height="100" fill="#4ade80" style={{ transform: 'rotate(5deg) translate(-20px, 10px)', transformOrigin: 'center' }} opacity="0.8"/>
        <rect x="200" y="90" width="100" height="100" fill="#8b5cf6" style={{ transform: 'rotate(10deg) translate(0px, 40px)', transformOrigin: 'center' }} opacity="0.8"/>
        <circle cx="200" cy="190" r="15" fill="#f97316" opacity="0.8" />
    </svg>
);

const kanbanColumns = [
    { 
        title: 'TO DO', 
        count: 5, 
        issues: [
            { title: 'UI design', key: 'LP-5', statusColor: 'purple', assigneeInitials: 'CS' },
            { title: 'Prototype', key: 'LP-6', statusColor: 'purple', assigneeInitials: 'CS' },
            { title: 'Responsive design', key: 'LP-7', statusColor: 'purple', assigneeInitials: 'CS' },
            { title: 'Usability testing', key: 'LP-8', statusColor: 'purple', assigneeInitials: 'CS' },
            { title: 'Copywriting and SEO optimization', key: 'LP-9', statusColor: 'purple', assigneeIniteeInitials: 'CS' },
        ]
    },
    { 
        title: 'CONCEPTING', 
        count: 1, 
        issues: [
            { title: 'Creating wireframe', key: 'LP-1', date: '30 OCT', statusColor: 'blue', assigneeInitials: 'CS' },
        ]
    },
    { 
        title: 'DESIGN', 
        count: 1, 
        issues: [
            { title: 'Content strategy', key: 'LP-4', statusColor: 'red', assigneeInitials: 'CS' },
        ]
    },
    { 
        title: 'TESTING', 
        count: 2, 
        issues: [
            { title: 'Target audience research', key: 'LP-2', statusColor: 'orange', assigneeInitials: 'CS' },
            { title: 'Competitor analysis', key: 'LP-3', statusColor: 'orange', assigneeInitials: 'CS' },
        ]
    },
    { title: 'LAUNCH', count: 0, issues: [], accent: 'text-green-500' },
];


const ProjectDashboard = () => {
    const navigate = useNavigate();
    const [isBoardLoaded, setIsBoardLoaded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIssue, setSelectedIssue] = useState(null);

    const projectName = 'Landing page'; 
    const projectKey = 'LP'; 

    const handleQuickstart = () => {
        navigate('/create-project');
    };

    const handleActionClick = (action) => {
        console.log(`${action} action clicked.`);
    };
    
    // Handler for general Create buttons (Header and Empty State)
    const handleCreateItem = () => {
        if (!isBoardLoaded) {
            setIsBoardLoaded(true); 
        }
        setSelectedIssue(null); // Ensure creation modal is shown
        setIsModalOpen(true);
    };

    const handleKanbanColumnCreate = () => {
        setSelectedIssue(null); // Ensure creation modal is shown
        setIsModalOpen(true);
    };
    
    const handleCreateIssue = (newIssueData) => {
        console.log("New issue created:", newIssueData);
    };
    
    // HANDLER: Opens the issue detail modal with specific issue data
    const handleCardClick = (issueData) => {
        setSelectedIssue(issueData);
        setIsModalOpen(true);
    };


    // Sub-navigation tabs and their corresponding routes
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
    
    // Determine the current active tab based on the URL path for styling
    const location = useLocation();
    const currentTabPath = location.pathname;


    return (
        <>
            {/* Project Sub-Navigation (Stays sticky within the main container) */}
            <div className="bg-white p-4 rounded-xl shadow-md mb-6 sticky top-0 z-10">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="flex items-center space-x-3 text-2xl font-bold text-gray-900">
                        <div className="w-5 h-5 bg-purple-200 rounded-sm flex items-center justify-center text-sm text-purple-800 font-bold">{projectKey}</div>
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
                                ${currentTabPath === tab.path || (currentTabPath.startsWith(tab.path) && tab.path !== '/dashboard')
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

            <div className="bg-white p-4 rounded-xl relative flex flex-col min-h-[calc(100vh-180px)]">
                
                {/* Search/Filter/Group Actions */}
                <div className="relative z-10 flex items-center justify-between mb-4 flex-shrink-0">
                    <div className="flex items-center space-x-2">
                        <input type="text" placeholder="Search board" className="p-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 w-64"/>
                        <button className="p-2 text-gray-500 hover:text-gray-700" onClick={() => handleActionClick('Search')}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.448 4.637l-1.353 1.354a.75.75 0 01-1.06 0l-1.354-1.353A7 7 0 012 9z" clipRule="evenodd" /></svg>
                        </button>
                        {/* User Avatars */}
                        <div className="flex -space-x-1">
                            <div className="w-6 h-6 rounded-full bg-cyan-200 flex items-center justify-center text-xs font-semibold border-2 border-gray-100">CS</div>
                            <div className="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center text-xs font-semibold border-2 border-gray-100">SL</div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <a href="#" onClick={() => handleActionClick('Share')} className="flex items-center space-x-1 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path d="M12.5 12.75a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75h-2.5a.75.75 0 01-.75-.75v-2.5z" /><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8.25-4.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v3.25h3.25a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-3.25v3.25a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-3.25h-3.25a.75.75 0 01-.75-.75v-.008a.75.75 0 01.75-.75h3.25V6.5z" clipRule="evenodd" /></svg><span>Share</span>
                        </a>
                        <a href="#" onClick={() => handleActionClick('Filter')} className="flex items-center space-x-1 hover:text-gray-900"><span>Filter</span></a>
                        <a href="#" onClick={() => handleActionClick('Group')} className="flex items-center space-x-1 hover:text-gray-900"><span>Group by: Status</span></a>
                        <a href="#" onClick={() => handleActionClick('More')} className="flex items-center space-x-1 hover:text-gray-900"><span>More</span></a>
                    </div>
                </div>

                {/* 3. Dynamic Content Area (Kanban or Empty State) */}
                {isBoardLoaded ? (
                    <div className="flex-1 relative overflow-x-auto">
                        <div className="flex space-x-4 min-h-full p-4 absolute inset-0">
                            {kanbanColumns.map(col => (
                                <KanbanColumn 
                                    key={col.title} 
                                    column={col} 
                                    handleKanbanColumnCreate={handleKanbanColumnCreate}
                                    onCardClick={handleCardClick} 
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                        <div className="w-full max-w-sm h-72 mb-4 relative z-0">
                            <KanbanIllustration />
                        </div>
                        <h3 className="text-xl font-medium text-gray-700 mt-4">
                            Visualize your work with a board
                        </h3>
                        <p className="text-base text-gray-500 mb-6 max-w-xs">
                            Track, organize and prioritize your team's work. Get 
                            started by creating an item for your team.
                        </p>
                        <Button 
                            onClick={handleCreateItem} 
                            className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 w-auto px-6"
                        >
                            Create an item
                        </Button>
                    </div>
                )}
            </div>
            
            {/* Quickstart Footer (Stays fixed relative to the viewport) */}
            <div className="fixed bottom-4 right-4 z-40">
                 <div className="flex items-center space-x-3">
                    <div className="bg-white rounded-lg p-2 shadow-xl border border-gray-200 flex items-center space-x-2 cursor-pointer">
                        <div className="h-6 w-16 flex items-center justify-center">
                            <div className="flex space-x-1">
                                <div className="w-2 h-4 bg-gray-300 rounded-sm"></div>
                                <div className="w-2 h-5 bg-purple-200 rounded-sm"></div>
                                <div className="w-2 h-4 bg-gray-300 rounded-sm"></div>
                            </div>
                        </div>
                        <Button 
                            onClick={handleQuickstart}
                            className="bg-red-500 hover:bg-red-600 focus:ring-red-300 w-auto px-4"
                        >
                            Quickstart
                        </Button>
                    </div>
                </div>
            </div>

            {/* Modal Renderer */}
            {selectedIssue && (
                <IssueDetailModal 
                    isOpen={isModalOpen} 
                    onClose={() => { setIsModalOpen(false); setSelectedIssue(null); }}
                    issue={selectedIssue} 
                />
            )}
            
            {/* Create Issue Modal Renderer (for header/empty state click when no issue is selected) */}
            {selectedIssue === null && (
                <CreateIssueModal 
                    isOpen={isModalOpen} 
                    onClose={() => { setIsModalOpen(false); setSelectedIssue(null); }} 
                    onCreate={handleCreateIssue} 
                />
            )}
        </>
    );
};

export default ProjectDashboard;
