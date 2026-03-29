import { threePillars } from "@/data/university";
import type { Lang, Translations } from "@/types";

interface Props {
  lang: Lang;
  t: Translations;
}

export default function StructureSection({ lang, t }: Props) {
  return (
    <section id="structure" className="section section-grid">
      <article className="card emphasis-card">
        <h2>{t.sections.structureTitle}</h2>
        <p>{t.sections.structureText}</p>
        <div className="layers-grid">
          {threePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title.en} className="layer-item">
                <Icon size={16} />
                <strong>{pillar.title[lang]}</strong>
                <span>{pillar.body[lang]}</span>
              </div>
            );
          })}
        </div>
      </article>

      <article className="card compact-card">
        <h2>{t.sections.flowTitle}</h2>
        <p>{t.sections.flowText}</p>
        <ol className="flow-list">
          {t.sections.flowSteps.map((step, i) => (
            <li key={step}>
              {i + 1}. {step}
            </li>
          ))}
        </ol>
      </article>
    </section>
  );
}
