import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DesktopLayout from '../../components/DesktopLayout';

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
    <DesktopLayout>
      <div className="flex-1 overflow-y-auto p-8 max-w-4xl mx-auto w-full">
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
                className="w-full bg-slate-900/30 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all"
              />
            </div>

            {/* Genre */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Genre</label>
              <div className="relative">
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="w-full bg-slate-900/30 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 appearance-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all"
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
                  className="w-full bg-slate-900/30 border border-slate-800 rounded-xl pl-8 pr-4 py-3 text-slate-200 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all"
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
                  className="w-full bg-slate-900/30 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-slate-200 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all [color-scheme:dark]"
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
                className="w-full bg-slate-900/30 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all resize-none"
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
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-600/30 text-sm flex items-center gap-2 group"
              >
                Initialize Production
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">rocket_launch</span>
              </button>
            </div>
          </div>
        </form>

        {/* Environment card */}
        <div className="mt-12 p-6 rounded-2xl flex items-center gap-6" style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="w-16 h-16 rounded-xl bg-blue-600/20 flex items-center justify-center border border-blue-600/30 shrink-0">
            <span className="material-symbols-outlined text-blue-400 text-[32px]">architecture</span>
          </div>
          <div>
            <h5 className="text-slate-200 font-bold">Standard Environment Active</h5>
            <p className="text-slate-500 text-sm">Automated scene breakdown and asset tracking will be enabled immediately after initialization.</p>
          </div>
        </div>
      </div>
    </DesktopLayout>
  );
}
