import { FiPhone, FiMail, FiClock, FiMessageSquare } from 'react-icons/fi';
import PageHero from '../components/PageHero.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Reveal from '../components/Reveal.jsx';
import { company } from '../data.js';

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk"
        text="Tell us about your technology or communication requirement and our team will help you find the right solution."
        breadcrumb="Contact"
      />

      <section className="section bg-base">
        <div className="container grid gap-12 lg:grid-cols-5 lg:gap-10">
          {/* Left */}
          <Reveal className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Let&apos;s talk about your requirement</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Whether you&apos;re exploring a new communication channel, modernising your IT,
              or connecting your systems, we&apos;re here to help. Reach out and we&apos;ll get
              back to you promptly.
            </p>

            <div className="mt-8 space-y-4">
              <a href={company.phoneHref} className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-surface/60 p-4 transition-all hover:-translate-y-0.5 hover:border-brand-500/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-brand-400 transition-colors group-hover:border-brand-500/40">
                  <FiPhone className="text-xl" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted/70">Phone</span>
                  <span className="block text-base font-semibold text-white">{company.phone}</span>
                </span>
              </a>

              <a href={company.emailHref} className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-surface/60 p-4 transition-all hover:-translate-y-0.5 hover:border-brand-500/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-brand-400 transition-colors group-hover:border-brand-500/40">
                  <FiMail className="text-xl" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted/70">Email</span>
                  <span className="block truncate text-base font-semibold text-white">{company.email}</span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-surface/60 p-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-brand-400">
                  <FiClock className="text-xl" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted/70">Working Hours</span>
                  <span className="block text-base font-semibold text-white">Mon – Sat, 10:00 AM – 7:00 PM</span>
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-brand-500/20 bg-brand-500/[0.06] p-5 text-muted">
              <FiMessageSquare className="mt-0.5 shrink-0 text-brand-400" aria-hidden="true" />
              <p className="text-sm leading-relaxed">
                Prefer to talk directly? Call us on{' '}
                <a href={company.phoneHref} className="font-semibold text-white underline-offset-2 hover:underline">{company.phone}</a>{' '}
                and we&apos;ll be glad to help.
              </p>
            </div>
          </Reveal>

          {/* Right */}
          <Reveal delay={120} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
