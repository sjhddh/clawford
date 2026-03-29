import { ChevronRight, ExternalLink, FlaskConical } from "lucide-react";
import skillShowcase from "@/data/skillShowcase";
import type { Lang, SkillShowcaseItem, Translations } from "@/types";

interface Props {
  lang: Lang;
  t: Translations;
}

const CLAWHUB_URL = "https://clawhub.ai/";

const TIER_LABELS: Record<1 | 2 | 3, string> = { 1: "1", 2: "2", 3: "3" };

function SkillCard({ skill, lang, t }: { skill: SkillShowcaseItem; lang: Lang; t: Translations }) {
  const Icon = skill.icon;

  return (
    <article className={`skill-card theme-${skill.theme}`}>
      <div className="skill-card-header">
        <div className="skill-card-icon">
          <Icon size={22} />
        </div>
        <span className={`tier-badge tier-${skill.tier}`}>
          {t.skillShowcase.tierLabel} {TIER_LABELS[skill.tier]}
        </span>
      </div>

      <div className="skill-card-category">{skill.category[lang]}</div>
      <h3>{skill.name[lang]}</h3>
      <p>{skill.description[lang]}</p>
    </article>
  );
}

export default function CourseCatalogSection({ lang, t }: Props) {
  return (
    <section id="courses" className="section">
      <div className="section-heading">
        <h2>{t.sections.courseCatalogTitle}</h2>
        <p>{t.sections.courseCatalogText}</p>
      </div>

      <div className="skill-showcase-grid">
        {skillShowcase.map((skill) => (
          <SkillCard key={skill.id} skill={skill} lang={lang} t={t} />
        ))}
      </div>

      <div className="skill-exam-logic">
        <FlaskConical size={18} />
        <div>
          <strong>{t.skillShowcase.examLogicTitle}</strong>
          <p>{t.skillShowcase.examLogicText}</p>
        </div>
      </div>

      <a className="button button-secondary" href={CLAWHUB_URL} target="_blank" rel="noreferrer">
        <ExternalLink size={16} />
        {t.skillShowcase.browseAll}
      </a>
    </section>
  );
}
