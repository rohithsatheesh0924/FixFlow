import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewAllDashboards = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Total Dashboards', value: '24', icon: '📊', color: 'bg-violet-600' },
    { label: 'Total Views', value: '1.2k', icon: '👁️', color: 'bg-indigo-600' },
    { label: 'Starred', value: '8', icon: '⭐', color: 'bg-purple-600' },
  ];

  const dashboards = [
    { id: 1, name: 'Engineering Velocity', owner: 'Alex Rivera', type: 'System', status: 'Public', lastViewed: '2 mins ago' },
    { id: 2, name: 'Sprint Retro: Q1', owner: 'Jordan Smith', type: 'Team', status: 'Shared', lastViewed: '1 hour ago' },
    { id: 3, name: 'Executive Overview', owner: 'Sarah Chen', type: 'Custom', status: 'Private', lastViewed: 'Yesterday' },
    { id: 4, name: 'Bug Tracking Heatmap', owner: 'Alex Rivera', type: 'System', status: 'Public', lastViewed: '3 days ago' },
    { id: 5, name: 'Customer Success Metrics', owner: 'Mike Ross', type: 'Team', status: 'Shared', lastViewed: 'Feb 12, 2026' },
  ];

  return (
    <div className="max-w-6xl mx-auto pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-black text-violet-950 tracking-tight">Dashboards</h1>
          <p className="text-sm text-gray-500 font-medium mt-1">Analyze your workspace performance and health.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 text-sm font-bold text-violet-600 bg-violet-50 rounded-xl hover:bg-violet-100 transition-colors">
            Manage Gadgets
          </button>
          <button className="px-5 py-2 text-sm font-bold text-white bg-violet-600 rounded-xl shadow-lg shadow-violet-200 hover:bg-violet-700 transition-all active:scale-95">
            Create Dashboard
          </button>
        </div>
      </div>

      {/* Quick Stats Glow Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white border border-violet-100 p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-5 group-hover:opacity-10 transition-opacity ${stat.color}`}></div>
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center text-xl shadow-inner text-white`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-[10px] font-black text-violet-400 uppercase tracking-widest">{stat.label}</p>
                <p className="text-2xl font-black text-violet-950">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dashboards Table Area */}
      <div className="bg-white border border-violet-100 rounded-[2rem] overflow-hidden shadow-sm">
        <div className="px-8 py-6 border-b border-violet-50 flex justify-between items-center bg-violet-50/20">
          <h3 className="font-bold text-violet-950">All Dashboards</h3>
          <div className="flex items-center bg-white border border-violet-100 rounded-full px-4 py-1.5">
            <svg className="w-4 h-4 text-violet-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2.5" strokeLinecap="round"/></svg>
            <input type="text" placeholder="Search dashboards..." className="text-xs outline-none bg-transparent w-40 font-medium" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-violet-50/30">
                <th className="px-8 py-4 text-[10px] font-black text-violet-400 uppercase tracking-widest">Name</th>
                <th className="px-8 py-4 text-[10px] font-black text-violet-400 uppercase tracking-widest">Owner</th>
                <th className="px-8 py-4 text-[10px] font-black text-violet-400 uppercase tracking-widest">Access</th>
                <th className="px-8 py-4 text-[10px] font-black text-violet-400 uppercase tracking-widest">Last Viewed</th>
                <th className="px-8 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-violet-50">
              {dashboards.map((dash) => (
                <tr key={dash.id} className="group hover:bg-violet-50/50 transition-colors cursor-pointer">
                  <td className="px-8 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                      <span className="text-sm font-bold text-violet-950 group-hover:text-violet-600 transition-colors">{dash.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center text-[10px] font-bold text-violet-600 border border-violet-200">
                        {dash.owner.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-xs font-semibold text-gray-600">{dash.owner}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-tighter border ${
                      dash.status === 'Public' ? 'bg-green-50 border-green-100 text-green-600' : 
                      dash.status === 'Shared' ? 'bg-blue-50 border-blue-100 text-blue-600' : 
                      'bg-gray-50 border-gray-100 text-gray-400'
                    }`}>
                      {dash.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-xs font-medium text-gray-400 italic">
                    {dash.lastViewed}
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 hover:bg-white rounded-lg text-violet-300 hover:text-violet-600 shadow-sm transition-all opacity-0 group-hover:opacity-100">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" strokeWidth="2" /></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewAllDashboards;