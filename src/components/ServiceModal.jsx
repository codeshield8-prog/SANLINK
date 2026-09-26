import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiX, FiCheck, FiArrowRight } from 'react-icons/fi';

/**
 * Accessible dark service detail modal: Overview, Key Benefits, Use
 * Cases, How It Helps and a contact CTA.
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
      className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <div className="relative max-h-[92vh] w-full max-w-2xl animate-fade-up overflow-y-auto rounded-t-2xl border border-white/10 bg-surface shadow-card sm:rounded-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/[0.07] bg-surface/95 px-6 py-5 backdrop-blur sm:px-8">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-white">
              <Icon className="text-xl" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-400">Solution {service.number}</p>
              <h2 id="service-modal-title" className="text-xl font-bold text-white">{service.title}</h2>
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-muted transition-colors hover:bg-white/5 hover:text-white"
          >
            <FiX className="text-lg" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-7 px-6 py-6 sm:px-8">
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted/70">Overview</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{service.overview}</p>
          </section>

          <div className="grid gap-7 sm:grid-cols-2">
            <section>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted/70">Key Benefits</h3>
              <ul className="mt-3 space-y-2.5">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-muted">
                    <FiCheck className="mt-0.5 shrink-0 text-brand-400" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted/70">Use Cases</h3>
              <ul className="mt-3 space-y-2.5">
                {service.useCases.map((u) => (
                  <li key={u} className="flex items-start gap-2.5 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" aria-hidden="true" />
                    {u}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted/70">How It Helps Businesses</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/90">{service.helps}</p>
          </section>

          <div className="flex flex-col gap-3 border-t border-white/[0.07] pt-6 sm:flex-row">
            <Link to="/contact" className="btn-primary" onClick={onClose}>
              Talk to an Expert
              <FiArrowRight aria-hidden="true" />
            </Link>
            <button type="button" onClick={onClose} className="btn-secondary">
              Back to Solutions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
