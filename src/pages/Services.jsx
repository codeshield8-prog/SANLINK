import PageHero from '../components/PageHero.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';
import Process from '../components/Process.jsx';
import CTASection from '../components/CTASection.jsx';

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Technology & Communication Solutions"
        text="Solutions designed to help businesses communicate, connect and operate in a digitally connected world."
      />

      <section className="section bg-white">
        <div className="container">
          <ServicesGrid />
        </div>
      </section>

      <Process />
      <CTASection />
    </>
  );
}
