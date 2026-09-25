import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiX, FiCheck, FiArrowRight } from 'react-icons/fi';

/**
 * Accessible service detail modal: Overview, Key Benefits, Use Cases,
 * How It Helps and a contact CTA. Closes on Escape, backdrop click or
 * the close button.
 */
export default function ServiceModal({ service, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!service) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [service, onClose]);

  if (!service) return null;
  const Icon = service.icon;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <div className="relative max-h-[92vh] w-full max-w-2xl animate-fade-up overflow-y-auto rounded-t-2xl bg-white shadow-card sm:rounded-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-200 bg-white/95 px-6 py-5 backdrop-blur sm:px-8">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-royal-600 text-white">
              <Icon className="text-xl" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-royal-600">
                Service {service.number}
              </p>
              <h2 id="service-modal-title" className="text-xl font-bold text-navy-900">
                {service.title}
              </h2>
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50"
          >
            <FiX className="text-lg" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-7 px-6 py-6 sm:px-8">
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Overview</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.overview}</p>
          </section>

          <div className="grid gap-7 sm:grid-cols-2">
            <section>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Key Benefits</h3>
              <ul className="mt-3 space-y-2.5">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <FiCheck className="mt-0.5 shrink-0 text-royal-600" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Use Cases</h3>
              <ul className="mt-3 space-y-2.5">
                {service.useCases.map((u) => (
                  <li key={u} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
                    {u}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              How It Helps Businesses
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-800">{service.helps}</p>
          </section>

          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row">
            <Link to="/contact" className="btn-primary" onClick={onClose}>
              Discuss This Service
              <FiArrowRight aria-hidden="true" />
            </Link>
            <button type="button" onClick={onClose} className="btn-secondary">
              Back to Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
