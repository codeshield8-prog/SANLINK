import { FiCloud, FiCode, FiMessageSquare, FiPhoneCall, FiBriefcase, FiUsers } from 'react-icons/fi';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import AmbientGlow from './AmbientGlow.jsx';

/**
 * Signature section — "Everything Connected." An abstract communication
 * mesh linking Cloud, API, Messaging, Voice, Business and Customer to a
 * central SANLINK hub, with rotating orbit rings and animated data flows.
 * Palette: orange + electric blue + violet.
 */
const nodes = [
  { x: 130, y: 90, icon: FiCloud, label: 'Cloud' },
  { x: 470, y: 90, icon: FiCode, label: 'API' },
  { x: 60, y: 250, icon: FiMessageSquare, label: 'Messaging' },
  { x: 540, y: 250, icon: FiPhoneCall, label: 'Voice' },
  { x: 190, y: 400, icon: FiBriefcase, label: 'Business' },
  { x: 410, y: 400, icon: FiUsers, label: 'Customer' },
];
const hub = { x: 300, y: 245 };

const grads = ['url(#ecFlowA)', 'url(#ecFlowB)', 'url(#ecFlowC)'];
const dotColors = ['#FF6B1A', '#38BDF8', '#a78bfa'];

export default function EverythingConnected() {
  return (
    <section className="relative overflow-hidden bg-base py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-60" aria-hidden="true" />
      <AmbientGlow color="violet" className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size="40rem" />
      <AmbientGlow color="orange" className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" size="20rem" />
      <AmbientGlow color="electric" className="left-1/3 top-1/3 opacity-40" size="24rem" />

      <div className="container relative">
        <SectionHeading
          eyebrow="Signature"
          title="Everything Connected."
          text="Cloud, APIs, messaging and voice — orchestrated into one connected fabric that links your business to every customer."
        />

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <div className="relative aspect-[6/5] w-full sm:aspect-[600/480]">
            {/* rotating orbit rings behind */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-white/[0.05]" aria-hidden="true" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[44%] w-[44%] -translate-x-1/2 -translate-y-1/2 animate-spin-reverse rounded-full border border-dashed border-white/[0.06]" aria-hidden="true" />

            <svg viewBox="0 0 600 480" className="relative h-full w-full overflow-visible" aria-hidden="true">
              <defs>
                <linearGradient id="ecFlowA" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FF8A3D" />
                  <stop offset="100%" stopColor="#FF6B1A" />
                </linearGradient>
                <linearGradient id="ecFlowB" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7DD3FC" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>
                <linearGradient id="ecFlowC" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#d946ef" />
                </linearGradient>
                <radialGradient id="ecHub" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FF6B1A" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#FF6B1A" stopOpacity="0" />
                </radialGradient>
                <filter id="ecBlur" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.4" />
                </filter>
              </defs>

              <circle cx={hub.x} cy={hub.y} r="150" fill="url(#ecHub)" />

              {/* base links */}
              {nodes.map((n, i) => (
                <line key={`b-${i}`} x1={hub.x} y1={hub.y} x2={n.x} y2={n.y} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              ))}

              {/* glow underlay flows */}
              {nodes.map((n, i) => (
                <line
                  key={`fg-${i}`}
                  x1={hub.x}
                  y1={hub.y}
                  x2={n.x}
                  y2={n.y}
                  stroke={grads[i % 3]}
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="5 300"
                  filter="url(#ecBlur)"
                  className="animate-dash"
                  style={{ animationDelay: `${i * 0.6}s`, animationDuration: `${7 + (i % 3)}s`, opacity: 0.7 }}
                />
              ))}

              {/* animated flows */}
              {nodes.map((n, i) => (
                <line
                  key={`f-${i}`}
                  x1={hub.x}
                  y1={hub.y}
                  x2={n.x}
                  y2={n.y}
                  stroke={grads[i % 3]}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="5 300"
                  className="animate-dash"
                  style={{ animationDelay: `${i * 0.6}s`, animationDuration: `${7 + (i % 3)}s` }}
                />
              ))}
              {nodes.map((n, i) => (
                <circle key={`d-${i}`} cx={n.x} cy={n.y} r="3.5" fill={dotColors[i % 3]} className="animate-pulse-node" style={{ animationDelay: `${i * 0.4}s`, transformOrigin: `${n.x}px ${n.y}px` }} />
              ))}
              <circle cx={hub.x} cy={hub.y} r="40" fill="none" stroke="#FF6B1A" strokeOpacity="0.35" strokeWidth="1" className="animate-pulse-ring" style={{ transformOrigin: `${hub.x}px ${hub.y}px` }} />
              <circle cx={hub.x} cy={hub.y} r="40" fill="none" stroke="#38BDF8" strokeOpacity="0.28" strokeWidth="1" className="animate-pulse-ring" style={{ transformOrigin: `${hub.x}px ${hub.y}px`, animationDelay: '1.7s' }} />
            </svg>

            {/* node chips */}
            {nodes.map((n) => {
              const Icon = n.icon;
              return (
                <div
                  key={n.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${(n.x / 600) * 100}%`, top: `${(n.y / 480) * 100}%` }}
                >
                  <div className="flex flex-col items-center gap-1.5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-panel/90 text-white/85 shadow-card backdrop-blur-sm sm:h-12 sm:w-12">
                      <Icon className="text-base sm:text-lg" />
                    </span>
                    <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted sm:text-xs">{n.label}</span>
                  </div>
                </div>
              );
            })}

            {/* central hub */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${(hub.x / 600) * 100}%`, top: `${(hub.y / 480) * 100}%` }}>
              <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-glow-brand ring-1 ring-white/20">
                <span className="text-[0.6rem] font-bold uppercase tracking-widest">Sanlink</span>
                <span className="text-[0.55rem] text-white/80">Core</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
