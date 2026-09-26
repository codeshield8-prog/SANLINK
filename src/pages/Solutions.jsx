import PageHero from '../components/PageHero.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';
import TelecomSection from '../components/TelecomSection.jsx';
import ITSection from '../components/ITSection.jsx';
import Process from '../components/Process.jsx';
import CTASection from '../components/CTASection.jsx';

export default function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Our Solutions"
        title="Technology & Communication Solutions"
        text="Solutions designed to help businesses communicate, connect and operate in a digitally connected world."
        breadcrumb="Solutions"
      />

      <section className="section bg-base">
        <div className="container">
          <ServicesGrid />
        </div>
      </section>

      <TelecomSection />
      <ITSection />
      <Process />
      <CTASection />
    </>
  );
}
