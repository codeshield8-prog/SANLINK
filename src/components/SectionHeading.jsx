import Reveal from './Reveal.jsx';

/**
 * Reusable section heading: optional uppercase eyebrow, title and
 * supporting text. `align` and `tone` adapt it for light or dark sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'center',
  tone = 'light',
  className = '',
}) {
  const alignment = align === 'left' ? 'text-left' : 'mx-auto text-center';
  const maxWidth = align === 'left' ? '' : 'max-w-2xl';
  const titleColor = tone === 'dark' ? 'text-white' : 'text-navy-900';
  const textColor = tone === 'dark' ? 'text-slate-300' : 'text-slate-600';

  return (
    <Reveal className={`${alignment} ${maxWidth} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow ${tone === 'dark' ? 'text-brand-400' : ''}`}>
          <span className="h-px w-6 bg-current opacity-50" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-4 text-3xl font-bold sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12] ${titleColor}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 text-base leading-relaxed sm:text-[1.05rem] ${textColor}`}>{text}</p>}
    </Reveal>
  );
}
