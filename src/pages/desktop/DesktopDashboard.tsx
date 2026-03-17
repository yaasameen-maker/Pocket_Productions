import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SIDEBAR_NAV = [
  { label: 'Dashboard', icon: 'grid_view', active: true, route: '/dashboard' },
  { label: 'Projects', icon: 'folder_special', route: '/projects' },
  { label: 'Calendar', icon: 'calendar_month', route: '/calendar-desktop' },
  { label: 'Locations', icon: 'location_on', route: '/locations-desktop' },
  { label: 'Storyboard', icon: 'movie_filter', route: '/storyboard' },
  { label: 'Team', icon: 'group', route: '/crew' },
  { label: 'Assets', icon: 'layers', route: '/assets' },
];

const BUDGET_CARDS = [
  { label: 'Total Budget', value: '$12.5M', color: 'text-white' },
  { label: 'Spent to Date', value: '$8.2M', color: 'text-blue-400' },
  { label: 'Remaining', value: '$4.3M', color: 'text-green-400' },
  { label: 'Contingency', value: '$1.2M', color: 'text-primary' },
];

const DAILY_BUDGET = [
  { label: 'Cast', value: '$12,000', icon: 'person', barColor: 'bg-yellow-400', barW: 'w-3/4' },
  { label: 'Crew', value: '$8,500', icon: 'group', barColor: 'bg-blue-400', barW: 'w-1/2' },
  { label: 'Locations', value: '$2,500', icon: 'location_on', barColor: 'bg-green-400', barW: 'w-1/4' },
  { label: 'Misc/Food', value: '$1,500', icon: 'restaurant', barColor: 'bg-purple-400', barW: 'w-1/6' },
];

const RECENT_ACTIVITY = [
  'Revised Cast Rates',
  'New Location Scout: Warehouse',
  'AI Storyboard Gen: Scene 14',
  'Updated Crew Gantt',
];

const GANTT_ROWS = [
  {
    role: 'Director/Script',
    icon: 'description',
    color: 'bg-purple-500',
    events: [
      { label: 'Scene 14A: The Confrontation', start: 16, width: 120 },
      { label: 'Scene 15: Exterior Chase', start: 400, width: 130 },
    ],
  },
  {
    role: 'Cinematography',
    icon: 'videocam',
    color: 'bg-blue-500',
    events: [
      { label: 'Light Rig Setup', start: 10, width: 80 },
      { label: 'Steadycam: Master', start: 130, width: 90 },
      { label: 'Golden Hour Shots', start: 390, width: 110 },
    ],
  },
  {
    role: 'Actors/Cast',
    icon: 'person',
    color: 'bg-yellow-500',
    events: [
      { label: 'Vera Lane (In-Set)', start: 16, width: 160 },
      { label: 'Marcus Cole (Call)', start: 380, width: 100 },
    ],
    lunchBreak: true,
  },
];

export default function DesktopDashboard() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('Dashboard');

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100 font-display overflow-hidden">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 flex flex-col bg-slate-900 border-r border-white/5">
        {/* Logo */}
        <div className="p-4 flex items-center gap-3 border-b border-white/5">
          <div className="size-10 rounded-xl bg-blue-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-xl">movie_filter</span>
          </div>
          <div>
            <p className="text-sm font-bold text-white leading-tight">Pocket</p>
            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Productions</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1">
          {SIDEBAR_NAV.map((item) => (
            <button
              key={item.label}
              onClick={() => { setActiveNav(item.label); navigate(item.route); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeNav === item.label
                  ? 'bg-blue-600/20 text-blue-400'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Install App */}
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

        {/* Recent Activity */}
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

        {/* Production Health */}
        <div className="px-4 pb-4">
          <div className="rounded-lg p-3 bg-white/5 border border-white/5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-green-400 mb-2">Production Health</p>
            <div className="flex items-center gap-2 text-xs text-white">
              <span className="material-symbols-outlined text-green-400 text-sm">verified</span>
              SAG-AFTRA Compliant
            </div>
          </div>
        </div>

        {/* Storage */}
        <div className="px-4 pb-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Storage</p>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full w-3/4" />
          </div>
          <p className="text-[10px] text-slate-500 mt-1">75% of 1TB used</p>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="shrink-0 flex items-center justify-between px-6 py-3 border-b border-white/5 bg-slate-900/50">
          <div className="relative w-72">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-[18px]">search</span>
            <input
              type="text"
              placeholder="Search productions, scripts..."
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-slate-300 placeholder:text-slate-500 outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="text-center">
            <p className="text-xs font-bold text-white uppercase tracking-widest">Monday, March 9, 2026</p>
            <p className="text-xs text-blue-400 font-bold">10:45 AM</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors">
              <span className="material-symbols-outlined text-[16px]">add</span>
              New Project
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

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Budget overview */}
          <div className="grid grid-cols-4 gap-4">
            {BUDGET_CARDS.map((card) => (
              <div key={card.label} className="rounded-xl p-4 bg-slate-900 border border-white/5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                  {card.label}
                </p>
                <p className={`text-2xl font-black ${card.color}`}>{card.value}</p>
              </div>
            ))}
          </div>

          {/* Daily Budget Summary */}
          <div className="rounded-xl bg-slate-900 border border-white/5 p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-400">summarize</span>
                <h2 className="text-sm font-bold text-white">Daily Budget Summary</h2>
                <span className="text-xs text-slate-500 ml-2">March 9, 2026</span>
              </div>
              <p className="text-sm font-bold text-blue-400">
                $24,500 <span className="text-[10px] text-slate-400 font-medium uppercase">Estimated Today</span>
              </p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {DAILY_BUDGET.map((item) => (
                <div key={item.label} className="rounded-lg p-4 bg-slate-800 border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.label}</p>
                    <span className={`material-symbols-outlined text-[16px] ${item.barColor.replace('bg-', 'text-')}`}>{item.icon}</span>
                  </div>
                  <p className="text-lg font-black text-white mb-2">{item.value}</p>
                  <div className="h-1 w-full bg-slate-700 rounded-full">
                    <div className={`${item.barColor} h-full rounded-full ${item.barW}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Productions */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-lg font-bold text-white">Active Productions</h2>
                <p className="text-xs text-slate-400">You have 4 projects currently in production.</p>
              </div>
              <button className="text-blue-400 text-sm font-medium hover:text-blue-300">
                View all schedule →
              </button>
            </div>
            <div className="rounded-xl overflow-hidden relative h-52">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7U1Gh4-kKaYostL_eEorsf99I_MqQ1acbIdsxccR9fO4r5oOUjw0z_8weTOkmmfRTt2CtAX4reSaK82QlAv3ZNbB2JDgjjcCaP6QQFKycjF_bME75dRJEEfFEZppwYR0Cq3pAx1-zKjmYu7pqIWjfEISAZ5S-dpRZRATrs5bo2yJqvi2rHzbI6WhTCKqOzkJ448p42yoso_Br-bvOqmgNEpOZ1qmOWnaX64qYsQSvBkFszpb2iTevdiyZNEgGkBIrLym0HTMnleEu"
                alt="The Long Goodbye"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 max-w-lg">
                <span className="text-[10px] font-bold text-blue-300 bg-blue-500/20 border border-blue-500/30 px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">
                  Feature Film • Filming
                </span>
                <h3 className="text-3xl font-black text-white leading-none mb-2">The Long Goodbye</h3>
                <p className="text-sm text-slate-300 mb-4">
                  Day 42 of 60. Principal photography ongoing in Los Angeles. Script revisions for Scene 142 approved by Director.
                </p>
                <div className="flex gap-3">
                  <button className="bg-white text-slate-900 font-bold text-sm px-5 py-2 rounded-lg hover:bg-slate-100 transition-colors">
                    Go to Set
                  </button>
                  <button className="bg-white/10 text-white font-bold text-sm px-5 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
                    Daily Logs
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Gantt */}
          <div className="rounded-xl bg-slate-900 border border-white/5 p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-white">Daily Production</h2>
                <span className="text-xs text-slate-500">March 9, 2026</span>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase">
                {[
                  { label: 'Script', color: 'bg-purple-500' },
                  { label: 'Camera', color: 'bg-blue-500' },
                  { label: 'Talent', color: 'bg-yellow-500' },
                  { label: 'Ops', color: 'bg-green-500' },
                ].map((t) => (
                  <div key={t.label} className="flex items-center gap-1 text-slate-400">
                    <span className={`w-2 h-2 rounded-full ${t.color}`} />
                    {t.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline header */}
            <div className="flex text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2 pl-36">
              {['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'].map((t) => (
                <div key={t} className="flex-1 text-center">{t}</div>
              ))}
            </div>

            {/* Gantt rows */}
            <div className="space-y-2">
              {GANTT_ROWS.map((row) => (
                <div key={row.role} className="flex items-center gap-2">
                  <div className="w-32 shrink-0 flex items-center gap-2 text-xs font-medium text-slate-400">
                    <span className={`material-symbols-outlined text-[14px] ${row.color.replace('bg-', 'text-')}`}>{row.icon}</span>
                    <span className="truncate">{row.role}</span>
                  </div>
                  <div className="flex-1 relative h-8 bg-slate-800 rounded overflow-hidden">
                    {row.events.map((ev, i) => (
                      <div
                        key={i}
                        className={`absolute top-0.5 bottom-0.5 ${row.color}/80 rounded flex items-center px-2`}
                        style={{ left: ev.start, width: ev.width }}
                      >
                        <span className="text-[10px] font-bold text-white truncate">{ev.label}</span>
                      </div>
                    ))}
                    {row.lunchBreak && (
                      <div
                        className="absolute top-0 bottom-0 bg-red-900/40 border-l border-r border-red-700/40 flex items-center justify-center"
                        style={{ left: 280, width: 28 }}
                      >
                        <span className="text-[7px] font-bold text-red-400 rotate-90 whitespace-nowrap">LUNCH</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
