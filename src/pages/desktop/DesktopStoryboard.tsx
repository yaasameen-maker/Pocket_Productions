import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SIDEBAR_NAV = [
  { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
  { label: 'Projects', icon: 'movie_filter', route: '/projects-desktop' },
  { label: 'Calendar', icon: 'calendar_today', route: '/calendar-desktop' },
  { label: 'Locations', icon: 'location_on', route: '/locations-desktop' },
  { label: 'Storyboard', icon: 'auto_stories', route: '/storyboard-desktop', active: true },
  { label: 'Team', icon: 'groups', route: '/team-desktop' },
  { label: 'Assets', icon: 'category', route: '/assets' },
];

interface Frame {
  id: number;
  label: string;
  hasContent: boolean;
  imgSrc?: string;
  description?: string;
  camera?: string;
  shotSize?: string;
  shotType?: string;
  cameraMovement?: string;
  equipment?: string;
  lens?: string;
  lighting?: string;
  frameRate?: string;
  vfx?: string;
}

const FRAMES: Frame[] = [
  {
    id: 1,
    label: 'FRAME 1',
    hasContent: true,
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkWkj6QvsZBfNvakSTjlrzaPjFO7vA2h3iWbrkf77GCmNftHkliJVc9stGU5zmClw6i8Ehnj6fLFb_4FiOfejX5IO8wSIxY2sBkd5RR5M0OnYTrAz86wsbNScPJvPfXzRnbwlbefUhJp8UXvjukQv0BNPtzBkJAWOiUgp2UncGUZziPPe8MzpjftKwQrlH1tO7JevvFQeVhixY_j8IElhfdswdEgsxHhbdyi5TTtQZi2Rj9VUUdVrFnjfQYscoiUsdgLBZ4iIWAvMb',
    description: 'A young, attractive blue-eyed woman with a calm and',
    camera: 'Cam 1',
    shotSize: 'WCU',
    shotType: 'SL',
    cameraMovement: 'Static',
    equipment: 'Steadicam / Straight',
    lens: 'Wide-Angle',
    lighting: 'Natural',
    frameRate: '48 fps',
    vfx: '—',
  },
  {
    id: 2,
    label: 'FRAME 2',
    hasContent: false,
    description: '',
    camera: '',
    shotSize: '',
    shotType: '',
    cameraMovement: '',
    equipment: '',
    lens: '',
    lighting: '',
    frameRate: '60 fps',
    vfx: '',
  },
  {
    id: 3,
    label: 'FRAME 3',
    hasContent: false,
  },
];

const SCRIPT_TEXT = `EXT. BACK ALLEY - NIGHT

Heavy rain falls, reflecting the flickering blue and pink neon from the street above.

JACK (40s, weary) stands in the shadows. He strikes a match. The flame illuminates his grizzled face for a brief second before he pulls a drag.

The smoke mingles with the steam rising from a nearby vent.`;

const COLOR_PALETTE = ['#0a192f', '#ff2d55', '#1a1a1a', '#008080', '#ffbf00'];

export default function DesktopStoryboard() {
  const navigate = useNavigate();
  const [script, setScript] = useState(SCRIPT_TEXT);
  const [activeMode, setActiveMode] = useState<'ai' | 'upload' | 'blank'>('ai');

  return (
    <div className="flex h-screen overflow-hidden bg-[#0c0e12] font-display text-slate-100">
      {/* Header */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="shrink-0 h-16 flex items-center justify-between px-8 bg-[#0c0e12]/80 backdrop-blur-md border-b border-slate-800 z-10">
          <div className="flex items-center flex-1 max-w-[240px]">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full bg-slate-800 border-none rounded-xl py-2 pl-11 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div className="flex items-center flex-1 justify-center gap-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Monday, March 9, 2026</p>
            <p className="text-sm font-black text-primary">10:45 AM</p>
          </div>
          <div className="flex items-center gap-4 flex-1 justify-end">
            <button
              onClick={() => navigate('/new-project-desktop')}
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">add</span>
              New Project
            </button>
            <button className="relative p-2 text-slate-500 hover:bg-slate-800 rounded-lg transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-[#0c0e12]" />
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold leading-none">Alex Rivera</p>
                <p className="text-[10px] text-slate-500 font-medium">Executive Producer</p>
              </div>
              <div className="size-9 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold ring-2 ring-slate-800 text-sm">
                AR
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
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
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 transition-colors text-left text-sm"
              >
                <span className="material-symbols-outlined">download</span>
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
                {['Revised Storyboard: Scene 1', 'AI Render Complete: Shot #4'].map((item) => (
                  <li key={item} className="flex items-start gap-2 cursor-pointer group">
                    <span className="size-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0 group-hover:bg-primary transition-colors" />
                    <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors line-clamp-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4">
              <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[10px] font-bold text-green-500 uppercase tracking-tighter">Production Health</p>
                  <span className="size-2 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-sm">verified</span>
                  <p className="text-xs font-bold">SAG-AFTRA Compliant</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Workspace */}
          <div className="flex flex-1 flex-col overflow-hidden bg-[#0c0e12]">
            {/* Project header */}
            <div className="shrink-0 flex flex-wrap items-center justify-between gap-4 p-6 border-b border-primary/10 bg-transparent">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Project: Nightfall</span>
                <h1 className="text-2xl font-black leading-tight">Scene 1: The Rain-Slicked Alley</h1>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 h-10 rounded-xl border border-primary/20 text-slate-300 text-sm font-bold hover:bg-primary/5 transition-all">
                  <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
                  Export PDF
                </button>
                <button className="flex items-center gap-2 px-6 h-10 rounded-xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 hover:scale-[1.02] transition-all">
                  <span className="material-symbols-outlined text-lg">bolt</span>
                  Generate Shots
                </button>
              </div>
            </div>

            {/* Editor + Shot grid */}
            <div className="flex flex-1 overflow-hidden">
              {/* Script panel */}
              <section className="w-[380px] shrink-0 border-r border-primary/10 flex flex-col p-6 overflow-y-auto" style={{ background: 'rgba(30,41,59,0.3)', backdropFilter: 'blur(12px)' }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">description</span>
                    Script Editor
                  </h3>
                  <div className="flex gap-1">
                    <button className="p-1 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-base">undo</span></button>
                    <button className="p-1 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-base">redo</span></button>
                  </div>
                </div>

                {/* Script textarea */}
                <div className="flex flex-col flex-1 min-h-[280px] rounded-xl border border-primary/20 bg-[#0c0e12] p-4 shadow-sm mb-4">
                  <textarea
                    value={script}
                    onChange={(e) => setScript(e.target.value)}
                    className="w-full flex-1 resize-none border-none outline-none bg-transparent text-slate-100 text-sm font-normal leading-relaxed placeholder:text-slate-700"
                    placeholder="Enter script scene description here..."
                  />
                  <div className="flex items-center justify-between pt-4 border-t border-primary/5">
                    <div className="flex items-center gap-2">
                      {['mic', 'attachment', 'palette'].map((icon) => (
                        <button key={icon} className="p-2 rounded-lg hover:bg-primary/10 text-slate-400 hover:text-primary transition-all">
                          <span className="material-symbols-outlined">{icon}</span>
                        </button>
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-primary/40 uppercase">AI Ready</span>
                  </div>
                </div>

                {/* Scene analysis */}
                <div className="p-4 rounded-xl border border-primary/10">
                  <h4 className="text-xs font-bold text-primary mb-2 uppercase">Scene Analysis</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Lighting</span>
                      <span className="text-slate-200 font-medium">Low Key / Chiaroscuro</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Tone</span>
                      <span className="text-slate-200 font-medium">Melancholic, Suspense</span>
                    </div>
                  </div>
                  <h4 className="text-[10px] font-bold text-slate-500 mb-2 uppercase tracking-wider">Color Palette</h4>
                  <div className="flex items-center gap-2">
                    {COLOR_PALETTE.map((color) => (
                      <div key={color} className="size-5 rounded-full border border-white/10 shadow-sm" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
              </section>

              {/* Shot cards panel */}
              <section className="flex-1 p-6 overflow-y-auto bg-white dark:bg-[#0c0e12]">
                {/* Mode tabs */}
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-primary/10">
                  {[
                    { key: 'upload', label: 'Upload Storyboard', icon: 'upload_file' },
                    { key: 'ai', label: 'AI StoryBoarder', icon: 'auto_awesome' },
                    { key: 'blank', label: 'Blank Story Board', icon: 'note_add' },
                  ].map((btn) => (
                    <button
                      key={btn.key}
                      onClick={() => setActiveMode(btn.key as typeof activeMode)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        activeMode === btn.key
                          ? 'bg-primary text-white shadow-lg shadow-primary/25'
                          : 'border border-primary/20 text-slate-300 hover:bg-primary/5'
                      }`}
                    >
                      <span className="material-symbols-outlined text-lg">{btn.icon}</span>
                      {btn.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Generated Storyboard</p>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">4 SHOTS</span>
                  <div className="ml-auto">
                    <button className="flex items-center gap-1.5 text-xs font-bold text-slate-400 border border-white/10 px-3 py-1.5 rounded-lg hover:bg-white/5">
                      Grid View
                      <span className="material-symbols-outlined text-[14px]">expand_more</span>
                    </button>
                  </div>
                </div>

                {/* Frame cards */}
                <div className="grid grid-cols-3 gap-4">
                  {FRAMES.map((frame) => (
                    <div
                      key={frame.id}
                      className="rounded-xl border border-white/10 overflow-hidden"
                      style={{ background: 'rgba(15,20,30,0.8)' }}
                    >
                      <div className="p-3 bg-slate-800/50">
                        <p className="text-[10px] font-black text-white uppercase tracking-widest">{frame.label}</p>
                      </div>
                      {frame.hasContent ? (
                        <>
                          <div className="h-32 overflow-hidden">
                            <img src={frame.imgSrc} alt={frame.label} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-3 space-y-2 text-[10px]">
                            <p className="text-slate-300 text-xs">{frame.description}</p>
                            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                              {[
                                { label: 'CAMERA', value: frame.camera },
                                { label: 'SHOT SIZE', value: frame.shotSize },
                                { label: 'SHOT TYPE', value: frame.shotType },
                                { label: 'CAMERA MOVEMENT', value: frame.cameraMovement },
                                { label: 'EQUIPMENT', value: frame.equipment },
                                { label: 'LIGHTING', value: frame.lighting },
                                { label: 'FRAME RATE', value: frame.frameRate },
                                { label: 'VFX', value: frame.vfx },
                              ].map(({ label, value }) => (
                                <div key={label}>
                                  <p className="text-[9px] text-slate-600 uppercase tracking-widest">{label}</p>
                                  <p className="font-bold text-slate-200">{value}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="p-3 space-y-2 text-[10px] opacity-40">
                          <p className="text-slate-500 text-xs italic">Enter description</p>
                          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                            {['CAMERA', 'SHOT SIZE', 'SHOT TYPE', 'CAMERA MOVEMENT', 'EQUIPMENT', 'LIGHTING', 'FRAME RATE', 'VFX'].map((label) => (
                              <div key={label}>
                                <p className="text-[9px] text-slate-600 uppercase tracking-widest">{label}</p>
                                <p className="font-bold text-slate-500">{label.charAt(0) + label.slice(1).toLowerCase().replace('_', ' ')}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Add manual shot */}
                  <button className="rounded-xl border-2 border-dashed border-white/10 hover:border-primary/40 flex flex-col items-center justify-center gap-2 p-6 text-slate-500 hover:text-primary transition-all min-h-[200px]">
                    <span className="material-symbols-outlined text-4xl">add_circle</span>
                    <span className="text-xs font-bold uppercase tracking-widest">Add Manual Shot</span>
                  </button>
                </div>
              </section>
            </div>

            {/* Footer bar */}
            <footer className="shrink-0 border-t border-primary/10 px-6 py-2 flex items-center justify-between bg-[#0c0e12]">
              <div className="flex items-center gap-2 text-[10px] text-primary/60 font-bold uppercase">
                <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
                Cloud Synced
                <span className="text-slate-600 ml-2">V2.4.0-Noir</span>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold">
                <span className="text-slate-500 uppercase tracking-widest">Render Engine: Diffusion V4</span>
                <span className="bg-primary text-white px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest">Pro Plan</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
