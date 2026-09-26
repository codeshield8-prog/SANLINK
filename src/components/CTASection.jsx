import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import Reveal from './Reveal.jsx';
import AmbientGlow from './AmbientGlow.jsx';
import { company, images } from '../data.js';

/**
 * Premium dark CTA band — network grid, dual accent glows, a glowing top
 * hairline and a gradient border frame.
 */
export default function CTASection() {
  return (
    <section className="section bg-base">
      <div className="container">
        <Reveal className="gradient-border relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-surface to-panel px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
          {/* Cinematic background image, held behind heavy overlays */}
          <img
            src={images.ctaNetwork}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface/80 via-base/70 to-panel/90" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-70" aria-hidden="true" />
          <AmbientGlow color="violet" className="-right-16 -top-20" size="30rem" />
          <AmbientGlow color="electric" className="-bottom-16 left-1/4 opacity-60" size="22rem" />
          <AmbientGlow color="orange" className="-bottom-16 -left-10" size="24rem" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" aria-hidden="true" />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
              Get Started
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-[3rem] lg:leading-[1.08]">
              Let&apos;s Build Better Business Communication.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Talk to our team about your technology or communication requirements, and
              explore a solution designed around your business.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Talk to an Expert
                <FiArrowRight aria-hidden="true" />
              </Link>
              <a href={company.phoneHref} className="btn-secondary">
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
