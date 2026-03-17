import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SIDEBAR_NAV = [
  { label: 'Dashboard', icon: 'grid_view', route: '/dashboard' },
  { label: 'Projects', icon: 'folder_special', route: '/projects-desktop' },
  { label: 'Budgets', icon: 'payments', route: '/budgets' },
  { label: 'Calendar', icon: 'calendar_month', route: '/calendar-desktop' },
  { label: 'Locations', icon: 'location_on', route: '/locations-desktop' },
  { label: 'Storyboard', icon: 'movie_filter', route: '/storyboard-desktop' },
  { label: 'Team', icon: 'group', route: '/team-desktop' },
  { label: 'Assets', icon: 'layers', route: '/assets', active: true },
];

const RECENT_ACTIVITY = [
  'Revised Cast Rates',
  'New Location Scout: Warehouse',
  'AI Storyboard Gen: Scene 14',
  'Updated Crew Gantt',
];

const TABS = ['Scripts', 'Footage', 'Audio', 'Legal'];

interface Asset {
  id: number;
  name: string;
  type: 'pdf' | 'video' | 'audio' | 'doc' | 'image';
  size: string;
  updated: string;
  tags: string[];
  color: string;
}

const ASSETS: Record<string, Asset[]> = {
  Scripts: [
    { id: 1, name: 'The Long Goodbye — Final Draft v3.pdf', type: 'pdf', size: '2.4 MB', updated: 'Mar 9', tags: ['Final', 'Approved'], color: 'text-red-400' },
    { id: 2, name: 'Scene 14A Revised — Confrontation.pdf', type: 'pdf', size: '840 KB', updated: 'Mar 8', tags: ['Revision'], color: 'text-red-400' },
    { id: 3, name: 'Shooting Script Day 42.pdf', type: 'pdf', size: '1.1 MB', updated: 'Mar 9', tags: ['Day Script'], color: 'text-red-400' },
    { id: 4, name: 'Scene 15 Exterior Chase — Notes.doc', type: 'doc', size: '320 KB', updated: 'Mar 7', tags: ['Notes'], color: 'text-blue-400' },
    { id: 5, name: 'Director Notes — Week 6.pdf', type: 'pdf', size: '560 KB', updated: 'Mar 6', tags: ['Director'], color: 'text-red-400' },
    { id: 6, name: 'Production Draft 2 — Archive.pdf', type: 'pdf', size: '3.1 MB', updated: 'Feb 28', tags: ['Archive'], color: 'text-slate-400' },
    { id: 7, name: 'Breakdown Sheet — Scene 14-20.pdf', type: 'pdf', size: '710 KB', updated: 'Mar 5', tags: ['Breakdown'], color: 'text-red-400' },
    { id: 8, name: 'Continuity Log — March.doc', type: 'doc', size: '480 KB', updated: 'Mar 9', tags: ['Continuity'], color: 'text-blue-400' },
  ],
  Footage: [
    { id: 9, name: 'Day 42 A-Camera Primary.mp4', type: 'video', size: '18.4 GB', updated: 'Mar 9', tags: ['A-Cam', 'Raw'], color: 'text-purple-400' },
    { id: 10, name: 'Day 42 B-Camera Coverage.mp4', type: 'video', size: '14.2 GB', updated: 'Mar 9', tags: ['B-Cam', 'Raw'], color: 'text-purple-400' },
    { id: 11, name: 'Scene 14A — Takes 1-7.mp4', type: 'video', size: '8.6 GB', updated: 'Mar 9', tags: ['Scene 14A'], color: 'text-purple-400' },
    { id: 12, name: 'Golden Hour Ext. Chase — BTS.mp4', type: 'video', size: '2.1 GB', updated: 'Mar 8', tags: ['BTS'], color: 'text-green-400' },
  ],
  Audio: [
    { id: 13, name: 'Scene 14A Production Audio Mix.wav', type: 'audio', size: '1.2 GB', updated: 'Mar 9', tags: ['Production', 'Sync'], color: 'text-yellow-400' },
    { id: 14, name: 'Foley Pass — Interior Set.wav', type: 'audio', size: '890 MB', updated: 'Mar 8', tags: ['Foley'], color: 'text-yellow-400' },
    { id: 15, name: 'Score Temp Track v2.mp3', type: 'audio', size: '48 MB', updated: 'Mar 7', tags: ['Score', 'Temp'], color: 'text-yellow-400' },
  ],
  Legal: [
    { id: 16, name: 'SAG-AFTRA Compliance Report Q1.pdf', type: 'pdf', size: '1.8 MB', updated: 'Mar 1', tags: ['Compliance', 'SAG'], color: 'text-green-400' },
    { id: 17, name: 'Location Agreement — Warehouse.pdf', type: 'pdf', size: '420 KB', updated: 'Feb 25', tags: ['Location'], color: 'text-red-400' },
    { id: 18, name: 'Talent Contracts — Vera Lane.pdf', type: 'pdf', size: '680 KB', updated: 'Feb 20', tags: ['Talent'], color: 'text-red-400' },
  ],
};

const TYPE_ICON: Record<string, string> = {
  pdf: 'picture_as_pdf',
  video: 'videocam',
  audio: 'audio_file',
  doc: 'description',
  image: 'image',
};

export default function DesktopAssets() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Scripts');
  const [search, setSearch] = useState('');

  const assets = (ASSETS[activeTab] ?? []).filter(
    (a) => search === '' || a.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100 font-display overflow-hidden">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 flex flex-col bg-slate-900 border-r border-white/5">
        <div className="p-4 flex items-center gap-3 border-b border-white/5">
          <div className="size-10 rounded-xl bg-blue-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-xl">movie_filter</span>
          </div>
          <div>
            <p className="text-sm font-bold text-white leading-tight">Pocket</p>
            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Productions</p>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {SIDEBAR_NAV.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.route)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                item.active ? 'bg-blue-600/20 text-blue-400' : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-white/5 space-y-1">
          <button
            onClick={() => navigate('/install')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">install_mobile</span>
            Install App
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[18px]">settings</span>
            Settings
          </button>
        </div>
        <div className="p-4 border-t border-white/5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Recent Activity</p>
          <ul className="space-y-2">
            {RECENT_ACTIVITY.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-slate-400">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="px-4 pb-4">
          <div className="rounded-lg p-3 bg-white/5 border border-white/5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-green-400 mb-2">Production Health</p>
            <div className="flex items-center gap-2 text-xs text-white">
              <span className="material-symbols-outlined text-green-400 text-sm">verified</span>
              SAG-AFTRA Compliant
            </div>
          </div>
        </div>
        <div className="px-4 pb-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Storage</p>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full w-3/4" />
          </div>
          <p className="text-[10px] text-slate-500 mt-1">75% of 1TB used</p>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="shrink-0 flex items-center justify-between px-6 py-3 border-b border-white/5 bg-slate-900/50">
          <div className="relative w-72">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-[18px]">search</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search assets, scripts..."
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-slate-300 placeholder:text-slate-500 outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="text-center">
            <p className="text-xs font-bold text-white uppercase tracking-widest">Monday, March 9, 2026</p>
            <p className="text-xs text-blue-400 font-bold">10:45 AM</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors">
              <span className="material-symbols-outlined text-[16px]">upload</span>
              Upload Asset
            </button>
            <button className="size-9 flex items-center justify-center rounded-full bg-white/5 text-slate-400 relative">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </button>
            <div className="flex items-center gap-2">
              <div>
                <p className="text-sm font-bold text-white text-right">Alex Rivera</p>
                <p className="text-[10px] text-slate-400 text-right">Executive Producer</p>
              </div>
              <div className="size-9 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm">
                AR
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Page header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-xl font-black text-white">Digital Asset Management</h1>
              <p className="text-xs text-slate-400 mt-0.5">The Long Goodbye — Principal Photography</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-sm font-medium px-3 py-2 rounded-lg transition-colors">
                <span className="material-symbols-outlined text-[16px]">filter_list</span>
                Filter
              </button>
              <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-sm font-medium px-3 py-2 rounded-lg transition-colors">
                <span className="material-symbols-outlined text-[16px]">sort</span>
                Sort
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-6 border-b border-white/5">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 text-sm font-bold transition-colors border-b-2 -mb-px ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-400'
                    : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
              >
                {tab}
                <span className="ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/5 text-slate-500">
                  {ASSETS[tab]?.length ?? 0}
                </span>
              </button>
            ))}
          </div>

          {/* Asset Grid */}
          <div className="grid grid-cols-4 gap-4">
            {/* Upload card */}
            <button className="rounded-xl border-2 border-dashed border-white/10 hover:border-blue-500/50 hover:bg-blue-600/5 transition-all flex flex-col items-center justify-center gap-3 p-6 text-slate-500 hover:text-blue-400 min-h-[160px]">
              <span className="material-symbols-outlined text-4xl">cloud_upload</span>
              <span className="text-xs font-bold uppercase tracking-widest">Upload New</span>
            </button>

            {assets.map((asset) => (
              <div
                key={asset.id}
                className="rounded-xl bg-slate-900 border border-white/5 hover:border-blue-500/30 transition-all p-4 flex flex-col gap-3 cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div className={`size-10 rounded-lg bg-white/5 flex items-center justify-center ${asset.color}`}>
                    <span className="material-symbols-outlined text-xl">{TYPE_ICON[asset.type]}</span>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-500 hover:text-white">
                    <span className="material-symbols-outlined text-[18px]">more_horiz</span>
                  </button>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white leading-snug line-clamp-2">{asset.name}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-500">{asset.size}</span>
                  <span className="text-[10px] text-slate-500">{asset.updated}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {asset.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
