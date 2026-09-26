import Reveal from './Reveal.jsx';
import { trustStrip } from '../data.js';

/**
 * Premium trust/intro strip after the hero — a heading over a slow,
 * infinite marquee of capability labels with edge fades, giving the
 * dark base a subtle sense of motion without noise.
 */
export default function TrustStrip() {
  const items = [...trustStrip, 'Cloud Telephony', 'OTP & Messaging', 'Automation'];
  const loop = [...items, ...items];

  return (
    <section className="relative overflow-hidden bg-base py-14 sm:py-16">
      <div className="container relative">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted/70">
            Technology Built for a Connected World
          </p>
        </Reveal>

        <Reveal delay={80} className="mask-x-fade mt-8 overflow-hidden">
          <ul className="flex w-max animate-marquee items-center gap-10 sm:gap-14">
            {loop.map((item, i) => (
              <li key={`${item}-${i}`} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_10px_2px_rgba(255,107,26,0.5)]" aria-hidden="true" />
                <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.14em] text-white/80">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <div className="divider-line mt-14" />
    </section>
  );
}
