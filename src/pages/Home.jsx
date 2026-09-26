import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Hero from '../components/Hero.jsx';
import TrustStrip from '../components/TrustStrip.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import AboutSection from '../components/AboutSection.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';
import TelecomSection from '../components/TelecomSection.jsx';
import ITSection from '../components/ITSection.jsx';
import KeyFeatures from '../components/KeyFeatures.jsx';
import IndustryCard from '../components/IndustryCard.jsx';
import Reveal from '../components/Reveal.jsx';
import Capabilities from '../components/Capabilities.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Process from '../components/Process.jsx';
import EverythingConnected from '../components/EverythingConnected.jsx';
import FAQ from '../components/FAQ.jsx';
import CTASection from '../components/CTASection.jsx';
import { industries } from '../data.js';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />

      {/* About */}
      <section className="section bg-base">
        <AboutSection />
      </section>

      {/* Solutions */}
      <section className="section bg-base">
        <div className="container">
          <SectionHeading
            eyebrow="Solutions"
            title="Technology & Communication Solutions"
            text="An elegant architecture of solutions designed to help businesses communicate, connect and operate in a digitally connected world."
          />
          <div className="mt-14">
            <ServicesGrid />
          </div>
          <Reveal className="mt-10 text-center">
            <Link to="/solutions" className="btn-secondary">
              Explore Solution Details
              <FiArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Telecom feature */}
      <TelecomSection />

      {/* IT feature */}
      <ITSection />

      {/* Key features */}
      <KeyFeatures />

      {/* Industries */}
      <section className="section bg-base">
        <div className="container">
          <SectionHeading
            eyebrow="Industries"
            title="Technology for Different Business Needs"
            text="Communication and technology solutions tailored to the demands of a wide range of sectors."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Capabilities */}
      <Capabilities />

      {/* Why Sanlink */}
      <section className="section bg-base">
        <WhyChooseUs />
      </section>

      {/* Process */}
      <Process />

      {/* Signature visual */}
      <EverythingConnected />

      {/* FAQ */}
      <FAQ />

      <CTASection />
    </>
  );
}
