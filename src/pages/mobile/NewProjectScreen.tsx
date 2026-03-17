import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Dash', icon: 'grid_view' },
  { label: 'Projects', icon: 'movie', active: true },
  { label: 'Events', icon: 'calendar_month' },
  { label: 'Locs', icon: 'location_on' },
  { label: 'Story', icon: 'auto_stories' },
  { label: 'Assets/\nCrew', icon: 'group' },
];

export default function NewProjectScreen() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('Noir');
  const [budget, setBudget] = useState('');
  const [logline, setLogline] = useState('');

  return (
    <div className="relative flex flex-col min-h-screen max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-primary/20">
        <div className="flex items-center justify-between px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[28px]">arrow_back</span>
          </button>
          <h2 className="text-lg font-bold tracking-tight uppercase">New Project</h2>
          <button className="p-2 -mr-2 text-slate-600 dark:text-slate-400">
            <span className="material-symbols-outlined text-[28px]">more_vert</span>
          </button>
        </div>
        {/* Progress Bar */}
        <div className="px-4 pb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Setup Phase</span>
            <span className="text-xs font-medium text-slate-500">Step 1 of 4</span>
          </div>
          <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-1/4 rounded-full shadow-[0_0_8px_rgba(236,91,19,0.5)]" />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col px-4 pt-8 pb-40 overflow-y-auto bg-gradient-to-br from-primary/5 to-transparent">
        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter mb-2">
            INITIALIZE <br />
            <span className="text-primary italic">PRODUCTION</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            Define the core pillars of your next cinematic masterpiece.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Project Title */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2 ml-1">
              Project Title
            </label>
            <div className="relative">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-primary/10 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-400 text-lg font-medium"
                placeholder="e.g., Midnight Syndicate"
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-600">
                edit_note
              </span>
            </div>
          </div>

          {/* Genre & Budget */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2 ml-1">
                Genre
              </label>
              <div className="relative">
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="w-full appearance-none bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-primary/10 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-base font-medium"
                >
                  <option>Noir</option>
                  <option>Cyberpunk</option>
                  <option>Thriller</option>
                  <option>Mystery</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  expand_more
                </span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2 ml-1">
                Budget (USD)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-primary/10 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-400 text-base font-medium"
                  placeholder="500k"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-600">
                  payments
                </span>
              </div>
            </div>
          </div>

          {/* Logline */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2 ml-1">
              The Logline
            </label>
            <textarea
              value={logline}
              onChange={(e) => setLogline(e.target.value)}
              className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-primary/10 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-400 text-base font-medium resize-none"
              placeholder="In a rain-soaked city, a disgraced detective must..."
              rows={4}
            />
            <p className="mt-2 text-[10px] text-slate-400 uppercase tracking-tighter">
              Recommended: Under 150 characters for clarity.
            </p>
          </div>
        </div>

        {/* Visual Mood */}
        <div className="mt-8 rounded-xl overflow-hidden border border-primary/20 bg-primary/5 p-1 relative h-32 flex items-center justify-center">
          <div className="relative flex flex-col items-center">
            <span className="material-symbols-outlined text-primary mb-1">image</span>
            <span className="text-[10px] font-bold uppercase text-primary tracking-widest">
              Visual Style: High Contrast
            </span>
          </div>
        </div>
      </main>

      {/* Bottom Nav — wider with 7 items */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-background-light dark:bg-background-dark border-t border-primary/20 px-3 py-3 pb-8 flex justify-between items-center z-50">
        {NAV_ITEMS.slice(0, 3).map((item, i) => (
          <button
            key={i}
            className={`flex flex-col items-center gap-1 relative ${item.active ? 'text-primary' : 'text-slate-400 hover:text-primary'} transition-colors`}
          >
            <span className="material-symbols-outlined text-xl">{item.icon}</span>
            <span className="text-[9px] font-bold uppercase tracking-tighter whitespace-pre-line text-center leading-[1.1]">
              {item.label}
            </span>
            {item.active && (
              <div className="absolute -top-1 right-0 w-1.5 h-1.5 bg-primary rounded-full" />
            )}
          </button>
        ))}

        <div className="relative -top-6 mx-1">
          <button className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/40 border-4 border-background-light dark:border-background-dark active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-3xl">add</span>
          </button>
        </div>

        {NAV_ITEMS.slice(3).map((item, i) => (
          <button
            key={i}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-xl">{item.icon}</span>
            <span className="text-[9px] font-bold uppercase tracking-tighter whitespace-pre-line text-center leading-[1.1]">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}
