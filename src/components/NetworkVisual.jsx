import { FiWifi, FiCloud, FiServer, FiSmartphone, FiMessageSquare } from 'react-icons/fi';

/**
 * An elegant, restrained communication-network visual built entirely
 * from SVG + CSS — connected nodes, thin data lines, a central hub and
 * a controlled cyan accent. No stock imagery, no heavy glow. Animations
 * are gentle and disabled under prefers-reduced-motion (see index.css).
 *
 * `tone="dark"` renders on deep navy (hero), `tone="light"` on light panels.
 */
export default function NetworkVisual({ tone = 'dark', className = '' }) {
  const dark = tone === 'dark';

  const hub = { x: 200, y: 185 };
  const nodes = [
    { x: 62, y: 74, icon: FiSmartphone },
    { x: 338, y: 66, icon: FiCloud },
    { x: 54, y: 296, icon: FiMessageSquare },
    { x: 344, y: 300, icon: FiServer },
    { x: 200, y: 40, icon: FiWifi },
  ];

  const line = dark ? 'rgba(148, 178, 224, 0.22)' : 'rgba(15, 23, 42, 0.12)';
  const pulse = dark ? '#3ea0ff' : '#2450d4';
  const accent = '#12b5cf';

  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 400 360"
        className="h-full w-full overflow-visible"
        role="img"
        aria-label="Digital communication network illustration"
      >
        <defs>
          <radialGradient id="nvHubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={pulse} stopOpacity="0.28" />
            <stop offset="100%" stopColor={pulse} stopOpacity="0" />
          </radialGradient>
          <linearGradient id="nvLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.9" />
            <stop offset="100%" stopColor={pulse} stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Static connection lines */}
        {nodes.map((n, i) => (
          <line key={`l-${i}`} x1={hub.x} y1={hub.y} x2={n.x} y2={n.y} stroke={line} strokeWidth="1" />
        ))}

        {/* Travelling data pulses */}
        {nodes.map((n, i) => (
          <line
            key={`d-${i}`}
            x1={hub.x}
            y1={hub.y}
            x2={n.x}
            y2={n.y}
            stroke="url(#nvLine)"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeDasharray="5 235"
            className="animate-dash"
            style={{ animationDelay: `${i * 0.9}s` }}
          />
        ))}

        <circle cx={hub.x} cy={hub.y} r="66" fill="url(#nvHubGlow)" />
        <circle
          cx={hub.x}
          cy={hub.y}
          r="30"
          fill="none"
          stroke={pulse}
          strokeOpacity="0.4"
          strokeWidth="1"
          className="animate-pulse-ring"
          style={{ transformOrigin: `${hub.x}px ${hub.y}px` }}
        />
      </svg>

      {/* Node chips */}
      {nodes.map((n, i) => (
        <NodeChip key={`c-${i}`} x={n.x} y={n.y} Icon={n.icon} dark={dark} delay={i * 0.7} />
      ))}

      {/* Central hub */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${(hub.x / 400) * 100}%`, top: `${(hub.y / 360) * 100}%` }}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-royal-600 text-white shadow-lift ring-1 ring-white/10">
          <FiWifi className="text-xl" />
        </div>
      </div>
    </div>
  );
}

function NodeChip({ x, y, Icon, dark, delay }) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
      style={{ left: `${(x / 400) * 100}%`, top: `${(y / 360) * 100}%`, animationDelay: `${delay}s` }}
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl border shadow-soft ${
          dark
            ? 'border-white/10 bg-navy-800/80 text-brand-400 backdrop-blur-sm'
            : 'border-slate-200 bg-white text-royal-600'
        }`}
      >
        <Icon className="text-base" />
      </div>
    </div>
  );
}
