import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiActivity } from 'react-icons/fi';
import Reveal from './Reveal.jsx';
import AmbientGlow from './AmbientGlow.jsx';
import { company, aboutIndicators, images } from '../data.js';

/**
 * About Sanlink — content beside a premium glass "network" console built
 * from CSS/SVG. `showCta` toggles the "Learn More" link.
 */
export default function AboutSection({ showCta = true }) {
  return (
    <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
      {/* Visual */}
      <Reveal className="relative order-2 lg:order-1">
        <AmbientGlow color="violet" className="-left-10 top-0 opacity-70" size="24rem" />
        <AmbientGlow color="electric" className="-bottom-6 right-0 opacity-50" size="18rem" />
        <div className="relative mx-auto max-w-md">
          <div className="glass overflow-hidden p-7 shadow-card-lift">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-brand-500/80" />
              </div>
              <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-muted/70">
                <FiActivity className="text-electric-400" /> Network
              </span>
            </div>

            {/* Live tech feed image */}
            <div className="relative mt-5 overflow-hidden rounded-xl border border-white/[0.07]">
              <img
                src={images.aboutFeed}
                alt="Abstract digital network infrastructure"
                loading="lazy"
                className="h-28 w-full object-cover opacity-80"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-panel via-panel/30 to-transparent" aria-hidden="true" />
            </div>

            {/* Signal bars */}
            <div className="mt-5 flex items-end gap-2" aria-hidden="true">
              {[36, 58, 44, 76, 52, 88, 64, 48].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-brand-600/40 to-brand-400 animate-float"
                  style={{ height: `${h}px`, animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>

            <div className="mt-7 grid grid-cols-2 gap-2.5">
              {aboutIndicators.map((label) => (
                <div key={label} className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2.5">
                  <FiCheck className="shrink-0 text-brand-400" aria-hidden="true" />
                  <span className="text-xs font-medium text-white/90">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-5 -right-4 hidden rounded-xl border border-white/10 bg-panel/95 p-4 shadow-card backdrop-blur sm:block">
            <p className="font-display text-lg font-bold text-white">IT + Telecom</p>
            <p className="mt-0.5 text-xs text-muted">Two disciplines, one partner</p>
          </div>
        </div>
      </Reveal>

      {/* Content */}
      <Reveal delay={100} className="order-1 lg:order-2">
        <span className="eyebrow">
          <span className="h-px w-6 bg-brand-500/60" aria-hidden="true" />
          About Sanlink
        </span>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Technology That Keeps Businesses Connected
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-[1.05rem]">
          {company.legalName} operates at the intersection of information technology and
          telecommunications, delivering practical technology solutions designed around the
          communication and digital requirements of modern businesses.
        </p>

        <div className="mt-7 flex flex-wrap gap-2.5">
          {aboutIndicators.map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold text-white/85"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>

        {showCta && (
          <Link to="/about" className="btn-secondary mt-8">
            Learn More
            <FiArrowRight aria-hidden="true" />
          </Link>
        )}
      </Reveal>
    </div>
  );
}
