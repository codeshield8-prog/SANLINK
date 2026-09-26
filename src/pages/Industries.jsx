import PageHero from '../components/PageHero.jsx';
import IndustryCard from '../components/IndustryCard.jsx';
import Reveal from '../components/Reveal.jsx';
import CTASection from '../components/CTASection.jsx';
import { industries } from '../data.js';

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Technology for Different Business Needs"
        text="From startups to enterprises, we deliver communication and technology solutions tailored to the demands of each sector."
        breadcrumb="Industries"
      />

      <section className="section bg-base">
        <div className="container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((industry, i) => (
              <Reveal key={industry.name} delay={(i % 4) * 60}>
                <IndustryCard industry={industry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
