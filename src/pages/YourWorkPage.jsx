import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  Star, 
  ChevronRight, 
  Layout, 
  ExternalLink,
  Search,
  Plus,
  Box
} from 'lucide-react';

// --- Sub-components ---

const RecentIssueRow = ({ item }) => {
  const isProject = item.type === 'project';
  
  return (
    <div className="group flex items-center justify-between p-3 hover:bg-violet-50/50 transition-all duration-200 rounded-xl cursor-pointer border border-transparent hover:border-violet-100">
      <div className="flex items-center space-x-4">
        {/* Dynamic Icon Rendering */}
        <div className="flex-shrink-0">
          {isProject ? (
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm"
              style={{ backgroundColor: item.iconColor || '#8b5cf6' }}
            >
              <Box className="w-5 h-5 text-white" />
            </div>
          ) : (
            <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-violet-600" />
            </div>
          )}
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-violet-700 transition-colors">
            {item.title}
          </h4>
          <div className="flex items-center space-x-2 mt-0.5">
            <span className="text-[11px] font-bold text-violet-400 uppercase tracking-wider">
              {item.projectKey}
            </span>
            {item.marketSample && (
              <>
                <span className="text-gray-300">|</span>
                <span className="text-[11px] text-gray-500 font-medium">{item.marketSample}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        {!isProject && (
          <div className="flex items-center space-x-4">
            <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${
                item.status === 'Created' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
            }`}>
              {item.status}
            </span>
            <div className="w-8 h-8 rounded-full bg-violet-900 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
              {item.assigneeInitials}
            </div>
          </div>
        )}
        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-violet-400 transition-colors" />
      </div>
    </div>
  );
};

const ProjectCard = ({ projectName, openIssues, doneIssues, cardColor }) => (
  <div className="w-72 flex-shrink-0 p-5 bg-white border border-violet-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 group cursor-pointer">
    <div className="flex items-center space-x-4 mb-6">
      <div className={`w-12 h-12 ${cardColor} rounded-xl flex items-center justify-center text-white shadow-lg shadow-violet-200`}>
        <Layout className="w-6 h-6" />
      </div>
      <div className="overflow-hidden">
        <p className="text-sm font-bold text-violet-950 truncate">{projectName}</p>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Team Project</p>
      </div>
    </div>
    
    <div className="space-y-3 mb-6">
      <div className="flex justify-between items-center text-xs">
        <span className="text-gray-500 font-medium">Open Issues</span>
        <span className="bg-violet-50 text-violet-600 px-2 py-0.5 rounded-full font-bold">{openIssues}</span>
      </div>
      <div className="flex justify-between items-center text-xs">
        <span className="text-gray-500 font-medium">Done Issues</span>
        <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-bold">{doneIssues}</span>
      </div>
    </div>

    <Link to="/dashboard" className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-violet-600 group-hover:text-violet-800 transition-colors">
      Go to board
      <ExternalLink className="w-3 h-3" />
    </Link>
  </div>
);

// --- Main Page Component ---

const YourWorkPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Viewed');

  const tabs = [
    { id: 'Worked on', icon: Clock },
    { id: 'Viewed', icon: FileText },
    { id: 'Assigned to me', icon: CheckCircle2 },
    { id: 'Starred', icon: Star }
  ];

  // Logic to fetch data based on active tab
  const getContentData = () => {
    if (activeTab === 'Worked on') return { 'Today': RECENT_ISSUES };
    if (activeTab === 'Viewed') return VIEWED_ACTIVITIES;
    if (activeTab === 'Assigned to me') return { 'Today': [RECENT_ISSUES[0]] };
    return { 'Today': [] };
  };

  const contentData = getContentData();

  return (
    <div className="max-w-6xl mx-auto py-4 animate-in fade-in duration-500">
      <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-violet-950 tracking-tight">Your work</h1>
          <p className="text-sm text-gray-500 font-medium mt-1">Track your recent activity across all projects.</p>
        </div>
        <button 
          onClick={() => navigate('/issues/create')}
          className="bg-violet-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-violet-200 hover:bg-violet-700 active:scale-95 transition-all flex items-center justify-center"
        >
            <Plus className="w-4 h-4 mr-2" />
            New Issue
        </button>
      </header>

      {/* Recent Projects Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm font-black text-violet-400 uppercase tracking-[0.2em]">Recent Projects</h2>
          <button onClick={() => navigate('/projects')} className="text-violet-600 hover:text-violet-800 text-xs font-bold transition-colors">
            View all projects
          </button>
        </div>
        <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
          {RECENT_PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Activity Tabs */}
      <div className="bg-white border border-violet-100 rounded-[2rem] shadow-sm overflow-hidden min-h-[500px]">
        <div className="border-b border-violet-50 px-6 bg-violet-50/20">
          <nav className="flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center space-x-2 py-5 text-xs font-black uppercase tracking-widest transition-all relative
                  ${activeTab === tab.id ? 'text-violet-600' : 'text-gray-400 hover:text-violet-400'}
                `}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.id}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-violet-600 rounded-t-full shadow-[0_-2px_8px_rgba(124,58,237,0.3)]" />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {Object.entries(contentData).length > 0 && Object.values(contentData)[0].length > 0 ? (
            <div className="space-y-8">
              {Object.entries(contentData).map(([day, activities]) => (
                <div key={day}>
                  <h3 className="text-[10px] font-black text-violet-300 uppercase tracking-widest mb-4 px-3">{day}</h3>
                  <div className="space-y-1">
                    {activities.map((item, index) => (
                      <RecentIssueRow key={index} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-20 h-20 bg-violet-50 rounded-full flex items-center justify-center mb-6">
                <Search className="w-10 h-10 text-violet-200" />
              </div>
              <h3 className="text-xl font-bold text-violet-950 mb-2">No items found</h3>
              <p className="text-sm text-gray-500 max-w-xs mx-auto mb-8">
                We couldn't find any tasks or activity in this category for you.
              </p>
              <button onClick={() => navigate('/projects')} className="bg-violet-600 text-white px-8 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-violet-100 hover:bg-violet-700 transition-all">
                Explore Projects
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Mock Data ---
const RECENT_ISSUES = [
    { type: 'issue', title: 'Create high-fidelity mockups', projectKey: 'FF-104', marketSample: 'Software Project', assigneeInitials: 'JD', status: 'In Progress' },
    { type: 'issue', title: 'Refactor routing logic', projectKey: 'FF-101', marketSample: 'Software Project', assigneeInitials: 'JD', status: 'Created' },
    { type: 'issue', title: 'Update design tokens', projectKey: 'DS-22', marketSample: 'Design System', assigneeInitials: 'MK', status: 'Done' },
];

const RECENT_PROJECTS_DATA = [
    { projectName: 'FixFlow Pro', openIssues: 12, doneIssues: 45, cardColor: 'bg-violet-600' },
    { projectName: 'Market Research', openIssues: 2, doneIssues: 8, cardColor: 'bg-amber-500' },
    { projectName: 'Landing Redesign', openIssues: 6, doneIssues: 2, cardColor: 'bg-indigo-600' },
];

const VIEWED_ACTIVITIES = {
    'Today': [
        { type: 'project', title: 'Core Assets', projectKey: 'Workspace', iconColor: '#8b5cf6', marketSample: 'Infrastructure' },
        { type: 'issue', title: 'API Integration', projectKey: 'FF-105', marketSample: 'FixFlow Pro', assigneeInitials: 'JD', status: 'Created' },
    ],
    'Yesterday': [
        { type: 'issue', title: 'User Testing Session', projectKey: 'DS-12', marketSample: 'Design System', assigneeInitials: 'MK', status: 'Done' },
    ],
};

export default YourWorkPage;