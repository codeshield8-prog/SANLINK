import { Link } from 'react-router-dom';
import logoFull from '../assets/sanlink-logo.webp';
import logoMark from '../assets/sanlink-mark.webp';
import { company } from '../data.js';

/**
 * Official SANLINK logo — used exactly as provided (no recolour, no
 * filters). The artwork sits on a clean white plate so the orange +
 * charcoal logo stays crisp and highly visible on the dark site.
 *
 * variant: 'default' (navbar) | 'footer' | 'mark' (compact icon plate)
 */
export default function Logo({ variant = 'default', className = '' }) {
  const isMark = variant === 'mark';
  const src = isMark ? logoMark : logoFull;

  return (
    <Link
      to="/"
      aria-label={`${company.legalName} — home`}
      className={`inline-flex items-center ${className}`}
    >
      <span className="inline-flex items-center rounded-xl bg-white px-3 py-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.25)] ring-1 ring-white/10">
        <img
          src={src}
          alt={`${company.legalName} logo`}
          width={isMark ? 40 : 150}
          height={40}
          className={isMark ? 'h-7 w-auto' : 'h-7 w-auto sm:h-8'}
        />
      </span>
    </Link>
  );
}
