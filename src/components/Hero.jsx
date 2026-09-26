import { Link } from 'react-router-dom';
import {
  FiArrowRight,
  FiArrowUpRight,
  FiMessageSquare,
  FiPhoneCall,
  FiCode,
  FiShield,
  FiCloud,
  FiActivity,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { company } from '../data.js';

const kickers = ['Telecommunication', 'IT Solutions', 'Cloud', 'API Integration'];

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-base pt-28 pb-16 sm:pt-32 lg:pt-36">
      {/* Restrained backdrop: fine grid + one warm glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 -top-32 h-[40rem] w-[40rem] rounded-full bg-brand-500/[0.10] blur-[150px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-white/[0.03] blur-[150px]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-base to-transparent" aria-hidden="true" />

      <div className="container relative grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Copy */}
        <div className="max-w-xl animate-fade-up">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-500" />
            </span>
            Telecommunication • Information Technology
          </span>

          <h1 className="mt-7 text-[2.9rem] font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[4.6rem]">
            Connecting <br className="hidden sm:block" />
            Businesses <br className="hidden sm:block" />
            Through <span className="text-gradient-brand">Technology.</span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Technology and telecommunications solutions designed to help businesses
            communicate, connect and grow.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/solutions" className="btn-primary">
              Explore Solutions
              <FiArrowRight aria-hidden="true" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Talk to an Expert
            </Link>
          </div>

          {/* Kicker row */}
          <div className="mt-12 border-t border-white/10 pt-6">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {kickers.map((k) => (
                <span key={k} className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                  {k}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bento visual */}
        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Wide network tile */}
            <article className="col-span-2 rounded-2xl border border-white/10 bg-surface p-5">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted/80">
                  <FiActivity className="text-brand-400" /> Live Network
                </span>
                <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_8px_2px_rgba(255,107,26,0.6)]" />
                  Connected
                </span>
              </div>
              <NetStrip />
            </article>

            {/* Channels */}
            <article className="rounded-2xl border border-white/10 bg-surface p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted/70">Channels</span>
              <div className="mt-4 grid grid-cols-1 gap-2">
                {[
                  { icon: FiMessageSquare, label: 'Bulk SMS' },
                  { icon: FaWhatsapp, label: 'WhatsApp' },
                  { icon: FiPhoneCall, label: 'Voice & IVR' },
                  { icon: FiCode, label: 'API' },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.label} className="flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2">
                      <Icon className="shrink-0 text-brand-400" aria-hidden="true" />
                      <span className="text-xs font-medium text-white/85">{c.label}</span>
                    </div>
                  );
                })}
              </div>
            </article>

            {/* Secure */}
            <article className="flex flex-col justify-between rounded-2xl border border-white/10 bg-surface p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-brand-400">
                <FiShield />
              </span>
              <div className="mt-6">
                <p className="text-sm font-bold text-white">Secure by design</p>
                <p className="mt-1 text-xs text-muted">OTP &amp; transactional</p>
              </div>
            </article>

            {/* Cloud pipeline */}
            <article className="col-span-2 rounded-2xl border border-white/10 bg-surface p-5">
              <div className="flex items-center gap-3 text-xs font-semibold text-white/85">
                <Node icon={FiActivity} label="Business" />
                <Line />
                <Node icon={FiCloud} label="Cloud" accent />
                <Line />
                <Node icon={FiMessageSquare} label="Customer" />
                <span className="ml-auto hidden sm:inline-flex">
                  <FiArrowUpRight className="text-brand-400" aria-hidden="true" />
                </span>
              </div>
            </article>
          </div>

          {/* Contact line */}
          <div className="mt-4 flex items-center gap-4 px-1 text-sm text-muted">
            <a href={company.phoneHref} className="font-semibold text-white transition-colors hover:text-brand-400">
              {company.phone}
            </a>
            <span className="h-4 w-px bg-white/15" aria-hidden="true" />
            <span className="truncate">IT &amp; Telecom for modern business</span>
          </div>
        </div>
      </div>

      <div className="divider-line absolute inset-x-0 bottom-0" />
    </section>
  );
}

/* Mono animated network strip inside the wide tile */
function NetStrip() {
  const pts = [
    { x: 8, y: 60 },
    { x: 30, y: 28 },
    { x: 52, y: 66 },
    { x: 74, y: 30 },
    { x: 92, y: 56 },
  ];
  return (
    <svg viewBox="0 0 100 90" className="mt-3 h-28 w-full overflow-visible" aria-hidden="true">
      <defs>
        <linearGradient id="hsFlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF8A3D" />
          <stop offset="100%" stopColor="#FF6B1A" />
        </linearGradient>
      </defs>
      <polyline points={pts.map((p) => `${p.x},${p.y}`).join(' ')} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <polyline
        points={pts.map((p) => `${p.x},${p.y}`).join(' ')}
        fill="none"
        stroke="url(#hsFlow)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 40"
        className="animate-dash"
        style={{ animationDuration: '5s' }}
      />
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={i === 2 ? 3.2 : 2} fill={i === 2 ? '#FF6B1A' : 'rgba(255,255,255,0.55)'} className="animate-pulse-node" style={{ animationDelay: `${i * 0.4}s`, transformOrigin: `${p.x}px ${p.y}px` }} />
      ))}
    </svg>
  );
}

function Node({ icon: Icon, label, accent = false }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`flex h-8 w-8 items-center justify-center rounded-lg border ${accent ? 'border-brand-500/40 bg-brand-500/10 text-brand-400' : 'border-white/10 bg-white/[0.03] text-white/80'}`}>
        <Icon className="text-sm" />
      </span>
      <span className="hidden text-white/80 sm:inline">{label}</span>
    </span>
  );
}

function Line() {
  return <span className="h-px flex-1 bg-gradient-to-r from-white/10 via-brand-500/40 to-white/10" aria-hidden="true" />;
}
