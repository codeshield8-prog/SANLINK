import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import AmbientGlow from './AmbientGlow.jsx';
import { keyFeatures } from '../data.js';

/**
 * "Built to Perform" — a grid of qualitative platform features with
 * gradient-border hover, gradient icon tiles and accent glow.
 */
export default function KeyFeatures() {
  return (
    <section className="relative overflow-hidden bg-base py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine bg-grid-fade opacity-40" aria-hidden="true" />
      <AmbientGlow color="orange" className="-left-24 top-1/3 opacity-60" size="24rem" />
      <AmbientGlow color="electric" className="-right-24 bottom-1/4 opacity-50" size="22rem" />

      <div className="container relative">
        <SectionHeading
          eyebrow="Key Features"
          title="Built to Perform"
          text="The qualities that make Sanlink a dependable technology and communication partner."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {keyFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal
                as="article"
                key={f.title}
                delay={(i % 4) * 60}
                className="gradient-border group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-surface hover:shadow-card-lift"
              >
                <span className="pointer-events-none absolute -right-14 -top-14 h-28 w-28 rounded-full bg-brand-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] text-brand-400 transition-colors duration-300 group-hover:border-brand-500/40">
                  <Icon className="text-2xl" />
                </span>
                <h3 className="relative mt-5 text-base font-bold text-white">{f.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
