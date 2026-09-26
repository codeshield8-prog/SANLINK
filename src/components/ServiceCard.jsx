import { FiArrowRight } from 'react-icons/fi';

/**
 * Premium dark service card: pointer-following spotlight, hover gradient
 * border, large number watermark, gradient icon tile and animated arrow.
 */
export default function ServiceCard({ service, onLearnMore }) {
  const Icon = service.icon;

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <button
      type="button"
      onClick={() => onLearnMore(service)}
      onMouseMove={handleMove}
      aria-label={`Learn more about ${service.title}`}
      className="spotlight gradient-border group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-surface/70 p-6 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-surface hover:shadow-card-lift"
    >
      {/* top accent line on hover */}
      <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

      {/* large number watermark */}
      <span className="pointer-events-none absolute -right-2 -top-4 font-display text-[5rem] font-bold leading-none text-white/[0.04] transition-colors duration-300 group-hover:text-brand-500/10" aria-hidden="true">
        {service.number}
      </span>

      <div className="relative flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] text-brand-400 shadow-inner transition-all duration-300 group-hover:border-brand-500/40 group-hover:text-brand-400">
          <Icon className="text-2xl" />
        </span>
      </div>

      <h3 className="relative mt-5 text-[1.05rem] font-bold text-white transition-colors duration-300 group-hover:text-white">
        {service.title}
      </h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted">{service.short}</p>

      <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400">
        Learn More
        <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </button>
  );
}
