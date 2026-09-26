import PageHero from './PageHero.jsx';
import Reveal from './Reveal.jsx';

/**
 * Simple, professional legal page rendered from structured sections (dark).
 */
export default function LegalPage({ title, updated, intro, sections }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} text={intro} breadcrumb={title} />

      <section className="section bg-base">
        <div className="container max-w-3xl">
          {updated && <p className="text-sm text-muted/70">Last updated: {updated}</p>}

          <div className="mt-8 space-y-10">
            {sections.map((s) => (
              <Reveal as="section" key={s.heading}>
                <h2 className="text-xl font-bold text-white">{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-3 text-sm leading-relaxed text-muted">{p}</p>
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
