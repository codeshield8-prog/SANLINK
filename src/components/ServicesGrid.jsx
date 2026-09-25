import { useState } from 'react';
import Reveal from './Reveal.jsx';
import ServiceCard from './ServiceCard.jsx';
import ServiceModal from './ServiceModal.jsx';
import { services } from '../data.js';

/**
 * Renders the services grid and owns the detail-modal state.
 * `limit` restricts how many cards are shown (e.g. a home preview).
 */
export default function ServicesGrid({ limit }) {
  const [active, setActive] = useState(null);
  const list = limit ? services.slice(0, limit) : services;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((service, i) => (
          <Reveal key={service.id} delay={(i % 4) * 70}>
            <ServiceCard service={service} onLearnMore={setActive} />
          </Reveal>
        ))}
      </div>

      <ServiceModal service={active} onClose={() => setActive(null)} />
    </>
  );
}
