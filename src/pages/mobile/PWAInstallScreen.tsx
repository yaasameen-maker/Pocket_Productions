import { useNavigate } from 'react-router-dom';

export default function PWAInstallScreen() {
  const navigate = useNavigate();

  const handleInstall = () => {
    // In a real PWA this would trigger the beforeinstallprompt event
    navigate('/');
  };

  return (
    <div
      className="relative min-h-screen w-full flex flex-col max-w-md mx-auto overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Browser chrome — Safari style */}
      <header
        className="shrink-0 border-b border-white/5 p-4 flex items-center justify-between"
        style={{ background: 'rgba(22,22,22,0.9)' }}
      >
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div
          className="rounded-lg px-4 py-1 text-xs flex items-center space-x-2 w-2/3 justify-center"
          style={{ background: 'rgba(0,0,0,0.4)', color: '#8E8E93' }}
        >
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              clipRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              fillRule="evenodd"
            />
          </svg>
          <span>pocketproductions.io</span>
        </div>
        <div className="w-8" />
      </header>

      {/* Blurred app background */}
      <div className="relative flex-1 flex items-end justify-center pb-6">
        {/* App preview blurred bg */}
        <div className="absolute inset-0 opacity-40 grayscale-[0.5] p-4 space-y-4">
          <div className="flex justify-between items-center">
            <div className="w-12 h-12 bg-orange-600 rounded-xl" />
            <div className="flex space-x-2">
              <div className="w-10 h-10 rounded-full bg-white/10" />
              <div className="w-10 h-10 rounded-full bg-white/10" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-32 rounded-2xl border border-white/10" style={{ background: '#161616' }} />
            <div className="h-32 rounded-2xl border border-white/10" style={{ background: '#161616' }} />
          </div>
          <div className="h-48 rounded-2xl border border-white/10 relative" style={{ background: '#161616' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl" />
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        {/* PWA Install Card */}
        <div
          className="relative w-full mx-4 rounded-[2.5rem] p-8 pb-10 shadow-[0_20px_50px_rgba(0,178,255,0.15)]"
          style={{
            background: 'rgba(10,10,10,0.85)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0,178,255,0.2)',
          }}
        >
          {/* App Icon */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2">
            <div
              className="w-24 h-24 rounded-[2rem] flex items-center justify-center shadow-lg border-4"
              style={{
                background: 'linear-gradient(135deg, #00B2FF, #1a4ed8)',
                borderColor: '#0A0A0A',
                boxShadow: '0 8px 25px rgba(0,178,255,0.2)',
                animation: 'float 4s ease-in-out infinite',
              }}
            >
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          <div className="mt-10 text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-white">Pocket Productions</h2>
            <p className="text-sm leading-relaxed px-4" style={{ color: '#8E8E93' }}>
              Deploy your production workflow as a native experience. Zero-latency access, even when
              the set goes offline.
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-8 space-y-4">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                ),
                title: 'Instant Loading',
                desc: 'Launch directly from your home screen',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                ),
                title: 'Offline Access',
                desc: 'Access scripts and call sheets without signal',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center space-x-4 p-3 rounded-2xl border border-white/5"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(0,178,255,0.2)', color: '#00B2FF' }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{item.title}</p>
                  <p className="text-xs" style={{ color: '#8E8E93' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 space-y-6">
            <button
              onClick={handleInstall}
              className="w-full font-black text-sm tracking-widest py-5 rounded-2xl transition-all active:scale-[0.97] border border-white/20"
              style={{
                background: 'linear-gradient(to right, #00B2FF, #2563eb)',
                boxShadow: '0 10px 25px rgba(0,178,255,0.4)',
                color: '#000',
              }}
            >
              ADD TO HOME SCREEN
            </button>
            <div className="flex flex-col items-center space-y-3 text-[10px] uppercase tracking-widest" style={{ color: '#8E8E93' }}>
              <p className="flex items-center gap-1 font-medium">
                ON IPHONE: TAP
                <span
                  className="inline-flex items-center justify-center mx-1 rounded-sm"
                  style={{ width: 18, height: 18, border: '1.5px solid #00B2FF', position: 'relative' }}
                >
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                    <path d="M5 8V1M5 1L2 4M5 1L8 4" stroke="#00B2FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="1" y="5" width="8" height="6" rx="1" stroke="#00B2FF" strokeWidth="1.5" fill="none" />
                  </svg>
                </span>
                THEN
              </p>
              <p
                className="px-4 py-1.5 rounded-full font-bold text-white tracking-widest"
                style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}
              >
                "ADD TO HOME SCREEN"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Browser footer */}
      <footer
        className="shrink-0 border-t border-white/5 p-4 flex justify-between items-center"
        style={{ background: 'rgba(22,22,22,0.9)' }}
      >
        {['chevron_back', 'chevron_forward', 'crop_square', 'bookmark', 'grid_view'].map((icon, i) => (
          <div key={i} className="w-6 h-6 flex items-center justify-center" style={{ color: '#00B2FF' }}>
            <span className="material-symbols-outlined text-[18px]">{icon}</span>
          </div>
        ))}
      </footer>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}
