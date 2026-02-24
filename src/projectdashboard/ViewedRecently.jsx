import React from 'react';

const ViewedRecently = () => {
  const recentIssues = [
    { id: 'FF-104', summary: 'Design classy issue table layout', viewedAt: '2 minutes ago', type: 'Story', status: 'In Progress' },
    { id: 'FF-101', summary: 'Initialize violet theme architecture', viewedAt: '15 minutes ago', type: 'Story', status: 'In Progress' },
    { id: 'FF-109', summary: 'Mobile responsiveness for Kanban board', viewedAt: '1 hour ago', type: 'Story', status: 'To Do' },
    { id: 'FF-102', summary: 'Fix sidebar navigation active state', viewedAt: '3 hours ago', type: 'Bug', status: 'To Do' },
    { id: 'FF-95', summary: 'Global CSS variable cleanup', viewedAt: 'Yesterday', type: 'Task', status: 'Done' },
    { id: 'FF-88', summary: 'Database indexing for issue search', viewedAt: 'Yesterday', type: 'Task', status: 'Done' },
  ];

  return (
    <div className="max-w-6xl mx-auto py-4">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-violet-950 tracking-tight">Recently Viewed</h1>
        <p className="text-sm text-gray-500 font-medium mt-1">Jump back into the tasks you've looked at lately.</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentIssues.map((issue) => (
          <div 
            key={issue.id} 
            className="group bg-white border border-violet-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden"
          >
            {/* Subtle Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-2">
                  <div className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold text-white shadow-sm ${issue.type === 'Bug' ? 'bg-red-500' : issue.type === 'Story' ? 'bg-violet-600' : 'bg-blue-500'}`}>
                    {issue.type[0]}
                  </div>
                  <span className="text-xs font-bold text-violet-400 uppercase tracking-tighter">{issue.id}</span>
                </div>
                <span className="text-[10px] font-medium text-gray-400 italic">{issue.viewedAt}</span>
              </div>

              <h3 className="text-sm font-bold text-gray-800 leading-snug mb-6 group-hover:text-violet-700 transition-colors h-10 line-clamp-2">
                {issue.summary}
              </h3>

              <div className="flex justify-between items-center pt-4 border-t border-violet-50">
                <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest ${
                  issue.status === 'Done' ? 'bg-emerald-50 text-emerald-600' : 'bg-violet-50 text-violet-600'
                }`}>
                  {issue.status}
                </span>
                
                <div className="w-6 h-6 rounded-full bg-violet-950 flex items-center justify-center text-[8px] font-bold text-white border border-violet-200">
                  JD
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State / Footer Call to action */}
      <div className="mt-12 text-center p-12 border-2 border-dashed border-violet-100 rounded-3xl">
        <p className="text-sm font-semibold text-gray-400">Looking for something else?</p>
        <button className="mt-4 text-violet-600 font-bold hover:underline">Search all project issues →</button>
      </div>
    </div>
  );
};

export default ViewedRecently;