import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import CreateIssueModal from '../components/CreateIssueModal';

const AppSwitcherMenu = ({ onClose }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const APP_ITEMS = [
        { name: 'Atlassian Home', iconColor: 'bg-purple-600', iconShape: 'A' },
        { name: 'Jira', iconColor: 'bg-indigo-600', iconShape: 'J' },
        { name: 'Administrations', iconColor: 'bg-gray-600', iconShape: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white"><path fillRule="evenodd" d="M11.828 2.25c-.965-.224-1.944-.224-2.909 0v.093a2.25 2.25 0 013.938 1.637c.057.433.13.865.214 1.297v1.077c0 1.096.398 2.143 1.117 2.862a5.52 5.52 0 001.09.845 2.25 2.25 0 011.33 2.054v.244a5.25 5.25 0 01-1.071 3.398l-.75.862A1.875 1.875 0 0115 19.349v1.272a1.875 1.875 0 001.875 1.875c.965 0 1.892-.375 2.583-1.032a3.376 3.376 0 00.14-4.832 5.612 5.612 0 00-1.802-2.128c-.689-.472-1.353-.949-1.353-1.827v-1.077c.084-.432.157-.864.214-1.297a2.25 2.25 0 013.938-1.637V8.423a2.25 2.25 0 00-2.454-2.217 2.25 2.25 0 00-2.217 2.454zM11.828 2.25a.75.75 0 00-1.656 0v.093a2.25 2.25 0 013.938 1.637c.057.433.13.865.214 1.297v1.077c0 1.096.398 2.143 1.117 2.862a5.52 5.52 0 001.09.845 2.25 2.25 0 011.33 2.054v.244a5.25 5.25 0 01-1.071 3.398l-.75.862A1.875 1.875 0 0115 19.349v1.272a1.875 1.875 0 001.875 1.875c.965 0 1.892-.375 2.583-1.032a3.376 3.376 0 00.14-4.832 5.612 5.612 0 00-1.802-2.128c-.689-.472-1.353-.949-1.353-1.827v-1.077c.084-.432.157-.864.214-1.297a2.25 2.25 0 013.938-1.637V8.423a2.25 2.25 0 00-2.454-2.217 2.25 2.25 0 00-2.217 2.454zM12 4.5A7.5 7.5 0 004.5 12a.75.75 0 01-1.5 0A9 9 0 0112 3a.75.75 0 010 1.5z" clipRule="evenodd" /></svg>},
    ];

    const RECOMMENDED_ITEMS = [
        { name: 'Confluence', description: 'Document collaboration', iconColor: 'bg-red-500', iconShape: 'C' },
        { name: 'Jira Product Discovery', description: 'Prioritize, collaborate, and deliver new i...', iconColor: 'bg-blue-600', iconShape: 'D' },
        { name: 'Jira Service Management', description: 'Collaborative IT service managemnt', iconColor: 'bg-cyan-400', iconShape: 'S' },
        { name: 'More Atlassian products', description: '', iconColor: 'bg-gray-400', iconShape: '...' },
    ];

    const MORE_ITEM = { name: 'Confluence', description: 'Document collaboration', iconColor: 'bg-gray-200', iconShape: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-700"><path fillRule="evenodd" d="M10 1.5a.75.75 0 01.75.75V3h2.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V4.5h-1.75v14.25a.75.75 0 01-1.5 0V4.5h-1.75V3a.75.75 0 01.75-.75H10z" clipRule="evenodd" /></svg> };


    const MenuItem = ({ name, description, iconColor, iconShape, isRecommended = false }) => (
        <a href="#" className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg transition duration-100">
            <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-md flex items-center justify-center font-bold text-sm ${iconColor}`}>
                    {typeof iconShape === 'string' ? <span className="text-white">{iconShape}</span> : iconShape}
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-900">{name}</p>
                    {description && <p className="text-xs text-gray-500">{description}</p>}
                </div>
            </div>
            {isRecommended && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
            )}
        </a>
    );

    return (
        <div ref={menuRef} className="absolute top-12 left-0 mt-2 w-72 bg-white rounded-lg shadow-2xl border border-gray-100 z-50 p-4">
            
            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">Your Apps</h4>
            <div className="space-y-1 border-b pb-4 mb-4">
                {APP_ITEMS.map(item => (
                    <MenuItem key={item.name} {...item} />
                ))}
            </div>

            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">Recommended for your team</h4>
            <div className="space-y-1 border-b pb-4 mb-4">
                {RECOMMENDED_ITEMS.map(item => (
                    <MenuItem key={item.name} {...item} isRecommended={true} />
                ))}
            </div>

            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">More</h4>
            <MenuItem {...MORE_ITEM} />
            
            <div className="mt-4">
                <Button className="w-full bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200 focus:ring-gray-300">
                    Manage list
                </Button>
            </div>
        </div>
    );
};

const Header = ({ userInitials, handleCreateAction }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <header className="flex items-center justify-between p-3 border-b border-gray-200 bg-white sticky top-0 z-20 shadow-sm">
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-xl font-bold text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5l-5-5 1.41-1.41L11 15.68l7.59-7.59L20 9.5l-9 9z"/>
                    </svg>
                    <span>FixFlow</span>
                </div>
                <nav className="hidden md:flex space-x-4 text-sm text-gray-700 relative">
                    <a href="#" className="hover:text-blue-600 py-1">Your work</a>
                    <a 
                        href="#" 
                        onClick={(e) => {e.preventDefault(); toggleMenu();}}
                        className={`py-1 flex items-center ${isMenuOpen ? 'text-blue-600' : 'hover:text-blue-600'}`}
                    >
                        Projects
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ml-1 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}>
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </a>
                    {isMenuOpen && <AppSwitcherMenu onClose={toggleMenu} />}

                    {['Filters', 'Dashboards', 'Teams', 'Plans', 'Apps'].map(item => (
                        <a key={item} href="#" className="hover:text-blue-600 py-1">{item}</a>
                    ))}
                </nav>
            </div>

            <div className="flex items-center space-x-3">
                <button 
                    className="bg-purple-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-purple-700"
                    onClick={handleCreateAction}
                >
                    Create
                </button>
                <span className="text-xs font-semibold text-gray-500 border border-gray-300 px-2 py-1 rounded-full">
                    30 days left
                </span>
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-sm">
                    {userInitials}
                </div>
            </div>
        </header>
    );
};

const Sidebar = ({ projectName }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-56 bg-gray-50 border-r border-gray-200 h-screen sticky top-0 p-4 flex flex-col justify-between overflow-y-auto relative">
            <div>
                <div className="mb-6">
                    <h3 className="text-xs font-semibold uppercase text-gray-500 mb-2">Projects</h3>
                    <div className="flex items-center justify-between text-blue-600 cursor-pointer">
                        <span className="text-sm font-medium">Projects</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 0110 3z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className="mb-6">
                    <h3 className="text-xs font-semibold uppercase text-gray-500 mb-2">Recent</h3>
                    
                    <div 
                        onMouseEnter={() => setIsMenuOpen(true)}
                        onMouseLeave={() => setIsMenuOpen(false)}
                        className="relative"
                    >
                        <div 
                            className="flex items-center space-x-2 bg-blue-100/50 p-2 rounded-lg text-gray-900 border border-blue-200 cursor-pointer"
                            onClick={() => setIsMenuOpen(prev => !prev)}
                        >
                            <div className="w-4 h-4 bg-purple-200 rounded-sm flex items-center justify-center text-xs text-purple-800 font-bold">L</div>
                            <span className="text-sm font-medium">{projectName}</span>
                        </div>
                        <a href="#" className="text-xs text-gray-600 mt-3 block hover:underline">View all projects</a>
                        
                        {isMenuOpen && <ProjectIssuesMenu projectName={projectName} onClose={() => setIsMenuOpen(false)} />}
                    </div>

                </div>
            </div>
            <div className="text-xs text-gray-500">
                <p className="mb-1">You're in a team-managed project</p>
                <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.329 15.696A6.974 6.974 0 0110 13a6.974 6.974 0 015.671 2.696c-1.34-1.258-3.08-2.096-4.996-2.096s-3.656.838-4.996 2.096z" />
                    </svg>
                    <span>Give feedback</span>
                </div>
            </div>
        </div>
    );
};

const ProjectIssuesMenu = ({ projectName, onClose }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const issues = [
        'All issues', 'My open issues', 'Reported by me', 'Open issues',
        'Done issues', 'Viewed recently', 'Resolved recently', 'Updated recently',
    ];

    const ProjectIcon = () => (
        <div className="w-6 h-6 bg-purple-200 rounded-md flex items-center justify-center text-sm text-purple-800 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#a78bfa" className="w-5 h-5">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.329 15.696A6.974 6.974 0 0110 13a6.974 6.974 0 015.671 2.696c-1.34-1.258-3.08-2.096-4.996-2.096s-3.656.838-4.996 2.096z" clipRule="evenodd" />
            </svg>
        </div>
    );

    return (
        <div 
            ref={menuRef} 
            className="absolute top-0 left-full ml-1 w-64 bg-white rounded-lg shadow-2xl border border-gray-100 z-40 p-4"
        >
            <div className="flex items-center space-x-3 pb-3 mb-4 border-b border-gray-200">
                <ProjectIcon />
                <span className="text-base font-semibold text-gray-900">{projectName}</span>
            </div>

            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">Issues</h4>
            <nav className="space-y-1 pb-4 mb-4 border-b border-gray-200">
                {issues.map(item => (
                    <a 
                        key={item} 
                        href="#" 
                        className="block text-sm text-gray-700 p-2 rounded-lg hover:bg-blue-50 transition duration-100"
                    >
                        {item}
                    </a>
                ))}
            </nav>

            <a href="#" className="block text-sm text-gray-700 p-2 rounded-lg hover:bg-blue-50 transition duration-100 mb-4">
                View all filters
            </a>
            
            <a href="#" className="block text-sm text-gray-700 p-2 rounded-lg hover:bg-blue-50 transition duration-100">
                View all projects
            </a>
        </div>
    );
};

const KanbanCard = ({ issue }) => {
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
        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition duration-150 mb-3 cursor-grab">
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


const KanbanColumn = ({ column, handleKanbanColumnCreate }) => (
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
                <KanbanCard key={issue.key} issue={issue} />
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
        {/* Blue Blob Shape */}
        <path d="M400 200 C 400 300, 300 400, 200 400 C 100 400, 0 300, 0 200 C 0 100, 100 0, 200 0 C 300 0, 400 100, 400 200 Z" fill="#2684ff" style={{ transform: 'scale(1.2) translate(0px, 100px)', transformOrigin: 'center' }} opacity="0.1"/>
        <path d="M400 200 C 400 300, 300 400, 200 400 C 100 400, 0 300, 0 200 C 0 100, 100 0, 200 0 C 300 0, 400 100, 400 200 Z" fill="#5050f7" style={{ transform: 'scale(0.8) translate(50px, -50px)', transformOrigin: 'center' }} opacity="0.1"/>
        
        {/* Central Board Illustration */}
        <rect x="60" y="100" width="280" height="180" rx="8" ry="8" fill="#fff" stroke="#e5e7eb" strokeWidth="2" style={{ transform: 'translate(0, 50px) scale(0.75)', transformOrigin: 'center' }} />
        <rect x="70" y="110" width="260" height="15" rx="4" ry="4" fill="#f3f4f6" style={{ transform: 'translate(0, 50px) scale(0.75)', transformOrigin: 'center' }} />
        
        {/* Task rows (simulated Kanban cards) */}
        <rect x="70" y="135" width="20" height="4" rx="2" ry="2" fill="#d1d5db" style={{ transform: 'translate(0, 50px) scale(0.75)', transformOrigin: 'center' }} />
        <rect x="100" y="135" width="200" height="4" rx="2" ry="2" fill="#d1d5db" style={{ transform: 'translate(0, 50px) scale(0.75)', transformOrigin: 'center' }} />
        
        <rect x="70" y="145" width="20" height="4" rx="2" ry="2" fill="#3b82f6" style={{ transform: 'translate(0, 50px) scale(0.75)', transformOrigin: 'center' }} />
        <rect x="100" y="145" width="200" height="4" rx="2" ry="2" fill="#d1d5db" style={{ transform: 'translate(0, 50px) scale(0.75)', transformOrigin: 'center' }} />
        
        {/* Colored shapes matching design */}
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
    const [activeTab, setActiveTab] = useState('Board');
    const [isBoardLoaded, setIsBoardLoaded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const mainContentRef = useRef(null);

    const projectName = 'Landing page'; 
    const projectKey = 'LP'; 
    const userInitials = 'SL';

    const handleQuickstart = () => {
        navigate('/create-project');
    };

    const handleActionClick = (action) => {
        console.log(`${action} action clicked.`);
    };
    
    const handleCreateItem = () => {
        if (!isBoardLoaded) {
            setIsBoardLoaded(true); 
        }
        setIsModalOpen(true);
    };

    const handleKanbanColumnCreate = () => {
        setIsModalOpen(true);
    };
    
    const handleCreateIssue = (newIssueData) => {
        console.log("New issue created:", newIssueData);
    };


    const tabs = ['Summary', 'Board', 'List', 'Calendar', 'Timeline', 'Approvals', 'Forms', 'Pages', 'Attachments', 'Issues', 'Reports', 'Archived Iss'];
    
    return (
        <>
            <div className="flex flex-col flex-1">
                {/* We rely on DashboardLayout for Header and Sidebar */}
                
                <main className="flex-1">
                    
                    {/* Project Sub-Navigation (Stays sticky) */}
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
                                <a 
                                    key={tab} 
                                    href="#" 
                                    onClick={(e) => {e.preventDefault(); setActiveTab(tab);}}
                                    className={`
                                        whitespace-nowrap text-sm font-medium pb-2 transition duration-150
                                        ${activeTab === tab 
                                            ? 'text-blue-600 border-b-2 border-blue-600' 
                                            : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'
                                        }
                                    `}
                                >
                                    {tab}
                                </a>
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
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                {/* 1. Background Illustration Area */}
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
                </main>
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
            <CreateIssueModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onCreate={handleCreateIssue} 
            />
        </>
    );
};

export default ProjectDashboard;
