import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import Logo from './Logo.jsx';
import { navLinks } from '../data.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <div className="container">
        <nav
          className={`flex items-center justify-between gap-4 rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
            scrolled
              ? 'border-white/10 bg-base/80 shadow-card backdrop-blur-xl'
              : 'border-white/[0.06] bg-white/[0.02] backdrop-blur-md'
          }`}
        >
          <Logo />

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `link-underline text-[0.9rem] font-medium transition-colors duration-200 ${
                      isActive ? 'text-white after:w-full' : 'text-muted hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary px-5 py-2.5">
              Talk to an Expert
              <FiArrowUpRight className="text-base" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:bg-white/5 lg:hidden"
          >
            {open ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`mt-2 overflow-hidden rounded-2xl border border-white/10 bg-base/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
            open ? 'max-h-[30rem] opacity-100' : 'max-h-0 border-transparent opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive ? 'bg-white/5 text-brand-400' : 'text-muted hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-2">
              <Link to="/contact" className="btn-primary w-full">
                Talk to an Expert
                <FiArrowUpRight aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
