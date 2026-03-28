import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Award, BookOpen, ChevronRight, GraduationCap } from "lucide-react";
import { houseMap } from "@/data/houses";
import type { HouseId, Lang, StudentWallEntry, Translations } from "@/types";

interface Props {
  lang: Lang;
  t: Translations;
}

export default function StudentWallSection({ lang, t }: Props) {
  const [students, setStudents] = useState<StudentWallEntry[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    fetch("/api/students")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.students) setStudents(data.students);
      })
      .catch(() => setFetchError(true))
      .finally(() => setLoaded(true));
  }, []);

  const sw = t.studentWall;

  const top = useMemo(
    () => [...students].sort((a, b) => b.totalCredits - a.totalCredits).slice(0, 6),
    [students],
  );

  return (
    <section id="student-wall" className="section">
      <div className="section-heading">
        <h2>{sw.title}</h2>
        <p>{sw.subtitle}</p>
      </div>

      {fetchError && (
        <div className="student-wall-empty">
          <p>{lang === "zh" ? "加载学生数据失败。" : "Failed to load student data."}</p>
        </div>
      )}

      {loaded && !fetchError && top.length === 0 && (
        <div className="student-wall-empty">
          <GraduationCap size={32} />
          <p>{sw.noStudents}</p>
        </div>
      )}

      {top.length > 0 && (
        <>
          <div className="student-wall-grid">
            {top.map((s) => {
              const house = s.house ? houseMap[s.house] : null;
              const hasBestScore =
                typeof s.bestExamScore === "number" &&
                Number.isFinite(s.bestExamScore) &&
                typeof s.examMaxScore === "number" &&
                Number.isFinite(s.examMaxScore);
              const bestScore =
                hasBestScore
                  ? `${s.bestExamScore}/${s.examMaxScore}`
                  : sw.noScore;
              return (
                <Link
                  to={`/students/${s.uid}`}
                  key={s.uid}
                  className="student-wall-card student-wall-card-link"
                  style={
                    house
                      ? ({
                          "--house-color": house.color,
                          "--house-accent": house.accentColor,
                        } as React.CSSProperties)
                      : undefined
                  }
                >
                  {house && <div className="student-wall-house-stripe" />}
                  <div className="student-wall-name">
                    {s.displayName || s.uid}
                  </div>
                  <code className="student-wall-uid">{s.uid}</code>
                  {house && (
                    <span className="student-wall-house">
                      {house.name[lang]}
                    </span>
                  )}
                  <div className="student-wall-stats">
                    <span>
                      <Award size={14} />
                      {s.totalCredits} {sw.totalCredits}
                    </span>
                    <span>
                      <BookOpen size={14} />
                      {s.completedModules} {sw.completedModules}
                    </span>
                    <span className={`exam-badge ${s.examPassed ? "exam-pass" : ""}`}>
                      {s.examPassed ? sw.passed : sw.inProgress} · {bestScore}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="student-wall-cta">
            <Link to="/students" className="button button-secondary">
              {sw.viewAll}
              <ChevronRight size={18} />
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
