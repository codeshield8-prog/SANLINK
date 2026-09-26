import PageHero from '../components/PageHero.jsx';
import Capabilities from '../components/Capabilities.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Process from '../components/Process.jsx';
import EverythingConnected from '../components/EverythingConnected.jsx';
import CTASection from '../components/CTASection.jsx';

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="From Communication to Digital Infrastructure"
        text="How Sanlink takes your business from first connection to a scalable, integrated digital foundation."
        breadcrumb="Capabilities"
      />

      <Capabilities />

      <section className="section bg-base">
        <WhyChooseUs showCta={false} />
      </section>

      <Process />
      <EverythingConnected />
      <CTASection />
    </>
  );
}
