import { Link } from 'react-router-dom';
import { FiArrowRight, FiCloud, FiMessageSquare, FiShield, FiChevronDown } from 'react-icons/fi';
import NetworkVisual from './NetworkVisual.jsx';
import AmbientGlow from './AmbientGlow.jsx';
import { company } from '../data.js';

const chips = ['Telecommunication', 'Cloud Communication', 'IT Solutions', 'API Integration'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-base pt-28 sm:pt-32 lg:pt-40">
      {/* Aurora + technical grid + ambient glows */}
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-40 -top-32 h-[42rem] w-[42rem] animate-aurora rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="absolute -left-48 top-24 h-[34rem] w-[34rem] animate-aurora rounded-full bg-indigo-600/20 blur-[130px] [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] animate-aurora rounded-full bg-brand-500/15 blur-[120px] [animation-delay:-11s]" />
        <div className="absolute right-1/4 top-1/2 h-[20rem] w-[20rem] rounded-full bg-electric-500/10 blur-[120px]" />
      </div>

      <div className="container relative grid items-center gap-14 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-32">
        {/* Copy */}
        <div className="max-w-xl animate-fade-up">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-500" />
            </span>
            Telecommunication • Information Technology
          </span>

          <h1 className="mt-6 text-[2.7rem] font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[4.1rem]">
            Connecting Businesses Through{' '}
            <span className="text-gradient-brand">Technology.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Technology and telecommunications solutions designed to help businesses
            communicate, connect and grow.
          </p>

          {/* Capability chips */}
          <div className="mt-7 flex flex-wrap gap-2.5">
            {chips.map((c) => (
              <span key={c} className="chip">
                <span className="h-1.5 w-1.5 rounded-full bg-electric-400" aria-hidden="true" />
                {c}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/solutions" className="btn-primary">
              Explore Solutions
              <FiArrowRight aria-hidden="true" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Talk to an Expert
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted">
            <a href={company.phoneHref} className="font-medium text-white transition-colors hover:text-brand-400">
              {company.phone}
            </a>
            <span className="h-4 w-px bg-white/15" aria-hidden="true" />
            <span>IT &amp; Telecom solutions for modern business</span>
          </div>
        </div>

        {/* Visual */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
            {/* glow plate behind */}
            <div className="absolute inset-8 rounded-[2rem] bg-gradient-to-br from-white/[0.04] to-transparent" aria-hidden="true" />
            <div className="absolute inset-4 rounded-full border border-white/[0.05]" aria-hidden="true" />
            <NetworkVisual className="relative h-full w-full" />

            {/* Floating glass status cards */}
            <FloatCard
              className="left-0 top-6 [animation-delay:-2s]"
              icon={FiCloud}
              title="Cloud Layer"
              subtitle="Always connected"
              tone="electric"
            />
            <FloatCard
              className="right-0 top-1/3 [animation-delay:-5s]"
              icon={FiMessageSquare}
              title="Messaging"
              subtitle="Delivered reliably"
              tone="brand"
            />
            <FloatCard
              className="bottom-6 left-6 [animation-delay:-8s]"
              icon={FiShield}
              title="Secure"
              subtitle="OTP & transactional"
              tone="violet"
            />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted/60 lg:flex" aria-hidden="true">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em]">Scroll</span>
        <FiChevronDown className="animate-float text-base" />
      </div>

      <div className="divider-line" />
    </section>
  );
}

const toneMap = {
  electric: 'text-electric-400',
  brand: 'text-brand-400',
  violet: 'text-violet-400',
};

function FloatCard({ className = '', icon: Icon, title, subtitle, tone = 'brand' }) {
  return (
    <div className={`absolute hidden animate-float-slow sm:block ${className}`} aria-hidden="true">
      <div className="glass flex items-center gap-3 rounded-xl px-3.5 py-2.5 shadow-card">
        <span className={`flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] ${toneMap[tone]}`}>
          <Icon className="text-base" />
        </span>
        <div className="pr-1">
          <p className="text-xs font-bold leading-tight text-white">{title}</p>
          <p className="text-[0.65rem] leading-tight text-muted">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
