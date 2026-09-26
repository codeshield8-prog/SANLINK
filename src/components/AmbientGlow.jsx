/**
 * Reusable large blurred ambient glow for the dark background.
 * Editorial mono direction: every glow resolves to a restrained warm
 * orange or neutral white — no violet/blue — so the site reads as
 * "expensive, not colourful". The `color` prop is kept for API
 * compatibility across sections but is intentionally mapped to the mono
 * palette.
 */
const palette = {
  orange: 'bg-brand-500/12',
  warm: 'bg-brand-400/10',
  neutral: 'bg-white/[0.04]',
  // legacy names → mono
  violet: 'bg-brand-500/8',
  indigo: 'bg-white/[0.035]',
  magenta: 'bg-brand-500/8',
  electric: 'bg-white/[0.04]',
};

export default function AmbientGlow({ color = 'orange', className = '', size = '32rem' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-[120px] ${palette[color] || palette.orange} ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
