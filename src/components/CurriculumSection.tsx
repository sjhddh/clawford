import { CheckCircle2, ChevronRight } from "lucide-react";
import curriculum from "@/data/curriculum";
import type { Lang, Translations } from "@/types";

interface Props {
  lang: Lang;
  t: Translations;
  completedModules: string[];
  isConnected: boolean;
  onStudy: (moduleId: string) => void;
}

export default function CurriculumSection({ lang, t, completedModules, isConnected, onStudy }: Props) {
  const completed = new Set(completedModules.map((item) => item.toUpperCase()));

  return (
    <section id="curriculum" className="section">
      <div className="section-heading">
        <h2>{t.sections.curriculumTitle}</h2>
        <p>{t.sections.curriculumText}</p>
      </div>

      {!isConnected && (
        <p className="curriculum-locked-hint" role="status">
          <a href="#terminal">{t.sections.curriculumLocked}</a>
        </p>
      )}

      <div className="course-grid">
        {curriculum.map((mod) => {
          const Icon = mod.icon;
          const missingPrerequisites = mod.prerequisites.filter((item) => !completed.has(item.toUpperCase()));
          const isLearned = completed.has(mod.code);
          const isBlocked = !isLearned && missingPrerequisites.length > 0;
          const buttonTitle = !isConnected
            ? t.sections.curriculumLocked
            : isBlocked
              ? t.ui.prerequisiteHint.replace("{modules}", missingPrerequisites.join(", "))
              : undefined;

          return (
            <article key={mod.id} className={`course-card theme-${mod.theme}`}>
              <div className="course-icon">
                <Icon size={22} />
              </div>
              <div className="course-meta">
                <span>{mod.code}</span>
                <span>
                  {t.ui.level}: {mod.level[lang]}
                </span>
                <span>
                  {t.ui.duration}: {mod.duration}
                </span>
                <span>
                  {t.ui.credits}: {mod.credits}
                </span>
              </div>
              <h3>{mod.title[lang]}</h3>
              <p>{mod.summary[lang]}</p>
              {isBlocked && (
                <p className="course-prerequisite-hint">
                  {t.ui.prerequisiteHint.replace("{modules}", missingPrerequisites.join(", "))}
                </p>
              )}
              <button
                type="button"
                className={`button ${isLearned ? "button-success" : "button-secondary"}`}
                onClick={() => onStudy(mod.code)}
                disabled={isLearned || !isConnected || isBlocked}
                title={buttonTitle}
                aria-label={
                  isLearned
                    ? `${mod.title[lang]} - ${t.ui.learned}`
                    : isBlocked
                      ? `${mod.title[lang]} - ${t.ui.prerequisiteHint.replace("{modules}", missingPrerequisites.join(", "))}`
                      : `${t.ui.learn}: ${mod.title[lang]}`
                }
              >
                {isLearned ? <CheckCircle2 size={18} /> : <ChevronRight size={18} />}
                {isLearned ? t.ui.learned : t.ui.learn}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
