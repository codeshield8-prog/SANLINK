import { Link } from 'react-router-dom';
import logo from '../assets/sanlink-logo.webp';
import { company } from '../data.js';

/**
 * Official SANLINK logo. Renders the exact provided asset — never
 * recoloured or restyled. `variant="footer"` sits on the dark navy
 * footer, so we drop it onto a subtle white plate to keep the mark
 * crisp and legible without altering the artwork itself.
 */
export default function Logo({ variant = 'default', className = '' }) {
  const onDark = variant === 'footer';

  return (
    <Link
      to="/"
      aria-label={`${company.legalName} — home`}
      className={`inline-flex items-center ${className}`}
    >
      <img
        src={logo}
        alt={`${company.legalName} logo`}
        width="200"
        height="60"
        className={
          onDark
            ? 'h-11 w-auto rounded-md bg-white px-3 py-1.5 shadow-sm sm:h-12'
            : 'h-9 w-auto sm:h-10'
        }
      />
    </Link>
  );
}
