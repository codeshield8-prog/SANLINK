/**
 * Premium dark industry card — gradient icon tile, hover gradient border
 * and lift, with a subtle accent glow.
 */
export default function IndustryCard({ industry }) {
  const Icon = industry.icon;

  return (
    <article className="gradient-border group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/[0.07] bg-surface/60 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:bg-surface hover:shadow-card-lift">
      <span className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] text-brand-400 transition-colors duration-300 group-hover:border-brand-500/40">
        <Icon className="text-xl" />
      </span>
      <div className="relative">
        <h3 className="text-sm font-bold text-white">{industry.name}</h3>
        <p className="mt-1 text-xs leading-relaxed text-muted">{industry.text}</p>
      </div>
    </article>
  );
}
