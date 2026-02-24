import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecentProjects = () => {
  const navigate = useNavigate();

  const projects = [
    { 
      id: 'FF', 
      name: 'FixFlow Software', 
      type: 'Software Project', 
      lead: 'JD', 
      openIssues: 12, 
      progress: 78,
      lastUpdated: '12 mins ago',
      gradient: 'from-violet-600 to-indigo-700' 
    },
    { 
      id: 'DS', 
      name: 'Design System - Violet', 
      type: 'Asset Management', 
      lead: 'AS', 
      openIssues: 5, 
      progress: 92,
      lastUpdated: '2 hours ago',
      gradient: 'from-purple-500 to-violet-600' 
    },
    { 
      id: 'IM', 
      name: 'Infrastructure Migration', 
      type: 'Service Desk', 
      lead: 'MK', 
      openIssues: 34, 
      progress: 45,
      lastUpdated: 'Yesterday',
      gradient: 'from-indigo-800 to-blue-700' 
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-2">
      {/* Page Header */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-3xl font-black text-violet-950 tracking-tight">Recent Projects</h1>
          <p className="text-sm text-gray-500 font-medium mt-1">Jump back into your most active workspaces.</p>
        </div>
        <button 
          onClick={() => navigate('/projects')}
          className="group flex items-center text-sm font-bold text-violet-600 hover:text-violet-800 transition-colors"
        >
          View all projects
          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            onClick={() => navigate(`/projects/${project.id}`)}
            className="group relative bg-white border border-violet-100 rounded-[2rem] p-7 shadow-sm hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 cursor-pointer overflow-hidden border-b-4 border-b-transparent hover:border-b-violet-600 active:scale-[0.98]"
          >
            {/* Project Header */}
            <div className="flex justify-between items-start mb-8">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white text-xl font-black shadow-lg shadow-violet-200`}>
                {project.id}
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-1 rounded">
                  {project.lastUpdated}
                </span>
              </div>
            </div>

            {/* Project Title */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-violet-950 group-hover:text-violet-600 transition-colors mb-1 truncate">
                {project.name}
              </h3>
              <p className="text-xs font-bold text-violet-400 uppercase tracking-[0.2em]">{project.type}</p>
            </div>

            {/* Progress Visual */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-black text-gray-400 uppercase">Workload Progress</span>
                <span className="text-sm font-black text-violet-950">{project.progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-violet-50 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${project.gradient} transition-all duration-1000 ease-out`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="flex items-center justify-between pt-5 border-t border-violet-50">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-violet-900 border-2 border-violet-100 flex items-center justify-center text-white text-[10px] font-black">
                  {project.lead}
                </div>
                <span className="text-xs font-bold text-gray-600">Lead</span>
              </div>
              <div className="bg-violet-50 px-3 py-1 rounded-lg">
                <span className="text-sm font-black text-violet-700">{project.openIssues}</span>
                <span className="ml-1.5 text-[10px] font-bold text-violet-400 uppercase">Issues</span>
              </div>
            </div>
          </div>
        ))}

        {/* Create New Project Action Card */}
        <div 
          onClick={() => navigate('/create')}
          className="border-2 border-dashed border-violet-200 rounded-[2rem] p-7 flex flex-col items-center justify-center text-center group hover:border-violet-600 hover:bg-violet-50/30 transition-all cursor-pointer min-h-[320px]"
        >
          <div className="w-16 h-16 rounded-full bg-white border border-violet-100 flex items-center justify-center text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 shadow-sm mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-violet-950">New Project</h4>
          <p className="text-xs font-semibold text-violet-400 mt-1 uppercase tracking-widest">Start a workspace</p>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;