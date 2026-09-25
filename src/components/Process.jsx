import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { process } from '../data.js';

/**
 * "How We Work" — a clean four-step process with numbered cards and a
 * subtle connecting line across the top on desktop.
 */
export default function Process() {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <SectionHeading
          eyebrow="How We Work"
          title="A Clear, Structured Approach"
          text="A straightforward process that keeps every engagement organised, from first conversation to ongoing support."
        />

        <div className="relative mt-14">
          <div
            className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-slate-200 lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal
                  key={step.number}
                  delay={i * 80}
                  className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-white">
                      <Icon className="text-lg" />
                    </span>
                    <span className="font-display text-3xl font-bold text-slate-100">{step.number}</span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-navy-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
