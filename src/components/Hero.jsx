import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import NetworkVisual from './NetworkVisual.jsx';
import { company } from '../data.js';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      {/* Restrained backdrop: fine grid + one soft accent, no heavy glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute right-[-8%] top-[-10%] h-[26rem] w-[26rem] rounded-full bg-royal-600/15 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden="true"
      />

      <div className="container relative grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-28">
        {/* Copy */}
        <div className="max-w-xl animate-fade-up">
          <span className="eyebrow text-brand-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
            Telecommunication • Technology
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
            Powering Smarter Communication Through{' '}
            <span className="text-brand-400">Technology</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
            {company.legalName} delivers reliable telecommunication and information
            technology solutions that help businesses connect, communicate and operate
            more efficiently.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/services" className="btn-primary">
              Explore Solutions
              <FiArrowRight aria-hidden="true" />
            </Link>
            <Link to="/contact" className="btn-ghost-light">
              Talk to Our Team
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-slate-400">
            <a href={company.phoneHref} className="font-medium text-white transition-colors hover:text-brand-400">
              {company.phone}
            </a>
            <span className="h-4 w-px bg-white/15" aria-hidden="true" />
            <span>Telecom &amp; IT solutions for modern business</span>
          </div>
        </div>

        {/* Visual */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto aspect-square w-full max-w-[30rem] rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[0.7rem] font-semibold text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
              Live Network
            </div>
            <NetworkVisual tone="dark" className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
