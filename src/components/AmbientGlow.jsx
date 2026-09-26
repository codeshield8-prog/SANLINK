/**
 * Reusable large blurred ambient glow for the dark background.
 * Purely decorative — kept low-opacity so the site reads as "expensive,
 * not colourful". Colours limited to violet/indigo/magenta + orange.
 */
const palette = {
  violet: 'bg-violet-600/20',
  indigo: 'bg-indigo-600/20',
  magenta: 'bg-fuchsia-600/15',
  orange: 'bg-brand-500/15',
  electric: 'bg-electric-500/15',
};

export default function AmbientGlow({ color = 'violet', className = '', size = '32rem' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-[120px] ${palette[color]} ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
