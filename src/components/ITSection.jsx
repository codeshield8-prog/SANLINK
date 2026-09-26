import { Link } from 'react-router-dom';
import { FiArrowRight, FiActivity, FiCheckCircle } from 'react-icons/fi';
import Reveal from './Reveal.jsx';
import AmbientGlow from './AmbientGlow.jsx';
import { itCapabilities } from '../data.js';

/**
 * "Technology That Powers Digital Operations" — IT capabilities beside a
 * premium dashboard-style console (abstract, no fabricated analytics).
 */
export default function ITSection() {
  return (
    <section className="relative overflow-hidden bg-base py-20 sm:py-24 lg:py-28">
      <AmbientGlow color="indigo" className="-right-24 top-10" size="30rem" />
      <AmbientGlow color="electric" className="-left-20 bottom-10 opacity-50" size="22rem" />

      <div className="container relative grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-brand-500/60" aria-hidden="true" />
            Information Technology
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Technology That Powers Digital Operations
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-[1.05rem]">
            Practical information technology that strengthens digital operations — from
            integration and cloud to automation and business systems.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {itCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.label}
                  className="gradient-border group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-surface/60 px-4 py-3 transition-colors hover:bg-surface"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] text-brand-400">
                    <Icon className="text-base" />
                  </span>
                  <span className="text-sm font-medium text-white/90">{cap.label}</span>
                </div>
              );
            })}
          </div>

          <Link to="/solutions" className="btn-secondary mt-8">
            Explore Solutions
            <FiArrowRight aria-hidden="true" />
          </Link>
        </Reveal>

        {/* Dashboard-style console */}
        <Reveal delay={120}>
          <div className="relative mx-auto max-w-md">
            <AmbientGlow color="electric" className="-right-6 -top-6 opacity-60" size="18rem" />
            <div className="glass relative overflow-hidden p-5 shadow-card-lift">
              {/* window bar */}
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
                <div className="flex items-center gap-2">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-500/70" />
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-brand-400">
                  <span className="h-1.5 w-1.5 animate-ticker rounded-full bg-brand-400" aria-hidden="true" />
                  Operational
                </span>
              </div>

              {/* KPI tiles (qualitative) */}
              <div className="mt-4 grid grid-cols-2 gap-3" aria-hidden="true">
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                  <div className="flex items-center gap-2 text-brand-400">
                    <FiActivity className="text-sm" />
                    <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted">Systems</span>
                  </div>
                  <p className="mt-2 text-sm font-bold text-white">Connected</p>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                  <div className="flex items-center gap-2 text-brand-400">
                    <FiCheckCircle className="text-sm" />
                    <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted">Delivery</span>
                  </div>
                  <p className="mt-2 text-sm font-bold text-white">Reliable</p>
                </div>
              </div>

              {/* live area chart */}
              <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4" aria-hidden="true">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted">Throughput</span>
                  <span className="text-[0.6rem] text-muted/70">real-time</span>
                </div>
                <svg viewBox="0 0 320 90" className="h-20 w-full overflow-visible">
                  <defs>
                    <linearGradient id="itArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="itLine" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="100%" stopColor="#FF6B1A" />
                    </linearGradient>
                  </defs>
                  <path d="M0,70 C30,60 45,35 70,40 C100,46 115,20 145,28 C175,36 190,12 220,22 C250,32 270,18 320,26 L320,90 L0,90 Z" fill="url(#itArea)" />
                  <path d="M0,70 C30,60 45,35 70,40 C100,46 115,20 145,28 C175,36 190,12 220,22 C250,32 270,18 320,26" fill="none" stroke="url(#itLine)" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="220" cy="22" r="3.5" fill="#FF6B1A" className="animate-pulse-node" style={{ transformOrigin: '220px 22px' }} />
                </svg>
              </div>

              {/* mini bars */}
              <div className="mt-4 flex items-end gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4" aria-hidden="true">
                {[40, 62, 48, 78, 56, 90, 68, 82, 60, 74].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-brand-600/30 to-brand-400/80 animate-float"
                    style={{ height: `${h}%`, minHeight: '10px', animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
