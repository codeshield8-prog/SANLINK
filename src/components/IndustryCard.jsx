/**
 * Clean, restrained industry card — simple icon, name and one line.
 */
export default function IndustryCard({ industry }) {
  const Icon = industry.icon;

  return (
    <article className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-royal-300 hover:shadow-card">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-royal-600 ring-1 ring-slate-200 transition-colors duration-300 group-hover:bg-royal-600 group-hover:text-white group-hover:ring-royal-600">
        <Icon className="text-lg" />
      </span>
      <div>
        <h3 className="text-sm font-bold text-navy-900">{industry.name}</h3>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">{industry.text}</p>
      </div>
    </article>
  );
}
