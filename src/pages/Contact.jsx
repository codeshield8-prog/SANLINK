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
        title="Let's Start a Conversation"
        text="Tell us about your communication or technology requirement and our team will help you find the right solution."
        breadcrumb="Contact"
      />

      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-5 lg:gap-10">
          {/* Left — details */}
          <Reveal className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
              Let&apos;s build better communication together
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Whether you&apos;re exploring a new communication channel, modernising your IT,
              or connecting your systems, we&apos;re here to help. Reach out and we&apos;ll get
              back to you promptly.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={company.phoneHref}
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-royal-300 hover:shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 text-royal-600 ring-1 ring-slate-200 transition-colors group-hover:bg-royal-600 group-hover:text-white group-hover:ring-royal-600">
                  <FiPhone className="text-xl" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">Phone</span>
                  <span className="block text-base font-semibold text-navy-900">{company.phone}</span>
                </span>
              </a>

              <a
                href={company.emailHref}
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-royal-300 hover:shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 text-royal-600 ring-1 ring-slate-200 transition-colors group-hover:bg-royal-600 group-hover:text-white group-hover:ring-royal-600">
                  <FiMail className="text-xl" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">Email</span>
                  <span className="block truncate text-base font-semibold text-navy-900">{company.email}</span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-soft">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 text-royal-600 ring-1 ring-slate-200">
                  <FiClock className="text-xl" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">Working Hours</span>
                  <span className="block text-base font-semibold text-navy-900">Mon – Sat, 10:00 AM – 7:00 PM</span>
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-xl bg-navy-900 p-5 text-slate-300">
              <FiMessageSquare className="mt-0.5 shrink-0 text-brand-400" aria-hidden="true" />
              <p className="text-sm leading-relaxed">
                Prefer to talk directly? Call us on{' '}
                <a href={company.phoneHref} className="font-semibold text-white underline-offset-2 hover:underline">
                  {company.phone}
                </a>{' '}
                and we&apos;ll be glad to help.
              </p>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={120} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
