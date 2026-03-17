import { useState } from 'react';

interface Props {
  onAdd?: () => void;
  initialActive?: string;
}

const NAV_ITEMS = [
  { id: 'fleet', label: 'Fleet', icon: 'directions_boat' },
  { id: 'crew', label: 'Crew', icon: 'group' },
  { id: 'missions', label: 'Missions', icon: 'target' },
  { id: 'intel', label: 'Intel', icon: 'terminal' },
];

export default function BottomNav({ onAdd, initialActive = 'crew' }: Props) {
  const [active, setActive] = useState(initialActive);

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-background-light dark:bg-background-dark border-t border-primary/20 px-6 py-3 pb-8 flex justify-between items-center z-20">
      {NAV_ITEMS.slice(0, 2).map((item) => (
        <button
          key={item.id}
          onClick={() => setActive(item.id)}
          className={`flex flex-col items-center gap-1 relative ${active === item.id ? 'text-primary' : 'text-slate-400'}`}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
          {item.id === 'crew' && (
            <div className="absolute -top-1 right-0 w-1.5 h-1.5 bg-primary rounded-full" />
          )}
        </button>
      ))}

      <div className="relative -top-6">
        <button
          onClick={onAdd}
          className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/40 border-4 border-background-light dark:border-background-dark"
        >
          <span className="material-symbols-outlined text-3xl">add</span>
        </button>
      </div>

      {NAV_ITEMS.slice(2).map((item) => (
        <button
          key={item.id}
          onClick={() => setActive(item.id)}
          className={`flex flex-col items-center gap-1 ${active === item.id ? 'text-primary' : 'text-slate-400'}`}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
