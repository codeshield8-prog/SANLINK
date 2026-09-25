import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiArrowUpRight } from 'react-icons/fi';
import Logo from './Logo.jsx';
import { company } from '../data.js';

const footerCols = [
  {
    heading: 'Services',
    links: [
      { label: 'Bulk SMS Solutions', to: '/services' },
      { label: 'Cloud Communication', to: '/services' },
      { label: 'Voice & Telephony', to: '/services' },
      { label: 'IT Solutions', to: '/services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Why Sanlink', to: '/why-sanlink' },
      { label: 'Industries', to: '/industries' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

export default function Footer() {
  const year = 2026;

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-slate-400">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30" aria-hidden="true" />

      <div className="container relative">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo variant="footer" />
            <p className="mt-6 text-sm font-semibold text-white">{company.legalName}</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed">
              Telecommunication &amp; Information Technology Solutions
            </p>
          </div>

          {/* Nav columns */}
          {footerCols.map((col) => (
            <div key={col.heading} className="lg:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">{col.heading}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">Contact</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <a href={company.phoneHref} className="inline-flex w-fit items-center gap-3 transition-colors hover:text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] text-brand-400">
                  <FiPhone />
                </span>
                {company.phone}
              </a>
              <a href={company.emailHref} className="inline-flex w-fit items-center gap-3 transition-colors hover:text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] text-brand-400">
                  <FiMail />
                </span>
                {company.email}
              </a>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 transition-all hover:-translate-y-0.5 hover:bg-royal-50"
            >
              Talk to Us
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs sm:flex-row">
          <p className="text-center sm:text-left">
            © {year} {company.legalName}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
