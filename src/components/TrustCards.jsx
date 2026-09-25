import Reveal from './Reveal.jsx';
import { trustCards } from '../data.js';

/**
 * Compact trust cards for the intro section below the hero.
 */
export default function TrustCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {trustCards.map((card, i) => {
        const Icon = card.icon;
        return (
          <Reveal
            as="article"
            key={card.title}
            delay={i * 70}
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-royal-300 hover:shadow-card"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-50 text-royal-600 ring-1 ring-slate-200 transition-colors duration-300 group-hover:bg-royal-600 group-hover:text-white group-hover:ring-royal-600">
              <Icon className="text-xl" />
            </span>
            <h3 className="mt-4 text-base font-bold text-navy-900">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.text}</p>
          </Reveal>
        );
      })}
    </div>
  );
}
