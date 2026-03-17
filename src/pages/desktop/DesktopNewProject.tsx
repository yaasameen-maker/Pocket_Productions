import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SIDEBAR_NAV = [
  { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
  { label: 'Projects', icon: 'work', route: '/projects-desktop' },
  { label: 'Calendar', icon: 'calendar_month', route: '/calendar-desktop' },
  { label: 'Locations', icon: 'location_on', route: '/locations-desktop' },
  { label: 'Storyboard', icon: 'grid_view', route: '/storyboard-desktop' },
  { label: 'Team', icon: 'groups', route: '/team-desktop' },
  { label: 'Assets', icon: 'database', route: '/assets' },
];

const GENRES = [
  'Sci-Fi / Noir', 'Cyberpunk Thriller', 'Documentary', 'High Fantasy',
  'Corporate Production', 'Horror', 'Action / Adventure', 'Drama',
];

export default function DesktopNewProject() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState(GENRES[0]);
  const [budget, setBudget] = useState('');
  const [startDate, setStartDate] = useState('');
  const [tagline, setTagline] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/projects-desktop');
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background-dark font-display text-slate-100">
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
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 transition-colors text-left"
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
          <button
            onClick={() => navigate('/install')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-primary font-semibold hover:bg-primary/5 border border-primary/20 transition-colors text-left"
          >
            <span className="material-symbols-outlined">download_for_offline</span>
            <span className="text-sm">Install App</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 transition-colors text-left">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm">Settings</span>
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
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
        <header className="shrink-0 flex items-center justify-between px-8 py-4 bg-background-dark/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-10">
          <div className="relative w-60">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-[18px]">search</span>
            <input
              type="text"
              placeholder="Quick search..."
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-600 outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-900/40 rounded-full border border-slate-800/50">
            <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
            <span className="text-xs font-medium text-slate-400">OCT 24, 2023 — 14:30 EST</span>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all shadow-lg shadow-primary/10">
            <span className="material-symbols-outlined text-[20px]">add_circle</span>
            New Project
          </button>
        </header>

        {/* Form */}
        <div className="flex-1 p-8 max-w-4xl mx-auto w-full">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-100 mb-2">New Project</h2>
            <p className="text-slate-500 text-sm">Configure your core production parameters to generate a project environment.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Title */}
              <div className="col-span-2 space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Project Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Neon Horizon"
                  className="w-full bg-slate-900/30 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>

              {/* Genre */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Genre</label>
                <div className="relative">
                  <select
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className="w-full bg-slate-900/30 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 appearance-none focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  >
                    {GENRES.map((g) => <option key={g}>{g}</option>)}
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">expand_more</span>
                </div>
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Estimated Budget (USD)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">$</span>
                  <input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-slate-900/30 border border-slate-800 rounded-xl pl-8 pr-4 py-3 text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>

              {/* Photography Start */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Principal Photography Start</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-[20px]">calendar_today</span>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-slate-900/30 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Tagline */}
              <div className="col-span-2 space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Tagline</label>
                <textarea
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  rows={2}
                  placeholder="Enter a compelling tagline for your project..."
                  className="w-full bg-slate-900/30 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="pt-6 flex items-center justify-between border-t border-slate-800">
              <div className="flex items-center gap-3 text-slate-500">
                <span className="material-symbols-outlined text-[18px]">info</span>
                <p className="text-[11px] leading-tight max-w-[200px]">Project files and environment will be initialized upon confirmation.</p>
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="px-6 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 font-medium transition-all text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-primary/30 text-sm flex items-center gap-2 group"
                >
                  Initialize Production
                  <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">rocket_launch</span>
                </button>
              </div>
            </div>
          </form>

          {/* Environment card */}
          <div className="mt-12 p-6 rounded-2xl flex items-center gap-6" style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30 shrink-0">
              <span className="material-symbols-outlined text-primary text-[32px]">architecture</span>
            </div>
            <div>
              <h5 className="text-slate-200 font-bold">Standard Environment Active</h5>
              <p className="text-slate-500 text-sm">Automated scene breakdown and asset tracking will be enabled immediately after initialization.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
