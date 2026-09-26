import { FiBriefcase, FiCloud, FiUsers, FiArrowRight, FiArrowDown } from 'react-icons/fi';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import AmbientGlow from './AmbientGlow.jsx';
import { telecomFlow } from '../data.js';

/**
 * "Communication Infrastructure for Modern Businesses" — a horizontal
 * pipeline (Business → Cloud → Messaging/Voice/API → Customer) on desktop
 * with an animated data line, collapsing to a vertical flow on mobile.
 */
export default function TelecomSection() {
  const { channels, cloud } = telecomFlow;
  const CloudIcon = cloud.icon;

  return (
    <section className="relative overflow-hidden bg-base py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-50" aria-hidden="true" />
      <AmbientGlow color="electric" className="-left-24 top-1/4" size="30rem" />
      <AmbientGlow color="orange" className="-right-20 bottom-10" size="22rem" />

      <div className="container relative">
        <SectionHeading
          eyebrow="Telecommunication"
          title="Communication Infrastructure for Modern Businesses"
          text="A connected communication layer that links your business to your customers through messaging, voice and APIs."
        />

        {/* Desktop horizontal pipeline */}
        <Reveal className="mt-16 hidden lg:block">
          <div className="relative rounded-3xl border border-white/[0.07] bg-surface/40 p-10 backdrop-blur-sm">
            {/* animated flow line */}
            <div className="pointer-events-none absolute inset-x-16 top-[6.5rem] h-px" aria-hidden="true">
              <div className="h-full w-full bg-gradient-to-r from-brand-500/20 via-electric-500/40 to-violet-500/20" />
              <div
                className="absolute top-0 h-px w-24 bg-gradient-to-r from-transparent via-white to-transparent animate-marquee"
                style={{ animationDuration: '3.5s' }}
              />
            </div>

            <div className="relative grid grid-cols-[1fr_auto_1fr_auto_1fr] items-start gap-4">
              <PipeStage icon={FiBriefcase} label="Business" caption="Your organisation & systems" />
              <Arrow />
              <PipeStage icon={CloudIcon} label="Cloud Layer" caption="Sanlink infrastructure" highlight />
              <Arrow />
              <PipeStage icon={FiUsers} label="Customer" caption="Reached reliably, on time" />
            </div>

            {/* channels row under the cloud */}
            <div className="relative mt-10 grid grid-cols-3 gap-4">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.label}
                    className="gradient-border group flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-panel/60 px-5 py-4 transition-colors hover:bg-panel"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] text-electric-400">
                      <Icon className="text-lg" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">{c.label}</p>
                      <p className="text-xs text-muted">Channel</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Mobile vertical flow */}
        <Reveal className="mx-auto mt-14 max-w-md lg:hidden">
          <div className="flex flex-col items-stretch">
            <FlowNode icon={FiBriefcase} label="Business" caption="Your organisation & systems" />
            <Connector />
            <FlowNode icon={CloudIcon} label="Cloud Communication Layer" caption="Sanlink infrastructure" highlight />
            <Connector />
            <div className="grid grid-cols-3 gap-3">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex flex-col items-center gap-2 rounded-2xl border border-white/[0.07] bg-surface/70 px-2 py-4 text-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-electric-400">
                      <Icon className="text-lg" />
                    </span>
                    <span className="text-xs font-semibold text-white">{c.label}</span>
                  </div>
                );
              })}
            </div>
            <Connector />
            <FlowNode icon={FiUsers} label="Customer" caption="Reached reliably, on time" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PipeStage({ icon: Icon, label, caption, highlight = false }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span
        className={`flex h-20 w-20 items-center justify-center rounded-2xl ring-1 ${
          highlight
            ? 'bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-glow-brand ring-white/20'
            : 'border border-white/10 bg-panel/80 text-white ring-white/5 backdrop-blur-sm'
        }`}
      >
        <Icon className="text-3xl" />
      </span>
      <p className="mt-4 text-base font-bold text-white">{label}</p>
      <p className="mt-1 max-w-[12rem] text-xs leading-relaxed text-muted">{caption}</p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex h-20 items-center justify-center" aria-hidden="true">
      <FiArrowRight className="text-xl text-electric-400/70" />
    </div>
  );
}

function FlowNode({ icon: Icon, label, caption, highlight = false }) {
  return (
    <div
      className={`flex w-full items-center gap-4 rounded-2xl border px-5 py-4 backdrop-blur-sm ${
        highlight ? 'border-brand-500/30 bg-brand-500/[0.06] shadow-glow-brand' : 'border-white/[0.07] bg-surface/70'
      }`}
    >
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${
          highlight ? 'bg-gradient-to-br from-brand-500 to-brand-600 text-white' : 'border border-white/10 bg-white/[0.04] text-electric-400'
        }`}
      >
        <Icon className="text-xl" />
      </span>
      <div>
        <p className="text-sm font-bold text-white">{label}</p>
        <p className="text-xs text-muted">{caption}</p>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex h-10 items-center justify-center" aria-hidden="true">
      <div className="relative h-full w-px bg-gradient-to-b from-brand-500/50 to-electric-500/30">
        <FiArrowDown className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-xs text-brand-400" />
      </div>
    </div>
  );
}
