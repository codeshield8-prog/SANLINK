import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import Reveal from './Reveal.jsx';
import { company } from '../data.js';

/**
 * Strong but elegant CTA band on deep navy — subtle grid + a single
 * soft accent, no heavy glow.
 */
export default function CTASection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="relative overflow-hidden rounded-2xl bg-navy-900 px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-royal-600/20 blur-[90px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="eyebrow text-brand-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
              Get Started
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s Build Better Business Communication
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
              Have a communication or technology requirement? Let&apos;s discuss how Sanlink
              can support your business.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn-dark">
                Talk to Us
                <FiArrowRight aria-hidden="true" />
              </Link>
              <a href={company.phoneHref} className="btn-ghost-light">
                <FiPhone aria-hidden="true" />
                Call {company.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
