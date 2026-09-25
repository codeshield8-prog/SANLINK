import { FiTarget, FiCompass, FiHeart } from 'react-icons/fi';
import PageHero from '../components/PageHero.jsx';
import AboutSection from '../components/AboutSection.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import Capabilities from '../components/Capabilities.jsx';
import Process from '../components/Process.jsx';
import CTASection from '../components/CTASection.jsx';

const pillars = [
  {
    icon: FiTarget,
    title: 'Our Focus',
    text: 'Delivering practical technology and communication solutions that solve real business problems and support day-to-day operations.',
  },
  {
    icon: FiCompass,
    title: 'Our Approach',
    text: 'We start with your requirements and build reliable, scalable solutions around them — keeping things clear, maintainable and dependable.',
  },
  {
    icon: FiHeart,
    title: 'Our Commitment',
    text: 'Responsive support and a long-term partnership mindset, so your communication and technology keep working as your business grows.',
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Sanlink Infotech"
        text="A technology-driven company connecting businesses through reliable telecommunication and information technology."
      />

      <section className="section bg-white">
        <AboutSection showCta={false} />
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Built Around Your Business"
            text="Three principles guide how we work with every organisation we partner with."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal as="article" key={pillar.title} delay={i * 90} className="rounded-xl border border-slate-200 bg-white p-7 shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-white">
                    <Icon className="text-xl" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy-900">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Capabilities />
      <Process />
      <CTASection />
    </>
  );
}
