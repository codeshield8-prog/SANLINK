import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Reveal from './Reveal.jsx';
import { whyPoints } from '../data.js';

/**
 * "Why Partner With Sanlink?" — an editorial two-column layout: an
 * intro/heading on the left, numbered benefit rows on the right.
 * `showCta` toggles the contact link (used on the Home section).
 */
export default function WhyChooseUs({ showCta = true }) {
  return (
    <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      {/* Left — heading */}
      <Reveal className="lg:sticky lg:top-28 lg:self-start">
        <span className="eyebrow">
          <span className="h-px w-6 bg-current opacity-50" aria-hidden="true" />
          Why Sanlink
        </span>
        <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">Why Partner With Sanlink?</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          A dependable technology partner focused on reliable communication, scalable
          solutions and a genuinely business-first approach.
        </p>
        {showCta && (
          <Link to="/why-sanlink" className="btn-secondary mt-7">
            More Reasons
            <FiArrowRight aria-hidden="true" />
          </Link>
        )}
      </Reveal>

      {/* Right — numbered benefit rows */}
      <div className="divide-y divide-slate-200 border-t border-slate-200">
        {whyPoints.map((point, i) => {
          const Icon = point.icon;
          return (
            <Reveal
              key={point.title}
              delay={i * 70}
              className="group flex gap-5 py-7 transition-colors sm:gap-7"
            >
              <span className="font-display text-lg font-bold text-slate-300 transition-colors group-hover:text-royal-500">
                {point.number}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-royal-50 text-royal-600 transition-colors group-hover:bg-royal-600 group-hover:text-white">
                    <Icon className="text-base" />
                  </span>
                  <h3 className="text-lg font-bold text-navy-900">{point.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{point.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
