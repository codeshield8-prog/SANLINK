import { FiCloud, FiServer, FiSmartphone, FiMessageSquare, FiPhoneCall, FiUsers } from 'react-icons/fi';

/**
 * Premium telecom / digital-infrastructure visualization built from
 * SVG + CSS: concentric orbit rings, a glowing central hub, thin
 * connection lines, travelling data particles with soft blur glow and
 * floating node chips. Palette limited to SANLINK orange + electric blue
 * + violet. Motion is gentle and disabled under prefers-reduced-motion.
 */
export default function NetworkVisual({ className = '' }) {
  const hub = { x: 210, y: 190 };
  const nodes = [
    { x: 60, y: 70, icon: FiSmartphone, label: 'Devices' },
    { x: 360, y: 62, icon: FiCloud, label: 'Cloud' },
    { x: 46, y: 300, icon: FiMessageSquare, label: 'Messaging' },
    { x: 372, y: 308, icon: FiServer, label: 'Systems' },
    { x: 210, y: 34, icon: FiPhoneCall, label: 'Voice' },
    { x: 210, y: 346, icon: FiUsers, label: 'Customer' },
  ];

  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* Rotating orbit rings (CSS) behind the SVG */}
      <div className="pointer-events-none absolute inset-[8%] animate-spin-slow rounded-full border border-white/[0.06]" />
      <div className="pointer-events-none absolute inset-[20%] animate-spin-reverse rounded-full border border-dashed border-white/[0.07]" />
      <div className="pointer-events-none absolute inset-[34%] animate-spin-slow rounded-full border border-white/[0.05]" />

      <svg viewBox="0 0 420 380" className="relative h-full w-full overflow-visible" role="img" aria-label="Telecommunication network visualization">
        <defs>
          <radialGradient id="nvGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF6B1A" stopOpacity="0.4" />
            <stop offset="55%" stopColor="#8b5cf6" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="nvParticle" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF8A3D" />
            <stop offset="100%" stopColor="#FF6B1A" />
          </linearGradient>
          <linearGradient id="nvParticle2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7DD3FC" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
          <linearGradient id="nvParticle3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
          <filter id="nvBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.2" />
          </filter>
        </defs>

        {/* soft central glow */}
        <circle cx={hub.x} cy={hub.y} r="130" fill="url(#nvGlow)" />

        {/* static connection lines */}
        {nodes.map((n, i) => (
          <line key={`l-${i}`} x1={hub.x} y1={hub.y} x2={n.x} y2={n.y} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        ))}

        {/* glow underlay for travelling particles */}
        {nodes.map((n, i) => {
          const grad = i % 3 === 0 ? 'url(#nvParticle)' : i % 3 === 1 ? 'url(#nvParticle2)' : 'url(#nvParticle3)';
          return (
            <line
              key={`pg-${i}`}
              x1={hub.x}
              y1={hub.y}
              x2={n.x}
              y2={n.y}
              stroke={grad}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="4 250"
              filter="url(#nvBlur)"
              className="animate-dash"
              style={{ animationDelay: `${i * 0.7}s`, animationDuration: `${6 + (i % 3)}s`, opacity: 0.7 }}
            />
          );
        })}

        {/* travelling data particles */}
        {nodes.map((n, i) => {
          const grad = i % 3 === 0 ? 'url(#nvParticle)' : i % 3 === 1 ? 'url(#nvParticle2)' : 'url(#nvParticle3)';
          return (
            <line
              key={`p-${i}`}
              x1={hub.x}
              y1={hub.y}
              x2={n.x}
              y2={n.y}
              stroke={grad}
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 250"
              className="animate-dash"
              style={{ animationDelay: `${i * 0.7}s`, animationDuration: `${6 + (i % 3)}s` }}
            />
          );
        })}

        {/* small node dots */}
        {nodes.map((n, i) => (
          <circle
            key={`d-${i}`}
            cx={n.x}
            cy={n.y}
            r="3"
            fill={i % 3 === 0 ? '#FF6B1A' : i % 3 === 1 ? '#38BDF8' : '#a78bfa'}
            className="animate-pulse-node"
            style={{ animationDelay: `${i * 0.5}s`, transformOrigin: `${n.x}px ${n.y}px` }}
          />
        ))}

        {/* pulsing rings around hub */}
        <circle cx={hub.x} cy={hub.y} r="34" fill="none" stroke="#FF6B1A" strokeOpacity="0.4" strokeWidth="1" className="animate-pulse-ring" style={{ transformOrigin: `${hub.x}px ${hub.y}px` }} />
        <circle cx={hub.x} cy={hub.y} r="34" fill="none" stroke="#38BDF8" strokeOpacity="0.3" strokeWidth="1" className="animate-pulse-ring" style={{ transformOrigin: `${hub.x}px ${hub.y}px`, animationDelay: '1.7s' }} />
      </svg>

      {/* node chips */}
      {nodes.map((n, i) => (
        <NodeChip key={`c-${i}`} x={n.x} y={n.y} Icon={n.icon} delay={i * 0.6} />
      ))}

      {/* central hub */}
      <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${(hub.x / 420) * 100}%`, top: `${(hub.y / 380) * 100}%` }}>
        <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-glow-brand ring-1 ring-white/20">
          <FiCloud className="text-2xl" />
        </div>
      </div>
    </div>
  );
}

function NodeChip({ x, y, Icon, delay }) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
      style={{ left: `${(x / 420) * 100}%`, top: `${(y / 380) * 100}%`, animationDelay: `${delay}s` }}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-panel/85 text-white/85 shadow-card backdrop-blur-sm">
        <Icon className="text-base" />
      </div>
    </div>
  );
}
