import Reveal from './Reveal.jsx';

/**
 * Reusable section heading for the dark theme: optional uppercase
 * eyebrow, title and supporting text.
 */
export default function SectionHeading({ eyebrow, title, text, align = 'center', className = '' }) {
  const alignment = align === 'left' ? 'text-left' : 'mx-auto text-center';
  const maxWidth = align === 'left' ? '' : 'max-w-2xl';

  return (
    <Reveal className={`${alignment} ${maxWidth} ${className}`}>
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-px w-6 bg-brand-500/60" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">{title}</h2>
      {text && <p className="mt-4 text-base leading-relaxed text-muted sm:text-[1.05rem]">{text}</p>}
    </Reveal>
  );
}
