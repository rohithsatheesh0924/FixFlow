import React from 'react';

const OpenIssues = () => {
  const columns = [
    {
      title: 'To Do',
      count: 3,
      issues: [
        { id: 'FF-102', summary: 'Fix sidebar navigation active state', priority: 'Medium', type: 'Bug', color: 'border-l-amber-400' },
        { id: 'FF-105', summary: 'Integrate violet color palette to charts', priority: 'Low', type: 'Task', color: 'border-l-blue-400' },
        { id: 'FF-109', summary: 'Mobile responsiveness for Kanban board', priority: 'High', type: 'Story', color: 'border-l-violet-600' },
      ]
    },
    {
      title: 'In Progress',
      count: 2,
      issues: [
        { id: 'FF-101', summary: 'Initialize violet theme architecture', priority: 'High', type: 'Story', color: 'border-l-violet-600' },
        { id: 'FF-104', summary: 'Design classy issue table layout', priority: 'Highest', type: 'Story', color: 'border-l-red-500' },
      ]
    },
    {
      title: 'Review',
      count: 1,
      issues: [
        { id: 'FF-98', summary: 'Standardize typography for headers', priority: 'Medium', type: 'Task', color: 'border-l-amber-400' },
      ]
    }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header Area */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-black text-violet-950 tracking-tight">Open Issues Board</h1>
          <div className="flex items-center mt-1 space-x-2">
            <span className="text-xs font-bold text-violet-600 bg-violet-50 px-2 py-0.5 rounded">Sprint 14</span>
            <span className="text-xs text-gray-400 font-medium">Ends in 4 days</span>
          </div>
        </div>
        
        <div className="flex -space-x-2">
          {['JD', 'AS', 'MK', 'BT'].map((user, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-violet-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-violet-700 hover:-translate-y-1 transition-transform cursor-pointer">
              {user}
            </div>
          ))}
          <button className="w-8 h-8 rounded-full bg-gray-50 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:border-violet-400 hover:text-violet-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      {/* Kanban Board Grid */}
      <div className="flex flex-1 gap-6 overflow-x-auto pb-4">
        {columns.map((column) => (
          <div key={column.title} className="flex-1 min-w-[300px] bg-violet-50/30 rounded-2xl p-4 border border-violet-100/50 flex flex-col">
            {/* Column Header */}
            <div className="flex justify-between items-center mb-4 px-1">
              <h3 className="text-xs font-black text-violet-400 uppercase tracking-widest flex items-center">
                {column.title}
                <span className="ml-2 bg-violet-100 text-violet-600 px-2 py-0.5 rounded-full text-[10px]">
                  {column.count}
                </span>
              </h3>
              <button className="text-gray-400 hover:text-violet-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </button>
            </div>

            {/* Task Cards */}
            <div className="space-y-3 flex-1 overflow-y-auto">
              {column.issues.map((issue) => (
                <div 
                  key={issue.id} 
                  className={`bg-white p-4 rounded-xl shadow-sm border border-violet-100 border-l-4 ${issue.color} hover:shadow-md hover:shadow-violet-200/50 transition-all cursor-grab active:cursor-grabbing group`}
                >
                  <p className="text-sm font-bold text-gray-800 leading-snug mb-4 group-hover:text-violet-900 transition-colors">
                    {issue.summary}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                       <span className={`w-4 h-4 rounded-sm flex items-center justify-center text-[8px] font-bold text-white ${issue.type === 'Bug' ? 'bg-red-500' : 'bg-violet-600'}`}>
                         {issue.type[0]}
                       </span>
                       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                         {issue.id}
                       </span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-violet-950 flex items-center justify-center text-[8px] font-bold text-white border border-violet-200">
                      JD
                    </div>
                  </div>
                </div>
              ))}
              
              <button className="w-full py-2 border-2 border-dashed border-violet-100 rounded-xl text-xs font-bold text-violet-300 hover:border-violet-300 hover:text-violet-600 transition-all">
                + Add Issue
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenIssues;