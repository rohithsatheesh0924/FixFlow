import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewAllTeams = () => {
  const navigate = useNavigate();

  const teams = [
    { 
      name: 'Core Engineering', 
      handle: '@eng-core', 
      members: ['JD', 'AS', 'MK', 'BT', 'RL'], 
      totalMembers: 14,
      dept: 'Technology',
      activeProjects: 4,
      velocity: 'High',
      gradient: 'from-violet-600 to-indigo-600'
    },
    { 
      name: 'Product Design', 
      handle: '@design-system', 
      members: ['JD', 'MK', 'BT'], 
      totalMembers: 6,
      dept: 'Creative',
      activeProjects: 2,
      velocity: 'Stable',
      gradient: 'from-fuchsia-500 to-violet-600'
    },
    { 
      name: 'Global Marketing', 
      handle: '@growth-mktg', 
      members: ['AS', 'RL', 'BT', 'MK'], 
      totalMembers: 22,
      dept: 'Marketing',
      activeProjects: 5,
      velocity: 'High',
      gradient: 'from-indigo-600 to-blue-700'
    }
  ];

  // Function to handle navigation to the Create Team page
  const handleCreateTeamClick = () => {
    navigate('/teams/create'); // This must match the path in your App.jsx
  };

  return (
    <div className="max-w-6xl mx-auto py-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
        <div>
          <nav className="flex text-[10px] font-black text-violet-400 uppercase tracking-[0.2em] mb-2">
            <span>Directory</span>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-violet-600">All Teams</span>
          </nav>
          <h1 className="text-4xl font-black text-violet-950 tracking-tight">Teams</h1>
          <p className="text-sm text-gray-500 font-medium mt-1">Manage cross-functional groups and collective workspaces.</p>
        </div>
        
        {/* CORRECTED: Create Team Button with Routing */}
        <button 
          onClick={handleCreateTeamClick}
          className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-2xl text-sm font-bold shadow-xl shadow-violet-200 transition-all active:scale-95 flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
          </svg>
          Create Team
        </button>
      </div>

      {/* Modern Filter Bar */}
      <div className="flex flex-wrap items-center gap-4 mb-10">
        <div className="relative flex-1 min-w-[300px]">
          <input 
            type="text" 
            placeholder="Search by team name or handle..." 
            className="w-full pl-12 pr-4 py-3.5 border border-violet-100 rounded-2xl text-sm bg-white focus:ring-4 focus:ring-violet-500/10 outline-none transition-all shadow-sm"
          />
          <svg className="w-5 h-5 absolute left-4 top-3.5 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="flex space-x-2">
            <button className="px-5 py-3 bg-white border border-violet-100 rounded-2xl text-xs font-bold text-gray-600 hover:border-violet-400 transition-colors">
                Sort: Alphabetical
            </button>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {teams.map((team) => (
          <div 
            key={team.handle}
            onClick={() => navigate(`/teams/${team.handle.replace('@', '')}`)}
            className="group relative bg-white border border-violet-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col sm:flex-row items-center sm:items-start"
          >
            {/* Visual Brand Icon */}
            <div className={`w-24 h-24 shrink-0 rounded-[2rem] bg-gradient-to-br ${team.gradient} flex items-center justify-center text-white text-4xl font-black shadow-2xl shadow-violet-200 transform group-hover:rotate-3 transition-transform`}>
              {team.name[0]}
            </div>

            {/* Team Content */}
            <div className="sm:ml-8 flex-1 w-full mt-6 sm:mt-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-black text-violet-950 group-hover:text-violet-600 transition-colors tracking-tight">
                    {team.name}
                  </h3>
                  <p className="text-xs font-bold text-violet-400 uppercase tracking-widest">{team.handle}</p>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[9px] font-black px-2 py-1 bg-violet-50 text-violet-600 rounded-lg border border-violet-100 uppercase tracking-tighter mb-1">
                        {team.dept}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-500 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                        {team.velocity} Velocity
                    </span>
                </div>
              </div>

              {/* Members Section */}
              <div className="mt-8 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Key Contributors</p>
                  <div className="flex -space-x-3">
                    {team.members.map((initial, i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-violet-900 border-4 border-white flex items-center justify-center text-white text-[10px] font-black shadow-sm">
                        {initial}
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full bg-violet-50 border-4 border-white flex items-center justify-center text-violet-600 text-[10px] font-black shadow-sm">
                      +{team.totalMembers - team.members.length}
                    </div>
                  </div>
                </div>

                <div className="text-right pb-1">
                  <p className="text-2xl font-black text-violet-950">{team.activeProjects}</p>
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Projects</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllTeams;