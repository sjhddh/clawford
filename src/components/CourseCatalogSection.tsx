import { ChevronDown, ChevronRight, GitPullRequest, ShieldCheck, Clock3, User } from "lucide-react";
import { useState } from "react";
import courses from "@/data/courses";
import type { ElectiveCourse, Lang, Translations } from "@/types";

interface Props {
  lang: Lang;
  t: Translations;
}

const CONTRIBUTING_GUIDE_URL = "https://github.com/sjhddh/clawford/blob/main/docs/CONTRIBUTING-COURSES.md";

function CourseCard({ course, lang, t }: { course: ElectiveCourse; lang: Lang; t: Translations }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = course.icon;

  return (
    <article className={`course-catalog-card theme-${course.theme}`}>
      <div className="course-catalog-header">
        <div className="course-catalog-icon">
          <Icon size={22} />
        </div>
        <div className="course-catalog-status">
          <span className={`status-badge status-${course.status}`}>
            {course.status === "reviewed" ? (
              <>
                <ShieldCheck size={12} />
                {t.ui.reviewed}
              </>
            ) : (
              <>
                <Clock3 size={12} />
                {t.ui.pending}
              </>
            )}
          </span>
        </div>
      </div>

      <div className="course-catalog-meta">
        <span>{course.code}</span>
        <span>{t.ui.level}: {course.difficulty}</span>
        <span>{course.language}</span>
        <span>{t.ui.duration}: {course.totalDuration}</span>
        <span>{t.ui.credits}: {course.credits}</span>
      </div>

      <h3>{course.title[lang]}</h3>
      <p>{course.summary[lang]}</p>

      <div className="course-catalog-professor">
        <User size={14} />
        <span>
          {course.professor.displayName}
          {course.professor.organization && (
            <span className="professor-org"> · {course.professor.organization}</span>
          )}
        </span>
      </div>

      {course.lessons.length > 0 && (
        <div className="course-catalog-lessons">
          <button
            type="button"
            className="lessons-toggle"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label={`${t.ui.lessons} (${course.lessons.length})`}
          >
            {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            {t.ui.lessons} ({course.lessons.length})
          </button>

          {expanded && (
            <ol className="lessons-list">
              {course.lessons.map((lesson) => (
                <li key={lesson.number}>
                  <span className="lesson-code">{lesson.code}</span>
                  <span className="lesson-title">{lesson.title[lang]}</span>
                  <span className="lesson-duration">{lesson.duration}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}

      <button type="button" className="button button-secondary" disabled title={t.ui.comingSoon}>
        <ChevronRight size={18} />
        {t.ui.comingSoon}
      </button>
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

      <div className="course-catalog-container">
        {courses.length === 0 ? (
          <div className="course-catalog-empty">
            <p>{t.common.emptyCourseCatalog}</p>
          </div>
        ) : (
          <div className="course-catalog-grid">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} lang={lang} t={t} />
            ))}
          </div>
        )}
      </div>

      <details className="course-authoring-card">
        <summary className="course-authoring-title">
          <GitPullRequest size={18} />
          <span>{t.courseAuthoring.title}</span>
          <ChevronRight size={16} className="course-authoring-chevron" />
        </summary>
        <p>{t.courseAuthoring.body}</p>
        <ol className="course-authoring-steps">
          <li>{t.courseAuthoring.step1}</li>
          <li>{t.courseAuthoring.step2}</li>
          <li>{t.courseAuthoring.step3}</li>
          <li>{t.courseAuthoring.step4}</li>
          <li>{t.courseAuthoring.step5}</li>
        </ol>
        <p className="course-authoring-outcome">{t.courseAuthoring.outcome}</p>
        <p className="terminal-hint">{t.courseAuthoring.runtimeNote}</p>
        <a className="button button-secondary" href={CONTRIBUTING_GUIDE_URL} target="_blank" rel="noreferrer">
          <ChevronRight size={18} />
          {t.courseAuthoring.guide}
        </a>
      </details>
    </section>
  );
}
