import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import AmbientGlow from './AmbientGlow.jsx';

/**
 * Compact interior-page header on the dark base with grid + ambient glow.
 */
export default function PageHero({ eyebrow, title, text, breadcrumb }) {
  return (
    <section className="relative overflow-hidden bg-base pt-28 sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-60" aria-hidden="true" />
      <AmbientGlow color="violet" className="-right-24 -top-16" size="32rem" />
      <AmbientGlow color="orange" className="-left-24 top-20 opacity-60" size="20rem" />

      <div className="container relative pb-16 sm:pb-20">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted">
          <Link to="/" className="transition-colors hover:text-white">Home</Link>
          <FiChevronRight className="text-xs" aria-hidden="true" />
          <span className="text-white">{breadcrumb || title}</span>
        </nav>

        <div className="mt-6 max-w-2xl animate-fade-up">
          {eyebrow && (
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">{title}</h1>
          {text && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{text}</p>}
        </div>
      </div>
      <div className="divider-line" />
    </section>
  );
}
