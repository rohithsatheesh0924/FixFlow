import React from 'react';

const DoneIssues = () => {
  const doneIssues = [
    { id: 'FF-95', summary: 'Global CSS variable cleanup', resolvedDate: 'Today, 10:45 AM', category: 'Maintenance', type: 'Task' },
    { id: 'FF-92', summary: 'Onboarding flow violet color refresh', resolvedDate: 'Yesterday', category: 'Design', type: 'Story' },
    { id: 'FF-88', summary: 'Database indexing for issue search', resolvedDate: 'Feb 21, 2026', category: 'Backend', type: 'Task' },
    { id: 'FF-84', summary: 'Legacy blue components removal', resolvedDate: 'Feb 19, 2026', category: 'Cleanup', type: 'Bug' },
    { id: 'FF-80', summary: 'Initial project setup & routing', resolvedDate: 'Feb 15, 2026', category: 'Architecture', type: 'Task' },
  ];

  return (
    <div className="max-w-5xl mx-auto py-4">
      {/* Header with Success Stats */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-black text-violet-950 tracking-tight">Completed Work</h1>
          <p className="text-sm text-gray-500 font-medium mt-1">Reviewing tasks that reached the finish line.</p>
        </div>
        
        <div className="flex items-center bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-xl">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-emerald-600 uppercase">Velocity</span>
            <span className="text-lg font-black text-emerald-700">12 Issues / Week</span>
          </div>
          <div className="ml-4 pl-4 border-l border-emerald-200">
             <svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
             </svg>
          </div>
        </div>
      </div>

      {/* Search & Bulk Actions */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-72">
          <input 
            type="text" 
            placeholder="Search archive..." 
            className="w-full pl-10 pr-4 py-2 border border-violet-100 rounded-lg text-sm bg-white focus:ring-2 focus:ring-violet-400 outline-none transition-all"
          />
          <svg className="w-4 h-4 absolute left-3 top-2.5 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
        <button className="text-sm font-bold text-violet-600 hover:text-violet-800 transition-colors">
          Clear Archive
        </button>
      </div>

      {/* Done List */}
      <div className="bg-white rounded-2xl border border-violet-100 shadow-sm overflow-hidden">
        {doneIssues.map((issue, index) => (
          <div 
            key={issue.id} 
            className={`flex items-center justify-between p-5 transition-colors group ${
              index !== doneIssues.length - 1 ? 'border-b border-violet-50' : ''
            } hover:bg-violet-50/20`}
          >
            <div className="flex items-center space-x-4">
              {/* Completed Checkbox Icon */}
              <div className="w-6 h-6 rounded-md bg-emerald-500 flex items-center justify-center text-white shadow-sm shadow-emerald-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-0.5">
                  <span className="text-[11px] font-bold text-violet-400 uppercase tracking-tighter">{issue.id}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-violet-100 text-violet-600 font-bold uppercase tracking-widest">{issue.category}</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 line-through decoration-gray-300 group-hover:text-violet-900 transition-colors">
                  {issue.summary}
                </h3>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-[10px] font-bold text-gray-400 uppercase">Resolved</p>
                <p className="text-xs font-semibold text-gray-600">{issue.resolvedDate}</p>
              </div>
              <button className="p-2 text-gray-300 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-700 text-white flex items-center justify-between shadow-xl shadow-violet-200">
        <div>
          <h4 className="text-lg font-bold">Great progress this sprint!</h4>
          <p className="text-sm opacity-80 font-medium">You've completed 15% more tasks than last week.</p>
        </div>
        <button className="bg-white text-violet-700 px-6 py-2 rounded-xl text-sm font-bold hover:bg-violet-50 transition-colors">
          View Sprint Report
        </button>
      </div>
    </div>
  );
};

export default DoneIssues;