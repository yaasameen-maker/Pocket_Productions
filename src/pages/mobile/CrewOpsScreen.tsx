import { useState } from 'react';
import BottomNav from '../../components/BottomNav';

type CrewStatus = 'in-mission' | 'standby' | 'off-duty';

interface CrewMember {
  id: number;
  name: string;
  role: string;
  status: CrewStatus;
  tags: string[];
  photo: string;
  grayscale?: boolean;
}

const CREW: CrewMember[] = [
  {
    id: 1,
    name: 'Elias Vance',
    role: 'Tactical Specialist • Level 4',
    status: 'in-mission',
    tags: ['Lead', 'Recon'],
    photo:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDkWkj6QvsZBfNvakSTjlrzaPjFO7vA2h3iWbrkf77GCmNftHkliJVc9stGU5zmClw6i8Ehnj6fLFb_4FiOfejX5IO8wSIxY2sBkd5RR5M0OnYTrAz86wsbNScPJvPfXzRnbwlbefUhJp8UXvjukQv0BNPtzBkJAWOiUgp2UncGUZziPPe8MzpjftKwQrlH1tO7JevvFQeVhixY_j8IElhfdswdEgsxHhbdyi5TTtQZi2Rj9VUUdVrFnjfQYscoiUsdgLBZ4iIWAvMb',
  },
  {
    id: 2,
    name: 'Sarah Kovic',
    role: 'Systems Architect • Level 5',
    status: 'standby',
    tags: ['Cyber', 'Intel'],
    photo:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuACQa9ZvecgoeUrBxrSF0U1ZJqLapFMRPrlk_QaA-0Yq6T400QAnRBqOXhmyEIeBfId15oNwk3BiUPuJ69npCTgsVeV-JNtnNT3b0j9oXFPmZxq4pF6_4SIVWwxjCwKiBssGl3B5z0ST-jwrqI0yShTsO9NfMP-LsXT8xntvcXKAaM3LVqdzzzRCos9Z4aA7GKDsQL_GGKZy0g9Xwh5OLW06juYRYBkNCrsLJEcMHBsT49rwMgHEPRikbeYBj26QIRGpnsfitnlht_c',
    grayscale: true,
  },
  {
    id: 3,
    name: 'Jax Thornton',
    role: 'Combat Medic • Level 3',
    status: 'in-mission',
    tags: ['Field Med'],
    photo:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDd-1asY552A1r0wl0gl6w3y8U_UnLABnVMzf-Je6EyH9cIofOvHlvNisCZa6xCzAchjKXGLCEA0r_T-m6AoYGjG0Pd6oagSemGSudmxQ99czOI-JQgd02q4oudAy1KCQbKqfxH_3YEQWkubspWY0_oALSITKK70zyh4IZVy4WAA3eXal_gAE1xlHJF_BHAw-QwQfIzxX1dNJ5dNOcRl5gdgjpSgfOwo8QRz9282mQ9qgbYZwBdfDizJ0fckbIjAhUNZKXwFmZyNL6y',
  },
  {
    id: 4,
    name: 'Lena Thorne',
    role: 'Senior Pilot • Level 5',
    status: 'off-duty',
    tags: ['Ace', 'Extraction'],
    photo:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSqHyB2QxvCCDhuM8OnD4aiKBLh1uPIsss0R5jjWzEOoBHtN7R42Y9KnpUqFUoH0erHHZt-z1GHrp-mvHpM9hPG7mb7N82ELVFYzwroDrXMyyEtbIgO7MhDftHZwORj88V2iUD1heTYO8RvSNF6jw2x3EVUl0xSUl6O1UAmJCOo0IHk3FO9ImsGbw58eB2bWtlfzTIUU29O7qOgdi1uF2LCfbSZ_8wxwW3_2d91LAAY-j3brnLFl38AcYNNr3BpXMWJvITPb-Q-nni',
    grayscale: true,
  },
];

const STATUS_CONFIG: Record<CrewStatus, { label: string; badgeCls: string; tagCls: string }> = {
  'in-mission': {
    label: 'In Mission',
    badgeCls: 'bg-primary/10 text-primary',
    tagCls: 'border-primary/30 text-primary/80',
  },
  standby: {
    label: 'Standby',
    badgeCls: 'bg-slate-500/10 text-slate-500',
    tagCls: 'border-slate-500/30 text-slate-500',
  },
  'off-duty': {
    label: 'Off Duty',
    badgeCls: 'bg-slate-500/10 text-slate-500',
    tagCls: 'border-slate-500/30 text-slate-500',
  },
};

export default function CrewOpsScreen() {
  const [search, setSearch] = useState('');

  const filtered = CREW.filter(
    (c) =>
      search === '' ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.role.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="relative flex flex-col min-h-screen max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">grid_view</span>
          <h1 className="text-xl font-bold tracking-tight uppercase">Crew Ops</h1>
        </div>
        <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
          <span className="material-symbols-outlined text-primary">notifications</span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto pb-24">
        {/* Stats */}
        <div className="p-4 grid grid-cols-3 gap-3">
          {[
            { label: 'Total', value: '128' },
            { label: 'Active', value: '42', accent: true },
            { label: 'Standby', value: '86' },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`p-3 rounded-xl flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 ${stat.accent ? 'border-l-2 border-l-primary/40' : ''}`}
            >
              <span className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 mb-1">
                {stat.label}
              </span>
              <span className="text-2xl font-bold text-primary">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="px-4 mb-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">
              search
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-200/50 dark:bg-slate-800/50 border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 text-sm"
              placeholder="Search operative name or role..."
            />
          </div>
        </div>

        {/* Crew List */}
        <div className="px-4 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Active Personnel
            </h2>
            <span className="material-symbols-outlined text-primary text-sm">tune</span>
          </div>

          {filtered.map((member) => {
            const cfg = STATUS_CONFIG[member.status];
            return (
              <div
                key={member.id}
                className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 rounded-xl p-4 flex items-center gap-4 relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-lg bg-slate-300 dark:bg-slate-700 overflow-hidden shrink-0 border border-primary/20">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className={`w-full h-full object-cover ${member.grayscale ? 'grayscale' : ''}`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-bold text-base truncate">{member.name}</h3>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter whitespace-nowrap shrink-0 ${cfg.badgeCls}`}>
                      {cfg.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{member.role}</p>
                  <div className="flex gap-2 flex-wrap">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] border px-2 py-0.5 rounded uppercase font-medium ${cfg.tagCls}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="material-symbols-outlined text-slate-400 shrink-0">more_vert</button>
              </div>
            );
          })}
        </div>
      </main>

      <BottomNav initialActive="crew" />
    </div>
  );
}
