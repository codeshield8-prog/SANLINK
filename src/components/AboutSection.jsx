import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import Reveal from './Reveal.jsx';
import { company, aboutIndicators } from '../data.js';

/**
 * About section: a modern CSS-built technology visual on the left and
 * content on the right. `showCta` toggles the "Learn More" link.
 */
export default function AboutSection({ showCta = true }) {
  return (
    <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
      {/* Visual — built from shapes/cards, not stock imagery */}
      <Reveal className="order-2 lg:order-1">
        <div className="relative mx-auto max-w-md">
          <div className="overflow-hidden rounded-2xl border border-navy-700/50 bg-navy-900 p-7 shadow-card">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/80" />
              </div>
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Network
              </span>
            </div>

            {/* Abstract signal bars */}
            <div className="mt-7 flex items-end gap-2" aria-hidden="true">
              {[38, 60, 46, 78, 54, 88, 66, 50].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-royal-600/30 to-brand-500 animate-float"
                  style={{ height: `${h}px`, animationDelay: `${i * 0.22}s` }}
                />
              ))}
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {aboutIndicators.map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-lg border border-white/8 bg-white/[0.04] px-3 py-2.5"
                >
                  <FiCheck className="shrink-0 text-cyan-400" aria-hidden="true" />
                  <span className="text-xs font-medium text-white">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-5 -right-4 hidden rounded-xl border border-slate-200 bg-white p-4 shadow-card sm:block">
            <p className="font-display text-xl font-bold text-navy-900">IT + Telecom</p>
            <p className="mt-0.5 text-xs text-slate-500">Two disciplines, one partner</p>
          </div>
        </div>
      </Reveal>

      {/* Content */}
      <Reveal delay={100} className="order-1 lg:order-2">
        <span className="eyebrow">
          <span className="h-px w-6 bg-current opacity-50" aria-hidden="true" />
          About Us
        </span>
        <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">
          Technology Built Around Business Needs
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-[1.05rem]">
          {company.legalName} operates across the telecommunication and information
          technology sectors, providing practical and scalable solutions designed around
          modern business communication and digital requirements.
        </p>

        <div className="mt-7 flex flex-wrap gap-2.5">
          {aboutIndicators.map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-navy-800"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-royal-500" aria-hidden="true" />
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
