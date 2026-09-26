import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import AmbientGlow from './AmbientGlow.jsx';
import { FiChevronRight } from 'react-icons/fi';
import { capabilities } from '../data.js';

/**
 * "From Communication to Digital Infrastructure" — a horizontal
 * CONNECT → INTEGRATE → AUTOMATE → SCALE progression with a glowing
 * connector line (vertical on mobile).
 */
export default function Capabilities() {
  return (
    <section className="relative overflow-hidden bg-base py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-60" aria-hidden="true" />
      <AmbientGlow color="indigo" className="left-1/2 top-10 -translate-x-1/2" size="36rem" />

      <div className="container relative">
        <SectionHeading
          eyebrow="Capabilities"
          title="From Communication to Digital Infrastructure"
          text="A progression that takes your business from first connection to a scalable, integrated foundation."
        />

        <div className="relative mt-16">
          {/* connector line */}
          <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-brand-500/40 via-white/10 to-transparent lg:hidden" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-x-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" aria-hidden="true" />

          <div className="grid gap-8 lg:grid-cols-4">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <Reveal key={cap.title} delay={i * 90} className="relative">
                  <div className="flex items-center gap-4 lg:block">
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-panel text-brand-400 shadow-glow-brand">
                      <Icon className="text-2xl" />
                    </span>
                    <div className="lg:mt-6">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-xs font-bold uppercase tracking-widest text-brand-500">
                          Step {String(i + 1).padStart(2, '0')}
                        </span>
                        {i < capabilities.length - 1 && (
                          <FiChevronRight className="hidden text-white/30 lg:block" aria-hidden="true" />
                        )}
                      </div>
                      <h3 className="mt-1.5 text-lg font-bold text-white">{cap.title}</h3>
                    </div>
                  </div>
                  <p className="mt-3 pl-[4.5rem] text-sm leading-relaxed text-muted lg:pl-0">{cap.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
