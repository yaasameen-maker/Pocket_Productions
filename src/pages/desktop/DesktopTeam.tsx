import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SIDEBAR_NAV = [
  { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
  { label: 'Projects', icon: 'work', route: '/projects-desktop' },
  { label: 'Calendar', icon: 'calendar_month', route: '/calendar-desktop' },
  { label: 'Locations', icon: 'location_on', route: '/locations-desktop' },
  { label: 'Storyboard', icon: 'grid_view', route: '/storyboard-desktop' },
  { label: 'Team', icon: 'groups', route: '/team-desktop', active: true },
  { label: 'Assets', icon: 'database', route: '/assets' },
];

const DEPT_TABS = ['All Personnel', 'Camera', 'Grip & Electric', 'Art Dept'];

type MemberStatus = 'ON SET' | 'OFF CALL' | 'REMOTE';

interface CrewMember {
  id: number;
  name: string;
  role: string;
  department: string;
  status: MemberStatus;
  contact: string;
  avatarColor: string;
  initials: string;
}

const CREW: CrewMember[] = [
  { id: 1, name: 'Julian Thorne', role: 'Director of Photography', department: 'Camera', status: 'ON SET', contact: 'j.thorne@noir.com', avatarColor: 'bg-amber-500', initials: 'JT' },
  { id: 2, name: 'Sasha Vane', role: 'Gaffer', department: 'Grip & Electric', status: 'OFF CALL', contact: 'sasha.v@noir.com', avatarColor: 'bg-teal-500', initials: 'SV' },
  { id: 3, name: 'Marcus Flint', role: 'Lead Set Decorator', department: 'Art Dept', status: 'REMOTE', contact: 'm.flint@noir.com', avatarColor: 'bg-slate-600', initials: 'MF' },
  { id: 4, name: 'Elena Rossi', role: '1st Assistant Director', department: 'Production', status: 'ON SET', contact: 'e.rossi@noir.com', avatarColor: 'bg-rose-500', initials: 'ER' },
  { id: 5, name: 'Diego Ferreira', role: 'B-Camera Operator', department: 'Camera', status: 'ON SET', contact: 'd.ferreira@noir.com', avatarColor: 'bg-blue-500', initials: 'DF' },
  { id: 6, name: 'Petra Kim', role: 'Lighting Technician', department: 'Grip & Electric', status: 'ON SET', contact: 'p.kim@noir.com', avatarColor: 'bg-purple-500', initials: 'PK' },
  { id: 7, name: 'Oscar Webb', role: 'Prop Master', department: 'Art Dept', status: 'OFF CALL', contact: 'o.webb@noir.com', avatarColor: 'bg-green-600', initials: 'OW' },
  { id: 8, name: 'Nadia Cross', role: 'Script Supervisor', department: 'Production', status: 'ON SET', contact: 'n.cross@noir.com', avatarColor: 'bg-pink-500', initials: 'NC' },
  { id: 9, name: 'Ray Okafor', role: 'Steadicam Operator', department: 'Camera', status: 'REMOTE', contact: 'r.okafor@noir.com', avatarColor: 'bg-indigo-500', initials: 'RO' },
  { id: 10, name: 'Lily Zhang', role: 'Art Director', department: 'Art Dept', status: 'ON SET', contact: 'l.zhang@noir.com', avatarColor: 'bg-orange-500', initials: 'LZ' },
];

const STATUS_CFG: Record<MemberStatus, { label: string; dot: string; badge: string }> = {
  'ON SET': { label: 'ON SET', dot: 'bg-green-500', badge: 'text-green-400 border-green-500/30 bg-green-500/10' },
  'OFF CALL': { label: 'OFF CALL', dot: 'bg-slate-400', badge: 'text-slate-400 border-slate-400/30 bg-slate-500/10' },
  'REMOTE': { label: 'REMOTE', dot: 'bg-amber-400', badge: 'text-amber-400 border-amber-400/30 bg-amber-500/10' },
};

const STATS = [
  { label: 'Total Crew', value: '142', change: '+5%', icon: 'groups', color: 'text-primary' },
  { label: 'Active on Set', value: '84', change: '-2%', icon: 'videocam', color: 'text-green-400' },
  { label: 'Departments', value: '12', change: '0%', icon: 'account_tree', color: 'text-blue-400' },
  { label: 'Pending Invites', value: '8', change: '+1%', icon: 'mail', color: 'text-amber-400' },
];

export default function DesktopTeam() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All Personnel');
  const [page] = useState(1);

  const filtered = CREW.filter((m) => activeTab === 'All Personnel' || m.department === activeTab);

  return (
    <div className="flex h-screen overflow-hidden bg-[#0c0e12] font-display text-slate-100">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 flex flex-col bg-slate-900 border-r border-slate-800">
        <div className="p-6 flex items-center gap-3">
          <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white">
            <span className="material-symbols-outlined font-bold">movie_filter</span>
          </div>
          <div>
            <h1 className="font-black text-lg tracking-tight leading-none">Pocket</h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Productions</p>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          {SIDEBAR_NAV.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.route)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-left text-sm ${
                item.active ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.label}
            </button>
          ))}
          <button
            onClick={() => navigate('/install')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-primary font-semibold hover:bg-primary/5 border border-primary/20 transition-colors text-left text-sm"
          >
            <span className="material-symbols-outlined">download_for_offline</span>
            Install App
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 transition-colors text-left text-sm">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </button>
        </nav>
        <div className="px-4 py-6 border-t border-slate-800">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Recent Activity</p>
          <ul className="space-y-3">
            {['Revised Cast Rates', 'New Location Scout: Warehouse'].map((item) => (
              <li key={item} className="flex items-start gap-2 cursor-pointer group">
                <span className="size-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0 group-hover:bg-primary transition-colors" />
                <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4">
          <div className="mb-6 p-4 rounded-xl bg-green-500/5 border border-green-500/20">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-bold text-green-500 uppercase tracking-tighter">Production Health</p>
              <span className="size-2 bg-green-500 rounded-full animate-pulse" />
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-500 text-sm">verified</span>
              <p className="text-xs font-bold">SAG-AFTRA Compliant</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-2">Storage</p>
            <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[75%]" />
            </div>
            <p className="text-[10px] mt-2 text-slate-500">75% of 1TB used</p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="shrink-0 h-16 flex items-center justify-between px-8 bg-[#0c0e12]/80 backdrop-blur-md border-b border-slate-800 z-10">
          <div className="relative w-60">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">search</span>
            <input
              type="text"
              placeholder="Search crew members..."
              className="w-full bg-white/5 border-none rounded-lg py-2 pl-9 pr-4 text-sm text-white outline-none focus:ring-1 focus:ring-primary placeholder:text-slate-600"
            />
          </div>
          <div className="text-center">
            <p className="text-xs font-bold text-white uppercase tracking-widest">Monday, March 9, 2026</p>
            <p className="text-xs text-primary font-black">10:45 AM</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/new-project-desktop')}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
              New Project
            </button>
            <button className="relative size-9 flex items-center justify-center rounded-full bg-white/5 text-slate-400">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </button>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <p className="text-sm font-bold text-white">Alex Rivera</p>
                <p className="text-[10px] text-slate-400">Executive Producer</p>
              </div>
              <div className="size-9 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm ring-2 ring-slate-800">
                AR
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/5 p-5 bg-slate-900/50">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                  <span className={`material-symbols-outlined text-[20px] ${stat.color}`}>{stat.icon}</span>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-4xl font-black text-white">{stat.value}</p>
                  <span className={`text-xs font-bold mb-1 ${stat.change.startsWith('+') ? 'text-green-400' : stat.change.startsWith('-') ? 'text-red-400' : 'text-slate-500'}`}>
                    {stat.change}
                  </span>
                </div>
                <div className="mt-3 h-0.5 w-full bg-primary/20 rounded-full">
                  <div className="h-full bg-primary rounded-full w-2/3" />
                </div>
              </div>
            ))}
          </div>

          {/* Tabs + actions */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex border-b border-slate-800">
              {DEPT_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 text-sm font-bold border-b-2 transition-colors -mb-px ${
                    activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                <span className="material-symbols-outlined text-[16px]">filter_list</span>
                Filter
              </button>
              <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors">
                <span className="material-symbols-outlined text-[16px]">person_add</span>
                Add Personnel
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-xl border border-white/5 overflow-hidden bg-slate-900/30">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  {['Name & Role', 'Department', 'Status', 'Contact', 'Actions'].map((col, i) => (
                    <th key={col} className={`px-5 py-3.5 text-[10px] font-bold uppercase tracking-widest text-slate-500 ${i === 4 ? 'text-right' : 'text-left'}`}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((member) => {
                  const cfg = STATUS_CFG[member.status];
                  return (
                    <tr key={member.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`size-9 rounded-full ${member.avatarColor} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                            {member.initials}
                          </div>
                          <div>
                            <p className="font-bold text-white">{member.name}</p>
                            <p className="text-[11px] text-slate-500">{member.role}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-slate-300">{member.department}</td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full border ${cfg.badge}`}>
                          <span className={`size-1.5 rounded-full ${cfg.dot}`} />
                          {cfg.label}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-400 text-xs">{member.contact}</td>
                      <td className="px-5 py-4 text-right">
                        <button className="text-slate-500 hover:text-white transition-colors">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-white/5">
              <p className="text-xs text-slate-500">Showing 1-10 of 142 crew members</p>
              <div className="flex items-center gap-1">
                <button className="size-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 transition-colors">
                  <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                </button>
                {[1, 2, 3].map((p) => (
                  <button
                    key={p}
                    className={`size-8 flex items-center justify-center rounded-lg text-sm font-bold transition-colors ${
                      p === page ? 'bg-primary text-white' : 'bg-white/5 hover:bg-white/10 text-slate-400'
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button className="size-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 transition-colors">
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
