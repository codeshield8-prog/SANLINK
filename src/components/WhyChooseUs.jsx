import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Reveal from './Reveal.jsx';
import AmbientGlow from './AmbientGlow.jsx';
import { whyPoints } from '../data.js';

/**
 * "Why Sanlink" — editorial two-column layout: heading on the left,
 * numbered benefit rows on the right (varied, not identical cards).
 */
export default function WhyChooseUs({ showCta = true }) {
  return (
    <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <Reveal className="relative lg:sticky lg:top-28 lg:self-start">
        <AmbientGlow color="magenta" className="-left-8 top-0 opacity-70" size="22rem" />
        <span className="eyebrow relative">
          <span className="h-px w-6 bg-brand-500/60" aria-hidden="true" />
          Why Sanlink
        </span>
        <h2 className="relative mt-4 text-3xl font-bold text-white sm:text-4xl">Why Businesses Choose Sanlink</h2>
        <p className="relative mt-4 text-base leading-relaxed text-muted">
          A dependable technology partner focused on reliable communication, scalable
          solutions and a genuinely business-first approach.
        </p>
        {showCta && (
          <Link to="/capabilities" className="btn-secondary relative mt-7">
            Our Capabilities
            <FiArrowRight aria-hidden="true" />
          </Link>
        )}
      </Reveal>

      <div className="divide-y divide-white/[0.07] border-t border-white/[0.07]">
        {whyPoints.map((point, i) => {
          const Icon = point.icon;
          return (
            <Reveal key={point.title} delay={i * 60} className="group -mx-4 flex gap-5 rounded-2xl px-4 py-6 transition-colors duration-300 hover:bg-white/[0.02] sm:gap-7">
              <span className="font-display text-2xl font-bold text-white/20 transition-colors group-hover:text-brand-500">
                {point.number}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-brand-400 transition-colors group-hover:border-brand-500/40">
                    <Icon className="text-base" />
                  </span>
                  <h3 className="text-lg font-bold text-white">{point.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{point.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
