import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SIDEBAR_NAV = [
  { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
  { label: 'Projects', icon: 'work', route: '/projects-desktop', active: true },
  { label: 'Calendar', icon: 'calendar_month', route: '/calendar-desktop' },
  { label: 'Locations', icon: 'location_on', route: '/locations-desktop' },
  { label: 'Storyboard', icon: 'grid_view', route: '/storyboard-desktop' },
  { label: 'Team', icon: 'groups', route: '/team-desktop' },
  { label: 'Assets', icon: 'database', route: '/assets' },
];

const TABS = ['ALL PROJECTS', 'IN PRODUCTION', 'POST-PRODUCTION'];

interface Project {
  id: number;
  title: string;
  subtitle: string;
  status: 'Filming' | 'Pre-Production' | 'Post-Production';
  budgetProgress: number;
  stats: { label: string; value: string }[];
  avatarCount: number;
  imgSrc: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Project Shadow',
    subtitle: 'Noir Thriller • London, UK',
    status: 'Filming',
    budgetProgress: 68,
    stats: [
      { label: 'Budget', value: '$2.4M' },
      { label: 'Days Left', value: '42' },
      { label: 'Cast', value: '12/15' },
    ],
    avatarCount: 8,
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLETslIInv1r77HGSxHHBbT3TOTUsB8_k9QYk4vrad3nEYN_2-fxZykKAb4ccZ8uFtC4--egoC1z5XscNkdcSYl8CfzgVVCcOIleYUne1Nz9DldEkc2sLRh2yCwmoUcwmry7XnyHaE5qR5fNE_rbvfV-5txCCB_CdCjPDtslHT0f-_sFI7n116gfkvF393BxurGvmosqjgvsJEh6iG4ORtZqm-dQEIdkuGPeFm1Zg8afW7QILB1yp-Zhc1OjCZzigOwO2q5ZC-I3o',
  },
  {
    id: 2,
    title: 'Neon Nights',
    subtitle: 'Sci-Fi Drama • Tokyo, Japan',
    status: 'Pre-Production',
    budgetProgress: 15,
    stats: [
      { label: 'Budget', value: '$1.2M' },
      { label: 'Pre-Vis', value: '80%' },
      { label: 'Locations', value: '4/6' },
    ],
    avatarCount: 3,
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3XEwx7Jm_I4x4XN3q83LowZcwyTgpGX4JoMgkhR52Il_3M46VAEc7KD7qSAXUtUOIoZINf-e5v09gZYBNTzwmBRK9aavppa5sxirp2XsqadBZpfZ0tqZu-mtem77uV0nWiCehKJLIMUrXkqwEJIz2AIhaP_cs66xsOiiu1Ry6sVwczcq45qhqn2caSI66024u2np1l74NaZzVbUmcRfkdQS2BYW_wlvxJLnhkcPGFMfqrK0WXt9s7MKbrk6wv4qfIFo2ArK1Xd2I',
  },
  {
    id: 3,
    title: 'The Silent City',
    subtitle: 'Mystery • Chicago, USA',
    status: 'Post-Production',
    budgetProgress: 92,
    stats: [
      { label: 'Budget', value: '$500K' },
      { label: 'Edit', value: '95%' },
      { label: 'VFX Shots', value: '142' },
    ],
    avatarCount: 5,
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBksNlmETGwkWuAEEa0MTp2akFGOKKtxEvPLpXkikT94eO9Vzqf0Yq0-dClVMuQekp5pbttvx1JQXXKPkJPxcg8DFfU7nA_y8I3EYgTnFJiHn_A5pXcPWf7hCXs0nABt3xKygk0fz_cniWFkAsivYsulI0fPHHPnY7XVj4nqO-BZOB__aJiC5PRi_tsTwhRv76xLT8qiEItfzfUxqDGQf-G4hdpPhe28QIjLOaCGRxZIQemBcuPbzhnoweUlNROo33LU4ks_AyW8j4',
  },
  {
    id: 4,
    title: 'Void Runner',
    subtitle: 'Horror • Iceland',
    status: 'Filming',
    budgetProgress: 45,
    stats: [
      { label: 'Budget', value: '$3.8M' },
      { label: 'SFX', value: 'Planned' },
      { label: 'Unit', value: 'B-Team' },
    ],
    avatarCount: 12,
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw5OIDt-uxGhNJlOcqHTfKEuEmWCiLPle-pW2rMDVcGS2uPrP2NfiCC8IdiF_F2L-4RAA00-8hwgUPk0gvT9rIkIhSTC1exKW4ybl1puBIn1SRMcildPRS-eAMslR4_GCoH3wF1C7Yl5huTMKFz-V7cn0SG5XoQyDU5pjQEpPp64ZUVSfqzEl5m4AHa6BaU-hUpmhZKDJ_VlxhpJmHR9AUVG_PgROuauf_GVctvxiXves5UScehxAtkIEE8BlR8Rpio2bwbPT7Xq4',
  },
];

const STATUS_BADGE: Record<string, string> = {
  Filming: 'bg-primary text-white',
  'Pre-Production': 'bg-slate-500 text-white',
  'Post-Production': 'bg-orange-400 text-white',
};

export default function DesktopProjects() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ALL PROJECTS');

  const filtered = PROJECTS.filter((p) => {
    if (activeTab === 'ALL PROJECTS') return true;
    if (activeTab === 'IN PRODUCTION') return p.status === 'Filming';
    if (activeTab === 'POST-PRODUCTION') return p.status === 'Post-Production';
    return true;
  });

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
            {['VFX Pass Complete', 'New Script Draft'].map((item) => (
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
          <div className="flex-1">
            <div className="relative w-48">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">search</span>
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-white/5 border-none rounded-lg py-1.5 pl-9 pr-4 text-xs text-white outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
          <div className="flex-1 text-center">
            <p className="text-xs font-medium text-white/40 tracking-widest uppercase">Oct 24, 2023 — 10:30 AM</p>
          </div>
          <div className="flex items-center justify-end gap-4 flex-1">
            <button
              onClick={() => navigate('/new-project-desktop')}
              className="text-xs font-bold bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              NEW PROJECT
            </button>
            <div className="size-8 rounded-full border border-white/10 overflow-hidden cursor-pointer bg-amber-500 flex items-center justify-center text-white font-bold text-sm">
              AR
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="flex flex-col gap-6">
            {/* Title + tabs */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-white uppercase">Active Projects</h2>
                <p className="text-slate-400">Manage and monitor your ongoing film productions</p>
              </div>
              <div className="flex border-b border-primary/20">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-xs font-bold tracking-wider border-b-2 transition-colors ${
                      activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-white/40 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Project grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <div
                  key={project.id}
                  className="border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all group cursor-pointer"
                  style={{ background: 'rgba(30,41,59,0.5)' }}
                >
                  <div className="h-48 relative">
                    <img
                      src={project.imgSrc}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${STATUS_BADGE[project.status]}`}>
                      {project.status}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col gap-4">
                    <div>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p className="text-xs text-slate-500 mt-1 uppercase tracking-tighter">{project.subtitle}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between text-xs font-semibold">
                        <span>Budget Progress</span>
                        <span className="text-primary">{project.budgetProgress}%</span>
                      </div>
                      <div className="w-full bg-primary/20 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-primary h-full shadow-[0_0_10px_rgba(37,123,244,0.5)]"
                          style={{ width: `${project.budgetProgress}%` }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-primary/5">
                      {project.stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col">
                          <span className="text-[10px] text-slate-500 uppercase">{stat.label}</span>
                          <span className="text-sm font-bold">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: Math.min(3, project.avatarCount) }).map((_, i) => (
                        <div key={i} className="size-7 rounded-full border-2 border-[#0c0e12] bg-slate-600 -ml-1 first:ml-0" />
                      ))}
                      {project.avatarCount > 3 && (
                        <div className="size-7 rounded-full bg-primary/20 text-primary text-[8px] flex items-center justify-center font-bold border-2 border-[#0c0e12] -ml-1">
                          +{project.avatarCount}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
