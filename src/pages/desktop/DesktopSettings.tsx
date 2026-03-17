import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SIDEBAR_NAV = [
  { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
  { label: 'Projects', icon: 'video_library', route: '/projects-desktop' },
  { label: 'Calendar', icon: 'calendar_month', route: '/calendar-desktop' },
  { label: 'Locations', icon: 'location_on', route: '/locations-desktop' },
  { label: 'Storyboard', icon: 'grid_view', route: '/storyboard-desktop' },
  { label: 'Budgets', icon: 'payments', route: '/budgets' },
  { label: 'Team', icon: 'groups', route: '/team-desktop' },
  { label: 'Assets', icon: 'database', route: '/assets' },
];

interface Integration {
  name: string;
  status: 'connected' | 'not-linked';
  iconBg: string;
  iconColor: string;
  icon: string;
}

const INTEGRATIONS: Integration[] = [
  { name: "Pedro's API", status: 'connected', iconBg: 'bg-indigo-600/20', iconColor: 'text-indigo-400', icon: 'api' },
  { name: 'Slack HQ', status: 'not-linked', iconBg: 'bg-purple-900/20', iconColor: 'text-purple-400', icon: 'hub' },
];

export default function DesktopSettings() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('Alex Rivera');
  const [email, setEmail] = useState('alex.rivera@neonoir.studio');
  const [jobTitle, setJobTitle] = useState('Executive Producer');
  const [twoFactor, setTwoFactor] = useState(true);
  const [notifications, setNotifications] = useState([true, true, false]);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden font-display text-slate-100" style={{ background: '#0a0a0a' }}>
      {/* Top header */}
      <header className="h-16 flex items-center justify-between px-8 border-b border-slate-800 bg-[#0a0a0a]/50 backdrop-blur-md z-10 w-full sticky top-0">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
          <input
            type="text"
            placeholder="Search settings..."
            className="bg-[#171717] border border-slate-800 rounded-lg pl-9 pr-4 py-1.5 text-xs outline-none focus:ring-1 focus:ring-primary w-48 text-slate-300"
          />
        </div>
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em]">OCTOBER 24, 2023 • 10:45 PM</span>
        <div className="flex items-center gap-3">
          <button className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">save</span>
            SAVE CHANGES
          </button>
          <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm">
            AR
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
              <h1 className="font-black text-lg tracking-tight leading-none text-white">Pocket</h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Productions</p>
            </div>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            {SIDEBAR_NAV.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.route)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 transition-colors text-left text-sm"
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
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-primary/10 text-primary font-semibold text-left text-sm">
              <span className="material-symbols-outlined">settings</span>
              Settings
            </button>
          </nav>
          <div className="px-4 py-6 border-t border-slate-800">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Recent Activity</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 cursor-pointer group">
                <span className="size-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0 group-hover:bg-primary transition-colors" />
                <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors">Profile Updated</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 overflow-y-auto p-8" style={{ background: '#0a0a0a' }}>
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Profile header */}
            <section className="flex flex-col md:flex-row gap-8 items-center md:items-end justify-between border-b border-slate-800 pb-10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative group">
                  <div className="h-36 w-36 rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl bg-amber-500 flex items-center justify-center">
                    <span className="text-white font-black text-5xl">AR</span>
                  </div>
                  <button className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-xl shadow-lg hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-lg">photo_camera</span>
                  </button>
                </div>
                <div className="text-center md:text-left space-y-1">
                  <h2 className="text-3xl font-bold tracking-tight text-white">Alex Rivera</h2>
                  <p className="text-slate-400 font-medium">Executive Producer &amp; Head of Creative Strategy</p>
                  <div className="flex gap-2 pt-2 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20 uppercase">Admin</span>
                    <span className="px-3 py-1 bg-slate-800/50 text-slate-400 text-xs font-bold rounded-full border border-slate-700 uppercase tracking-widest">Verified</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => navigate(-1)}
                  className="px-6 py-2.5 rounded-xl border border-slate-800 bg-[#171717]/50 font-bold text-sm text-slate-400 hover:bg-[#171717] transition-colors"
                >
                  Discard
                </button>
                <button className="px-6 py-2.5 rounded-xl bg-primary text-white font-bold text-sm hover:brightness-110 shadow-lg shadow-primary/20 transition-all">
                  Save Changes
                </button>
              </div>
            </section>

            {/* Form grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Account Details */}
              <section className="space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-sm">person</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Account Details</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Full Name', value: fullName, set: setFullName, type: 'text' },
                    { label: 'Email Address', value: email, set: setEmail, type: 'email' },
                    { label: 'Job Title', value: jobTitle, set: setJobTitle, type: 'text' },
                  ].map(({ label, value, set, type }) => (
                    <div key={label} className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">{label}</label>
                      <input
                        type={type}
                        value={value}
                        onChange={(e) => set(e.target.value)}
                        className="bg-[#171717] border border-slate-800 rounded-xl focus:ring-1 focus:ring-primary focus:border-primary outline-none px-4 py-3 text-sm text-slate-200"
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* Security */}
              <section className="space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-sm">security</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Security</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-slate-800 flex items-center justify-between" style={{ background: 'rgba(23,23,23,0.8)' }}>
                    <div>
                      <p className="font-bold text-sm text-slate-200">Two-Factor Authentication</p>
                      <p className="text-[10px] uppercase font-bold text-slate-500 tracking-tight">Keep your account secure with 2FA</p>
                    </div>
                    <button
                      onClick={() => setTwoFactor(!twoFactor)}
                      className={`relative flex items-center px-1 w-12 h-6 rounded-full transition-colors ${twoFactor ? 'bg-primary' : 'bg-slate-700'}`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full absolute transition-all ${twoFactor ? 'right-1' : 'left-1'}`} />
                    </button>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 flex items-center justify-between" style={{ background: 'rgba(23,23,23,0.8)' }}>
                    <div>
                      <p className="font-bold text-sm text-slate-200">Password Status</p>
                      <p className="text-[10px] uppercase font-bold text-slate-500 tracking-tight">Last changed 45 days ago</p>
                    </div>
                    <button className="text-primary text-xs font-bold uppercase hover:underline tracking-widest">Change</button>
                  </div>
                </div>
              </section>

              {/* Notifications */}
              <section className="space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-sm">notifications_active</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Notifications</h3>
                </div>
                <div className="space-y-3">
                  {[
                    'Production alerts & timeline changes',
                    'Daily team briefing summaries',
                    'External API integration logs',
                  ].map((label, i) => (
                    <label
                      key={label}
                      className="flex items-center gap-3 cursor-pointer p-3 rounded-xl border border-slate-800"
                      style={{ background: 'rgba(23,23,23,0.8)' }}
                    >
                      <input
                        type="checkbox"
                        checked={notifications[i]}
                        onChange={(e) => setNotifications((prev) => prev.map((v, idx) => idx === i ? e.target.checked : v))}
                        className="rounded border-slate-700 text-primary focus:ring-primary h-4 w-4 bg-slate-800"
                      />
                      <span className="text-sm font-medium text-slate-300">{label}</span>
                    </label>
                  ))}
                </div>
              </section>

              {/* Integrations */}
              <section className="space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-sm">hub</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Integrations</h3>
                </div>
                <div className="space-y-4">
                  {INTEGRATIONS.map((integration) => (
                    <div
                      key={integration.name}
                      className="flex items-center justify-between p-4 rounded-xl border border-slate-800"
                      style={{ background: 'rgba(23,23,23,0.8)' }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-lg ${integration.iconBg} border border-white/10 flex items-center justify-center ${integration.iconColor}`}>
                          <span className="material-symbols-outlined">{integration.icon}</span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-200">{integration.name}</p>
                          <p className={`text-[10px] uppercase font-bold ${integration.status === 'connected' ? 'text-emerald-500' : 'text-slate-500'}`}>
                            {integration.status === 'connected' ? 'Connected' : 'Not Linked'}
                          </p>
                        </div>
                      </div>
                      {integration.status === 'connected' ? (
                        <button className="text-slate-500 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined">settings</span>
                        </button>
                      ) : (
                        <button className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-lg border border-primary/20 hover:bg-primary hover:text-white transition-colors tracking-widest">
                          CONNECT
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Footer */}
            <section className="pt-10 border-t border-slate-800 flex flex-col md:flex-row gap-6 justify-between items-center text-slate-500">
              <div className="flex items-center gap-6">
                {['Privacy Policy', 'Terms of Service', 'System Status'].map((link) => (
                  <button key={link} className="text-[10px] uppercase font-bold tracking-widest hover:text-primary transition-colors">
                    {link}
                  </button>
                ))}
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-600">Neo-Noir High-Fidelity v2.4.0</p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
