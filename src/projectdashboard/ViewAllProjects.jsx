import React from 'react';

const ViewAllProjects = () => {
  const projects = [
    { name: 'FixFlow Software', key: 'FF', lead: 'JD', type: 'Software', category: 'Product', color: 'from-violet-600 to-indigo-700' },
    { name: 'Marketing Campaign 2026', key: 'MC', lead: 'AS', type: 'Business', category: 'Marketing', color: 'from-purple-500 to-violet-600' },
    { name: 'Infrastructure Migration', key: 'IM', lead: 'MK', type: 'Service Desk', category: 'IT', color: 'from-indigo-700 to-blue-800' },
    { name: 'Design System - Violet', key: 'DSV', lead: 'JD', type: 'Software', category: 'Design', color: 'from-violet-800 to-fuchsia-700' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-4">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-black text-violet-950 tracking-tight">Projects</h1>
          <p className="text-sm text-gray-500 font-medium mt-1">Manage and access all your active workspaces.</p>
        </div>
        <div className="flex space-x-3">
            <button className="px-4 py-2 text-sm font-bold text-violet-600 hover:bg-violet-50 rounded-xl transition-colors">
                Import Project
            </button>
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-violet-200 transition-all active:scale-95">
                Create Project
            </button>
        </div>
      </div>

      {/* Search and Category Bar */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <div className="relative w-full md:w-80">
          <input 
            type="text" 
            placeholder="Search projects..." 
            className="w-full pl-10 pr-4 py-2.5 border border-violet-100 rounded-xl text-sm bg-white focus:ring-2 focus:ring-violet-400 outline-none transition-all shadow-sm"
          />
          <svg className="w-4 h-4 absolute left-3.5 top-3 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
        <select className="px-4 py-2.5 bg-white border border-violet-100 rounded-xl text-sm text-gray-600 font-medium outline-none focus:ring-2 focus:ring-violet-400">
            <option>All Categories</option>
            <option>Product</option>
            <option>Design</option>
            <option>IT</option>
        </select>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div 
            key={project.key} 
            className="group bg-white border border-violet-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-violet-500/10 transition-all cursor-pointer relative overflow-hidden"
          >
            {/* Top Bar Decoration */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.color}`}></div>

            <div className="flex items-start justify-between mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white font-black text-xl shadow-inner shadow-white/20`}>
                {project.key[0]}
              </div>
              <button className="text-gray-300 hover:text-violet-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>

            <div>
              <h3 className="text-lg font-bold text-violet-950 group-hover:text-violet-600 transition-colors truncate">
                {project.name}
              </h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                {project.key} — {project.type}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-violet-50 pt-4">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase">Project Lead</span>
                <div className="flex items-center mt-1 space-x-2">
                    <div className="w-6 h-6 rounded-full bg-violet-900 text-white flex items-center justify-center text-[8px] font-black border border-violet-200">
                        {project.lead}
                    </div>
                    <span className="text-xs font-semibold text-gray-700">Team Member</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-violet-400 uppercase">Category</span>
                <p className="text-xs font-bold text-violet-600">{project.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllProjects;