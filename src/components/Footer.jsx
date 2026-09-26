import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiArrowUpRight } from 'react-icons/fi';
import Logo from './Logo.jsx';
import { company } from '../data.js';

const footerCols = [
  {
    heading: 'Solutions',
    links: [
      { label: 'Telecommunication', to: '/solutions' },
      { label: 'Bulk SMS', to: '/solutions' },
      { label: 'Voice & Cloud Telephony', to: '/solutions' },
      { label: 'IT Solutions', to: '/solutions' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Industries', to: '/industries' },
      { label: 'Capabilities', to: '/capabilities' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

export default function Footer() {
  const year = 2026;

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-base text-muted">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-30" aria-hidden="true" />

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

          {/* Nav */}
          {footerCols.map((col) => (
            <div key={col.heading} className="lg:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">{col.heading}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="transition-colors hover:text-white">{link.label}</Link>
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
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-brand-400">
                  <FiPhone />
                </span>
                {company.phone}
              </a>
              <a href={company.emailHref} className="inline-flex w-fit items-center gap-3 transition-colors hover:text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-brand-400">
                  <FiMail />
                </span>
                {company.email}
              </a>
            </div>
            <Link to="/contact" className="btn-primary mt-6 px-5 py-2.5">
              Talk to an Expert
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] py-6 text-xs sm:flex-row">
          <p className="text-center sm:text-left">
            © {year} {company.legalName}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="transition-colors hover:text-white">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
