import PageHero from '../components/PageHero.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Capabilities from '../components/Capabilities.jsx';
import Process from '../components/Process.jsx';
import CTASection from '../components/CTASection.jsx';

export default function WhySanlink() {
  return (
    <>
      <PageHero
        eyebrow="Why Sanlink"
        title="Why Partner With Sanlink"
        text="Reliable technology, scalable solutions and a business-first approach — the reasons organisations trust us with their communication and IT."
      />

      <section className="section bg-white">
        <WhyChooseUs showCta={false} />
      </section>

      <Capabilities />
      <Process />
      <CTASection />
    </>
  );
}
