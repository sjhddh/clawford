import { useMemo, useState } from "react";
import { ChevronRight, ExternalLink, FlaskConical, Search } from "lucide-react";
import skillShowcase from "@/data/skillShowcase";
import type { Lang, SkillShowcaseItem, Translations } from "@/types";

interface Props {
  lang: Lang;
  t: Translations;
}

const CLAWHUB_URL = "https://clawhub.ai/";

const TIER_LABELS: Record<1 | 2 | 3, string> = { 1: "1", 2: "2", 3: "3" };

interface RegistrySkillItem {
  slug: string;
  displayName: string;
  description: string;
  sourceMappings: string[];
  tier: 1 | 2 | 3;
  version: string | null;
}

interface RegistryResponse {
  items: RegistrySkillItem[];
  nextCursor: string | null;
  coverage?: {
    stats?: {
      catalogCount?: number;
      registeredCount?: number;
      coveragePercent?: number;
    };
  } | null;
}

async function loadRegisteredSkills(): Promise<{
  items: RegistrySkillItem[];
  coverage: RegistryResponse["coverage"];
}> {
  let cursor: string | null = null;
  const items: RegistrySkillItem[] = [];
  let coverage: RegistryResponse["coverage"] = null;

  do {
    const query = new URLSearchParams({ limit: "500" });
    if (cursor) query.set("cursor", cursor);
    const res = await fetch(`/api/skills?${query.toString()}`);
    if (!res.ok) {
      throw new Error("Failed to load registry");
    }
    const payload = await res.json() as RegistryResponse;
    items.push(...payload.items);
    if (payload.coverage) coverage = payload.coverage;
    cursor = payload.nextCursor;
  } while (cursor);

  return { items, coverage };
}

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
  const [query, setQuery] = useState("weather");
  const [registryItems, setRegistryItems] = useState<RegistrySkillItem[]>([]);
  const [registryCoverage, setRegistryCoverage] = useState<RegistryResponse["coverage"]>(null);
  const [registryLoading, setRegistryLoading] = useState(false);
  const [registryError, setRegistryError] = useState<string | null>(null);

  const filteredRegistryItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const base = normalizedQuery
      ? registryItems.filter((item) =>
        item.slug.toLowerCase().includes(normalizedQuery)
        || item.displayName.toLowerCase().includes(normalizedQuery)
        || item.sourceMappings.some((mapping) => mapping.toLowerCase().includes(normalizedQuery)),
      )
      : registryItems;
    return base.slice(0, 10);
  }, [query, registryItems]);

  const handleLoadRegistry = async () => {
    if (registryLoading) return;
    setRegistryLoading(true);
    setRegistryError(null);
    try {
      const payload = await loadRegisteredSkills();
      setRegistryItems(payload.items);
      setRegistryCoverage(payload.coverage ?? null);
    } catch {
      setRegistryError(t.skillShowcase.registryUnavailable);
    } finally {
      setRegistryLoading(false);
    }
  };

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

      <div className="skill-registry-panel">
        <div className="skill-registry-header">
          <div>
            <h3>{t.skillShowcase.registryTitle}</h3>
            <p>{t.skillShowcase.registryText}</p>
          </div>
          <button type="button" className="button button-secondary" onClick={handleLoadRegistry} disabled={registryLoading}>
            <Search size={16} />
            {registryLoading ? t.skillShowcase.registryLoading : t.skillShowcase.registryLoad}
          </button>
        </div>

        <p className="skill-registry-hint">{t.skillShowcase.registryHint}</p>

        <label className="skill-registry-label" htmlFor="skill-registry-search">
          {t.skillShowcase.registrySearchLabel}
        </label>
        <input
          id="skill-registry-search"
          className="skill-registry-input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t.skillShowcase.registrySearchPlaceholder}
        />

        {registryCoverage?.stats && (
          <p className="skill-registry-meta">
            {t.skillShowcase.registryCoverage}: {registryCoverage.stats.registeredCount ?? 0} / {registryCoverage.stats.catalogCount ?? 0} ({registryCoverage.stats.coveragePercent ?? 0}%)
          </p>
        )}

        {registryError && <p className="skill-registry-error">{registryError}</p>}

        {registryItems.length > 0 && (
          <>
            <p className="skill-registry-meta">{t.skillShowcase.registryExactSlug}</p>
            {filteredRegistryItems.length > 0 ? (
              <div className="skill-registry-results">
                {filteredRegistryItems.map((item) => (
                  <article key={item.slug} className="skill-registry-result">
                    <div>
                      <strong>{item.displayName || item.slug}</strong>
                      <p>{item.slug}</p>
                      <p>{item.version ?? "unversioned"}</p>
                      {item.sourceMappings[0] && <p>{item.sourceMappings[0]}</p>}
                    </div>
                    <span className={`tier-badge tier-${item.tier}`}>
                      {t.skillShowcase.tierLabel} {TIER_LABELS[item.tier]}
                    </span>
                  </article>
                ))}
              </div>
            ) : (
              <p className="skill-registry-empty">{t.skillShowcase.registryEmpty}</p>
            )}
          </>
        )}
      </div>

      <a className="button button-secondary" href={CLAWHUB_URL} target="_blank" rel="noreferrer">
        <ExternalLink size={16} />
        {t.skillShowcase.browseAll}
      </a>
    </section>
  );
}
