import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Hero from '../components/Hero.jsx';
import TrustStrip from '../components/TrustStrip.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import TrustCards from '../components/TrustCards.jsx';
import AboutSection from '../components/AboutSection.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';
import IndustryCard from '../components/IndustryCard.jsx';
import Reveal from '../components/Reveal.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Capabilities from '../components/Capabilities.jsx';
import Process from '../components/Process.jsx';
import CTASection from '../components/CTASection.jsx';
import { industries } from '../data.js';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />

      {/* Intro */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Why Sanlink"
            title="Technology That Keeps Your Business Connected"
            text="We combine telecommunications and information technology to deliver dependable solutions that support modern business communication and digital operations."
          />
          <div className="mt-12">
            <TrustCards />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-slate-50">
        <div className="container">
          <SectionHeading
            eyebrow="What We Do"
            title="Technology & Communication Solutions"
            text="Solutions designed to help businesses communicate, connect and operate in a digitally connected world."
          />
          <div className="mt-12">
            <ServicesGrid limit={8} />
          </div>
          <Reveal className="mt-10 text-center">
            <Link to="/services" className="btn-secondary">
              View All Services
              <FiArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section className="section bg-white">
        <AboutSection />
      </section>

      {/* Capabilities */}
      <Capabilities />

      {/* Industries */}
      <section className="section bg-slate-50">
        <div className="container">
          <SectionHeading
            eyebrow="Industries"
            title="Industries We Serve"
            text="Communication and technology solutions tailored to the needs of a wide range of sectors."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.slice(0, 6).map((industry, i) => (
              <Reveal key={industry.name} delay={(i % 3) * 70}>
                <IndustryCard industry={industry} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link to="/industries" className="btn-secondary">
              Explore All Industries
              <FiArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why Sanlink */}
      <section className="section bg-white">
        <WhyChooseUs />
      </section>

      {/* Process */}
      <Process />

      <CTASection />
    </>
  );
}
