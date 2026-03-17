import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DesktopLayout from '../../components/DesktopLayout';

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
  Filming: 'bg-blue-600 text-white',
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
    <DesktopLayout
      headerRight={
        <button
          onClick={() => navigate('/new-project-desktop')}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]">add</span>
          New Project
        </button>
      }
    >
      <div className="flex-1 overflow-y-auto p-8">
        <div className="flex flex-col gap-6">
          {/* Title + tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-white uppercase">Active Projects</h2>
              <p className="text-slate-400">Manage and monitor your ongoing film productions</p>
            </div>
            <div className="flex border-b border-blue-600/20">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-xs font-bold tracking-wider border-b-2 transition-colors ${
                    activeTab === tab ? 'border-blue-500 text-blue-400' : 'border-transparent text-white/40 hover:text-white'
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
                className="border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all group cursor-pointer"
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
                      <span className="text-blue-400">{project.budgetProgress}%</span>
                    </div>
                    <div className="w-full bg-blue-600/20 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-500 h-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                        style={{ width: `${project.budgetProgress}%` }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-blue-600/5">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="flex flex-col">
                        <span className="text-[10px] text-slate-500 uppercase">{stat.label}</span>
                        <span className="text-sm font-bold">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.min(3, project.avatarCount) }).map((_, i) => (
                      <div key={i} className="size-7 rounded-full border-2 border-slate-900 bg-slate-600 -ml-1 first:ml-0" />
                    ))}
                    {project.avatarCount > 3 && (
                      <div className="size-7 rounded-full bg-blue-600/20 text-blue-400 text-[8px] flex items-center justify-center font-bold border-2 border-slate-900 -ml-1">
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
    </DesktopLayout>
  );
}
