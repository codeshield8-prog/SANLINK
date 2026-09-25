import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { capabilities } from '../data.js';

/**
 * "Built for the Connected Enterprise" — capability pillars linked by a
 * thin horizontal connector on a deep navy band. Reinforces the telecom
 * identity without heavy decoration.
 */
export default function Capabilities() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 text-white sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[40rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal-600/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container relative">
        <SectionHeading
          eyebrow="Capabilities"
          title="Built for the Connected Enterprise"
          text="The building blocks we bring together to keep modern businesses connected and running."
          tone="dark"
        />

        <div className="relative mt-14">
          {/* Thin connecting line behind the pillars (desktop) */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <Reveal key={cap.title} delay={i * 80} className="relative flex flex-col items-center text-center">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-navy-800 text-brand-400 shadow-lift">
                    <Icon className="text-2xl" />
                    <span className="absolute -bottom-1 h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-sm font-bold text-white">{cap.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{cap.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
