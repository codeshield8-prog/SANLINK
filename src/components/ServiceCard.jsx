import { FiArrowRight } from 'react-icons/fi';

/**
 * Premium service card: number, icon, title, short description and an
 * arrow. Hover applies a subtle border change, slight elevation, an
 * accent line and a small arrow shift — restrained, not flashy.
 */
export default function ServiceCard({ service, onLearnMore }) {
  const Icon = service.icon;

  return (
    <button
      type="button"
      onClick={() => onLearnMore(service)}
      aria-label={`Learn more about ${service.title}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-6 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-royal-300 hover:shadow-card"
    >
      {/* Top accent line on hover */}
      <span
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-royal-600 to-cyan-500 transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 text-royal-600 ring-1 ring-slate-200 transition-colors duration-300 group-hover:bg-royal-600 group-hover:text-white group-hover:ring-royal-600">
          <Icon className="text-xl" />
        </span>
        <span className="font-display text-sm font-bold tracking-widest text-slate-300 transition-colors duration-300 group-hover:text-royal-400">
          {service.number}
        </span>
      </div>

      <h3 className="mt-5 text-[1.05rem] font-bold text-navy-900">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.short}</p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-700">
        Learn More
        <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </button>
  );
}
