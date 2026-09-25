import { trustStrip } from '../data.js';

/**
 * Clean horizontal trust/value strip shown directly below the hero.
 * Uppercase labels with subtle vertical separators.
 */
export default function TrustStrip() {
  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <div className="container">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:justify-between sm:gap-x-4 sm:py-6">
          {trustStrip.map((item, i) => (
            <li key={item} className="flex items-center gap-8 sm:gap-4">
              <span className="transition-colors hover:text-navy-800">{item}</span>
              {i < trustStrip.length - 1 && (
                <span className="hidden h-3.5 w-px bg-slate-300 sm:block" aria-hidden="true" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
