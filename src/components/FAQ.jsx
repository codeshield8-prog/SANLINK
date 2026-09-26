import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { faqs } from '../data.js';

/**
 * Accessible FAQ accordion on the dark base.
 */
export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section bg-base">
      <div className="container max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          text="Answers to a few common questions about working with Sanlink."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 50}>
                <div className={`overflow-hidden rounded-2xl border transition-colors ${isOpen ? 'border-brand-500/30 bg-surface' : 'border-white/[0.07] bg-surface/50'}`}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-[0.95rem] font-semibold text-white">{item.q}</span>
                    <FiPlus className={`shrink-0 text-brand-400 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true" />
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
