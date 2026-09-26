import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import AmbientGlow from './AmbientGlow.jsx';
import { process } from '../data.js';

/**
 * "From Requirement to Solution" — a four-step process on a connected
 * timeline (animated horizontal rail on desktop, vertical on mobile)
 * with large step numerals and glass cards.
 */
export default function Process() {
  return (
    <section className="relative overflow-hidden bg-base py-20 sm:py-24 lg:py-28">
      <AmbientGlow color="electric" className="left-1/2 top-10 -translate-x-1/2 opacity-40" size="30rem" />
      <div className="container relative">
        <SectionHeading
          eyebrow="How We Work"
          title="From Requirement to Solution"
          text="A clear, structured approach that keeps every engagement organised — from first conversation to ongoing support."
        />

        <div className="relative mt-16">
          {/* horizontal connector (desktop) */}
          <div className="pointer-events-none absolute inset-x-0 top-9 hidden h-px lg:block" aria-hidden="true">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
            <div className="absolute top-0 h-px w-32 bg-gradient-to-r from-transparent via-electric-400 to-transparent animate-marquee" style={{ animationDuration: '4s' }} />
          </div>
          {/* vertical connector (mobile) */}
          <div className="pointer-events-none absolute bottom-0 left-[2.25rem] top-0 w-px bg-gradient-to-b from-brand-500/40 via-white/10 to-transparent lg:hidden" aria-hidden="true" />

          <div className="grid gap-8 lg:grid-cols-4">
            {process.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.number} delay={i * 90} className="relative flex gap-5 lg:block">
                  <span className="relative z-10 flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-panel text-white shadow-card">
                    <Icon className="text-2xl" />
                    <span className="absolute -right-1.5 -top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-xs font-bold text-white shadow-glow-brand">
                      {i + 1}
                    </span>
                  </span>
                  <div className="lg:mt-6">
                    <span className="font-display text-sm font-bold tracking-widest text-brand-500/70">{step.number}</span>
                    <h3 className="mt-1 text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
