import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecentProjects = () => {
  const navigate = useNavigate();

  const recentProjects = [
    { 
      id: 'FF', 
      name: 'FixFlow Software', 
      type: 'Software Project', 
      lead: 'JD', 
      issuesOpen: 12, 
      progress: 75,
      lastVisited: '10 minutes ago',
      color: 'from-violet-600 to-indigo-700' 
    },
    { 
      id: 'DS', 
      name: 'Design System - Violet', 
      type: 'Design Project', 
      lead: 'AS', 
      issuesOpen: 4, 
      progress: 90,
      lastVisited: '2 hours ago',
      color: 'from-purple-500 to-violet-600' 
    },
    { 
      id: 'IM', 
      name: 'Infrastructure Migration', 
      type: 'Service Desk', 
      lead: 'MK', 
      issuesOpen: 28, 
      progress: 30,
      lastVisited: 'Yesterday',
      color: 'from-indigo-700 to-blue-800' 
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-3xl font-black text-violet-950 tracking-tight">Recent Projects</h1>
          <p className="text-sm text-gray-500 font-medium mt-1">Pick up right where you left off in your workspaces.</p>
        </div>
        <button 
          onClick={() => navigate('/projects')}
          className="text-sm font-bold text-violet-600 hover:text-violet-800 flex items-center transition-colors"
        >
          View all projects 
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentProjects.map((project) => (
          <div 
            key={project.id}
            className="group relative bg-white border border-violet-100 rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-2"
          >
            {/* Top Decorative Gradient */}
            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.color}`}></div>

            <div className="flex justify-between items-start mb-6">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-xl font-black shadow-lg shadow-violet-200`}>
                {project.id}
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase bg-gray-50 px-2 py-1 rounded">
                {project.lastVisited}
              </span>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-violet-950 group-hover:text-violet-600 transition-colors mb-1 truncate">
                {project.name}
              </h3>
              <p className="text-xs font-bold text-violet-400 uppercase tracking-widest">{project.type}</p>
            </div>

            {/* Progress Section */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-2">
                <span className="text-[11px] font-black text-gray-400 uppercase">Sprint Progress</span>
                <span className="text-sm font-black text-violet-600">{project.progress}%</span>
              </div>
              <div className="w-full h-2 bg-violet-50 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${project.color} transition-all duration-1000`} 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-5 border-t border-violet-50">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-violet-900 border-2 border-violet-100 text-white flex items-center justify-center text-[10px] font-black">
                  {project.lead}
                </div>
                <span className="text-xs font-bold text-gray-600">Lead</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-black text-violet-950">{project.issuesOpen}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Open Issues</p>
              </div>
            </div>
          </div>
        ))}

        {/* Create New Project Placeholder Card */}
        <div 
          onClick={() => navigate('/create')}
          className="border-2 border-dashed border-violet-100 rounded-3xl p-6 flex flex-col items-center justify-center text-center group hover:border-violet-400 transition-all cursor-pointer bg-violet-50/20"
        >
          <div className="w-12 h-12 rounded-full bg-white border border-violet-100 flex items-center justify-center text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all mb-4 shadow-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 4v16m8-8H4" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-sm font-bold text-violet-400 group-hover:text-violet-700">Create new workspace</p>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;