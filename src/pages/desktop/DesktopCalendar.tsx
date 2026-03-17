import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SIDEBAR_NAV = [
  { label: 'Dashboard', icon: 'grid_view', route: '/dashboard' },
  { label: 'Projects', icon: 'folder_special', route: '/projects-desktop' },
  { label: 'Budgets', icon: 'payments', route: '/budgets' },
  { label: 'Calendar', icon: 'calendar_month', route: '/calendar-desktop', active: true },
  { label: 'Locations', icon: 'location_on', route: '/locations-desktop' },
  { label: 'Storyboard', icon: 'movie_filter', route: '/storyboard-desktop' },
  { label: 'Team', icon: 'group', route: '/team-desktop' },
  { label: 'Assets', icon: 'layers', route: '/assets' },
];

const RECENT_ACTIVITY = [
  'Revised Cast Rates',
  'New Location Scout: Warehouse',
  'AI Storyboard Gen: Scene 14',
  'Updated Crew Gantt',
];

// October 2024: starts on Tuesday (index 2)
const MONTH_START_DOW = 2; // 0=Sun
const DAYS_IN_MONTH = 31;
const MONTH_NAME = 'October 2024';

// Production spans: [startDay, endDay, label, color]
const SPANS = [
  { start: 1, end: 8, label: 'Pre-production', color: 'bg-blue-600/30 text-blue-300 border-blue-500/30' },
  { start: 9, end: 25, label: 'Filming', color: 'bg-purple-600/30 text-purple-300 border-purple-500/30' },
  { start: 26, end: 31, label: 'Post-production', color: 'bg-teal-600/30 text-teal-300 border-teal-500/30' },
];

// Day-level event pills
const DAY_EVENTS: Record<number, { label: string; color: string }[]> = {
  3: [{ label: 'Crew Kickoff', color: 'bg-blue-500/20 text-blue-300' }],
  7: [{ label: 'Read-Through', color: 'bg-blue-500/20 text-blue-300' }],
  10: [{ label: 'Scene 1–5', color: 'bg-purple-500/20 text-purple-300' }],
  14: [{ label: 'Scene 6–12', color: 'bg-purple-500/20 text-purple-300' }, { label: 'SAG Audit', color: 'bg-amber-500/20 text-amber-300' }],
  18: [{ label: 'Location: Warehouse', color: 'bg-purple-500/20 text-purple-300' }],
  21: [{ label: 'Chase Sequence', color: 'bg-purple-500/20 text-purple-300' }],
  24: [{ label: 'Pickups', color: 'bg-purple-500/20 text-purple-300' }],
  28: [{ label: 'Color Grade', color: 'bg-teal-500/20 text-teal-300' }],
  31: [{ label: 'Rough Cut', color: 'bg-teal-500/20 text-teal-300' }],
};

const DOW_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getSpanForDay(day: number) {
  return SPANS.find((s) => day >= s.start && day <= s.end);
}

export default function DesktopCalendar() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(14);

  // Build grid cells: leading blanks + days
  const cells: (number | null)[] = [
    ...Array(MONTH_START_DOW).fill(null),
    ...Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1),
  ];
  // Pad to full weeks
  while (cells.length % 7 !== 0) cells.push(null);

  const today = 9; // "today" marker

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
              placeholder="Search schedule..."
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
              Add Event
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
          {/* Calendar header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-black text-white">{MONTH_NAME}</h1>
              <div className="flex gap-1">
                <button className="size-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                <button className="size-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>
            {/* Legend */}
            <div className="flex items-center gap-4">
              {SPANS.map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-sm border ${s.color}`} />
                  <span className="text-[11px] text-slate-400">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar grid */}
          <div className="rounded-xl bg-slate-900 border border-white/5 overflow-hidden">
            {/* DOW header */}
            <div className="grid grid-cols-7 border-b border-white/5">
              {DOW_LABELS.map((d) => (
                <div key={d} className="py-3 text-center text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  {d}
                </div>
              ))}
            </div>

            {/* Weeks */}
            {Array.from({ length: cells.length / 7 }, (_, weekIdx) => {
              const week = cells.slice(weekIdx * 7, weekIdx * 7 + 7);
              return (
                <div key={weekIdx} className="grid grid-cols-7 border-b border-white/5 last:border-b-0">
                  {week.map((day, colIdx) => {
                    const span = day ? getSpanForDay(day) : null;
                    const isSelected = day === selectedDay;
                    const isToday = day === today;
                    const events = day ? (DAY_EVENTS[day] ?? []) : [];

                    // Determine if this cell starts or continues a span
                    const isSpanStart = span && day === span.start;
                    const isSpanEnd = span && day === span.end;
                    const colInWeek = colIdx;
                    const isWeekStart = colInWeek === 0;
                    const isWeekEnd = colInWeek === 6;

                    return (
                      <div
                        key={colIdx}
                        onClick={() => day && setSelectedDay(day)}
                        className={`min-h-[100px] p-2 border-r border-white/5 last:border-r-0 cursor-pointer transition-colors ${
                          day ? (isSelected ? 'bg-blue-900/20' : 'hover:bg-white/[0.02]') : 'opacity-30'
                        }`}
                      >
                        {/* Day number */}
                        <div className="flex items-center justify-between mb-1">
                          <span
                            className={`text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full ${
                              isToday
                                ? 'bg-blue-600 text-white'
                                : isSelected
                                ? 'bg-blue-600/30 text-blue-300'
                                : 'text-slate-400'
                            }`}
                          >
                            {day ?? ''}
                          </span>
                        </div>

                        {/* Production span bar */}
                        {span && day && (
                          <div
                            className={`text-[9px] font-bold px-1.5 py-0.5 rounded mb-1 border truncate ${span.color} ${
                              isSpanStart
                                ? 'rounded-l-full'
                                : isSpanEnd || isWeekEnd
                                ? 'rounded-r-full'
                                : ''
                            } ${!isSpanStart && !isWeekStart ? 'rounded-l-none' : ''}`}
                          >
                            {isSpanStart || isWeekStart ? span.label : ''}
                          </div>
                        )}

                        {/* Day events */}
                        {events.map((ev) => (
                          <div key={ev.label} className={`text-[10px] font-medium px-1.5 py-0.5 rounded mb-0.5 truncate ${ev.color}`}>
                            {ev.label}
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* Selected day detail */}
          {selectedDay && (
            <div className="mt-4 rounded-xl bg-slate-900 border border-white/5 p-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-blue-400">event</span>
                <h3 className="text-sm font-bold text-white">October {selectedDay}, 2024</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getSpanForDay(selectedDay)?.color ?? 'text-slate-400 bg-white/5 border-white/10'}`}>
                  {getSpanForDay(selectedDay)?.label ?? 'No Phase'}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {(DAY_EVENTS[selectedDay] ?? [{ label: 'No events scheduled', color: 'bg-white/5 text-slate-500' }]).map((ev) => (
                  <span key={ev.label} className={`text-xs font-medium px-3 py-1.5 rounded-lg ${ev.color}`}>
                    {ev.label}
                  </span>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
