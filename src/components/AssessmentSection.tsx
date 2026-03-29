import { certificationFunnel } from "@/data/assessment";
import type { Lang, Translations } from "@/types";

interface Props {
  lang: Lang;
  t: Translations;
}

export default function AssessmentSection({ lang, t }: Props) {
  return (
    <section id="assessment" className="section">
      <article className="card">
        <div className="section-heading tight">
          <h2>{t.sections.examTitle}</h2>
          <p>{t.sections.examText}</p>
        </div>
        <div className="evolution-list">
          {certificationFunnel.map((tier) => {
            const Icon = tier.icon;
            return (
              <div key={tier.tier.en} className="evolution-item">
                <Icon size={16} />
                <div>
                  <strong>{tier.tier[lang]}</strong>
                  <p>{tier.summary[lang]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
}
