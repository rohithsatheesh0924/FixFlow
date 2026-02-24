import React, { useState } from 'react';

const ViewAllFilters = () => {
  const [activeTab, setActiveTab] = useState('Starred');

  const filters = [
    { name: 'Critical Bugs - Sprint 14', owner: 'Me', sharedWith: 'FixFlow Team', views: 124, starred: true },
    { name: 'My Pending Reviews', owner: 'Me', sharedWith: 'Private', views: 42, starred: true },
    { name: 'Backend Performance Tasks', owner: 'Marcus K.', sharedWith: 'Engineering', views: 89, starred: false },
    { name: 'Unassigned Design Stories', owner: 'Alice S.', sharedWith: 'Designers', views: 15, starred: false },
    { name: 'Resolved in Last 7 Days', owner: 'Me', sharedWith: 'FixFlow Team', views: 210, starred: false },
  ];

  const tabs = ['Starred', 'My Filters', 'All Filters', 'Popular'];

  return (
    <div className="max-w-6xl mx-auto py-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black text-violet-950 tracking-tight">Filters</h1>
          <p className="text-sm text-gray-500 font-medium mt-1">Manage your saved searches and shared team views.</p>
        </div>
        <button className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-violet-200 transition-all active:scale-95">
          Create New Filter
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center space-x-1 mb-6 border-b border-violet-100">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 text-sm font-bold transition-all relative ${
              activeTab === tab 
              ? 'text-violet-700' 
              : 'text-gray-400 hover:text-violet-400'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-violet-600 rounded-t-full shadow-[0_-2px_8px_rgba(124,58,237,0.3)]"></div>
            )}
          </button>
        ))}
      </div>

      {/* Filter Search/Utility Bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-80">
          <input 
            type="text" 
            placeholder="Search filters by name..." 
            className="w-full pl-10 pr-4 py-2 border border-violet-100 rounded-lg text-sm bg-white focus:ring-2 focus:ring-violet-400 outline-none transition-all"
          />
          <svg className="w-4 h-4 absolute left-3 top-2.5 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Filters Table */}
      <div className="bg-white rounded-2xl border border-violet-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-violet-50/50 border-b border-violet-100">
              <th className="px-6 py-4 text-[11px] font-black text-violet-400 uppercase tracking-widest w-10"></th>
              <th className="px-6 py-4 text-[11px] font-black text-violet-400 uppercase tracking-widest">Name</th>
              <th className="px-6 py-4 text-[11px] font-black text-violet-400 uppercase tracking-widest">Owner</th>
              <th className="px-6 py-4 text-[11px] font-black text-violet-400 uppercase tracking-widest">Shared With</th>
              <th className="px-6 py-4 text-[11px] font-black text-violet-400 uppercase tracking-widest">Views</th>
              <th className="px-6 py-4 text-[11px] font-black text-violet-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-violet-50">
            {filters.map((filter) => (
              <tr key={filter.name} className="hover:bg-violet-50/20 transition-colors group">
                <td className="px-6 py-4">
                  <svg 
                    className={`w-5 h-5 cursor-pointer ${filter.starred ? 'text-amber-400 fill-current' : 'text-gray-200 hover:text-violet-300'}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-gray-800 hover:text-violet-700 cursor-pointer transition-colors">
                    {filter.name}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs font-semibold text-gray-600">
                    {filter.owner === 'Me' ? (
                      <span className="bg-violet-100 text-violet-700 px-2 py-0.5 rounded text-[10px] font-black uppercase">You</span>
                    ) : (
                      filter.owner
                    )}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-1">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-xs font-medium text-gray-500">{filter.sharedWith}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs font-bold text-violet-400">{filter.views}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-violet-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllFilters;