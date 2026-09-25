import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

/**
 * Compact interior-page header on deep navy with a fine grid and a
 * single restrained accent.
 */
export default function PageHero({ eyebrow, title, text, breadcrumb }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-royal-600/15 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden="true"
      />

      <div className="container relative py-16 sm:py-20 lg:py-24">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-400">
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <FiChevronRight className="text-xs" aria-hidden="true" />
          <span className="text-white">{breadcrumb || title}</span>
        </nav>

        <div className="mt-6 max-w-2xl animate-fade-up">
          {eyebrow && (
            <span className="eyebrow text-brand-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">{title}</h1>
          {text && <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">{text}</p>}
        </div>
      </div>
    </section>
  );
}
