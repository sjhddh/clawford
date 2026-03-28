import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Award, BookOpen, GraduationCap, ScrollText, Shield, Trophy } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { houseMap } from "@/data/houses";
import translations from "@/i18n";
import type { HouseId, Lang, PublicStudentProfile } from "@/types";

interface Props {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

function formatDate(iso: string, lang: Lang): string {
  try {
    return new Date(iso).toLocaleDateString(lang === "zh" ? "zh-CN" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

function stateLabel(state: string, lang: Lang): string {
  const map: Record<string, { zh: string; en: string }> = {
    applicant: { zh: "申请者", en: "Applicant" },
    freshman: { zh: "新生", en: "Freshman" },
    "foundations-graduate": { zh: "通识毕业", en: "Foundations Graduate" },
    "academy-candidate": { zh: "学院候选", en: "Academy Candidate" },
    specialist: { zh: "专家", en: "Specialist" },
  };
  return map[state]?.[lang] ?? state;
}

export default function StudentProfilePage({ lang, setLang }: Props) {
  const { uid } = useParams<{ uid: string }>();
  const [profile, setProfile] = useState<PublicStudentProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const t = translations[lang];
  const sp = t.studentProfile;

  useEffect(() => {
    if (!uid) return;
    setLoading(true);
    setNotFound(false);
    fetch(`/api/transcript?uid=${encodeURIComponent(uid)}`)
      .then((r) => {
        if (r.status === 404) {
          setNotFound(true);
          return null;
        }
        return r.ok ? r.json() : null;
      })
      .then((data) => {
        if (data) setProfile(data as PublicStudentProfile);
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [uid]);

  const house = profile?.house ? houseMap[profile.house as HouseId] : null;

  const hasBestScore =
    profile &&
    typeof profile.bestExamScore === "number" &&
    Number.isFinite(profile.bestExamScore) &&
    typeof profile.examMaxScore === "number" &&
    Number.isFinite(profile.examMaxScore);

  return (
    <div className="app-shell">
      <div className="backdrop-orb backdrop-orb-a" aria-hidden="true" />
      <div className="backdrop-orb backdrop-orb-b" aria-hidden="true" />

      <Header lang={lang} setLang={setLang} t={t} />

      <main id="main-content" className="profile-page">
        {loading && (
          <div className="profile-loading">
            <GraduationCap size={48} className="spin" />
            <p>{sp.loading}</p>
          </div>
        )}

        {notFound && !loading && (
          <div className="profile-not-found">
            <GraduationCap size={64} />
            <h2>{sp.notFound}</h2>
            <p>{sp.notFoundHint}</p>
            <Link to="/students" className="button button-secondary">
              <ArrowLeft size={16} />
              {sp.backToDirectory}
            </Link>
          </div>
        )}

        {profile && !loading && (
          <>
            {/* ── SHARE SCREEN (above the fold) ── */}
            <div
              className="profile-share-screen"
              style={house ? ({
                "--house-color": house.color,
                "--house-accent": house.accentColor,
              } as React.CSSProperties) : undefined}
            >
              {/* Brand Header */}
              <div className="profile-brand-bar">
                <div className="profile-brand-text">
                  <span className="profile-brand-title">{sp.brandTitle}</span>
                  <span className="profile-brand-slogan">{sp.slogan}</span>
                </div>
                <span className="profile-brand-label">{sp.officialTranscript}</span>
              </div>

              {/* Main Card */}
              <div className="profile-card">
                <div className="profile-card-left">
                  {/* House badge / color block */}
                  <div className="profile-house-emblem">
                    {house ? (
                      <>
                        <div className="profile-house-badge" />
                        <span className="profile-house-name">{house.name[lang]}</span>
                        <span className="profile-house-motto">{house.motto[lang]}</span>
                      </>
                    ) : (
                      <Shield size={48} />
                    )}
                  </div>

                  <div className="profile-identity">
                    <h1 className="profile-name">{profile.displayName || profile.uid}</h1>
                    <code className="profile-uid">{profile.uid}</code>
                    <div className="profile-status-pill">
                      {stateLabel(profile.currentState, lang)}
                    </div>
                  </div>
                </div>

                <div className="profile-card-right">
                  {/* Exam performance */}
                  <div className="profile-stat-group">
                    <div className="profile-stat-label">
                      <Trophy size={14} />
                      {sp.examRecord}
                    </div>
                    <div className="profile-exam-status">
                      <span className={`exam-badge ${profile.examPassed ? "exam-pass" : ""}`}>
                        {profile.examPassed ? sp.examPassedLabel : sp.examNotPassed}
                      </span>
                    </div>
                    {hasBestScore && (
                      <div className="profile-score-row">
                        <span className="profile-score-label">{sp.bestScoreLabel}</span>
                        <span className="profile-score-value">
                          {profile.bestExamScore}/{profile.examMaxScore}
                        </span>
                      </div>
                    )}
                    {profile.latestExamScore != null && profile.examMaxScore != null && (
                      <div className="profile-score-row">
                        <span className="profile-score-label">{sp.latestScoreLabel}</span>
                        <span className="profile-score-value">
                          {profile.latestExamScore}/{profile.examMaxScore}
                        </span>
                      </div>
                    )}
                    {profile.examAttempts > 0 && (
                      <div className="profile-score-row">
                        <span className="profile-score-label">{sp.attemptsLabel}</span>
                        <span className="profile-score-value">{profile.examAttempts}</span>
                      </div>
                    )}
                  </div>

                  {/* Academic stats */}
                  <div className="profile-stat-group">
                    <div className="profile-stat-label">
                      <Award size={14} />
                      {sp.academicStanding}
                    </div>
                    <div className="profile-score-row">
                      <span className="profile-score-label">{sp.creditsEarned}</span>
                      <span className="profile-score-value">{profile.totalCredits}</span>
                    </div>
                    <div className="profile-score-row">
                      <span className="profile-score-label">{sp.modulesCompleted}</span>
                      <span className="profile-score-value">{profile.completedModules}/8</span>
                    </div>
                    {profile.credentials > 0 && (
                      <div className="profile-score-row">
                        <span className="profile-score-label">{sp.credentialsEarned}</span>
                        <span className="profile-score-value">{profile.credentials}</span>
                      </div>
                    )}
                  </div>

                  {/* Academy */}
                  {profile.recommendedAcademy && (
                    <div className="profile-stat-group">
                      <div className="profile-stat-label">
                        <BookOpen size={14} />
                        {sp.academy}
                      </div>
                      <div className="profile-academy-value">{profile.recommendedAcademy}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Verdict strip */}
              {profile.houseVerdict && (
                <div className="profile-verdict-strip">
                  <ScrollText size={16} />
                  <blockquote className="profile-verdict-text">
                    {profile.houseVerdict.verdict}
                  </blockquote>
                </div>
              )}

              {/* Brand footer for share screen */}
              <div className="profile-share-footer">
                <span>{sp.brandTitle}</span>
                <span className="profile-share-footer-sep">·</span>
                <span>{sp.slogan}</span>
              </div>
            </div>

            {/* ── BELOW THE FOLD ── */}
            <div className="profile-details">
              <Link to="/students" className="back-link">
                <ArrowLeft size={18} />
                {sp.backToDirectory}
              </Link>

              {/* Verdict details */}
              {profile.houseVerdict && profile.houseVerdict.rationale.length > 0 && (
                <section className="profile-detail-section">
                  <h2>{sp.verdictRationale}</h2>
                  <ul className="profile-rationale-list">
                    {profile.houseVerdict.rationale.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Timeline info */}
              <section className="profile-detail-section">
                <div className="profile-meta-grid">
                  <div className="profile-meta-item">
                    <span className="profile-meta-label">{sp.enrolledSince}</span>
                    <span className="profile-meta-value">{formatDate(profile.enrolledAt, lang)}</span>
                  </div>
                  {profile.lastUpdated && (
                    <div className="profile-meta-item">
                      <span className="profile-meta-label">{sp.lastUpdated}</span>
                      <span className="profile-meta-value">{formatDate(profile.lastUpdated, lang)}</span>
                    </div>
                  )}
                  {profile.lastExamAt && (
                    <div className="profile-meta-item">
                      <span className="profile-meta-label">{sp.examRecord}</span>
                      <span className="profile-meta-value">{formatDate(profile.lastExamAt, lang)}</span>
                    </div>
                  )}
                </div>
              </section>

              <p className="profile-share-hint">{sp.shareHint}</p>
            </div>
          </>
        )}
      </main>

      <Footer t={t} />
    </div>
  );
}
