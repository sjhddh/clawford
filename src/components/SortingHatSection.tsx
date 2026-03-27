import { useEffect, useRef, useState } from "react";
import { AtSign, Check, GitFork, Pencil, Wallet } from "lucide-react";
import { houseMap, houses } from "@/data/houses";
import type { HouseId, HouseVerdict, Lang, LinkedId, Translations } from "@/types";

interface Props {
  lang: Lang;
  t: Translations;
  uid: string | null;
  displayName: string;
  house: HouseId | null;
  houseVerdict: HouseVerdict | null;
  linkedIds: LinkedId[];
  onUpdateDisplayName: (name: string) => void;
}

const PROVIDER_ICONS = {
  github: GitFork,
  x: AtSign,
  wallet: Wallet,
} as const;

const PROVIDER_LABELS: Record<LinkedId["provider"], string> = {
  github: "GitHub",
  x: "X / Twitter",
  wallet: "Wallet",
};

export default function SortingHatSection({
  lang,
  t,
  uid,
  displayName,
  house,
  houseVerdict,
  linkedIds,
  onUpdateDisplayName,
}: Props) {
  const [editingName, setEditingName] = useState(false);
  const [draftName, setDraftName] = useState(displayName);
  const [saved, setSaved] = useState(false);
  const savedTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const nameInput = editingName ? draftName : displayName;

  useEffect(() => {
    return () => {
      if (savedTimer.current) clearTimeout(savedTimer.current);
    };
  }, []);

  const isSorted = house != null;
  const sh = t.sortingHat;

  const houseData = isSorted ? houseMap[house] : null;

  const handleSaveName = () => {
    const trimmed = draftName.trim();
    if (!trimmed || trimmed === displayName) {
      setEditingName(false);
      return;
    }
    onUpdateDisplayName(trimmed);
    setEditingName(false);
    setSaved(true);
    if (savedTimer.current) clearTimeout(savedTimer.current);
    savedTimer.current = setTimeout(() => setSaved(false), 2000);
  };

  return (
    <section id="sorting-hat" className="section">
      <div className="section-heading">
        <h2>{sh.title}</h2>
        <p>{sh.subtitle}</p>
      </div>

      {isSorted && houseData && uid && (
        <div className="sorting-hat-result">
          <div
            className="house-reveal-card"
            style={
              {
                "--house-color": houseData.color,
                "--house-accent": houseData.accentColor,
              } as React.CSSProperties
            }
          >
            <div className="house-reveal-header">
              <div className="house-color-badge" />
              <div>
                <h3 className="house-reveal-name">{houseData.name[lang]}</h3>
                <span className="house-reveal-name-alt">
                  {lang === "zh" ? houseData.name.en : houseData.name.zh}
                </span>
              </div>
            </div>
            <p className="house-reveal-motto">"{houseData.motto[lang]}"</p>
            <p className="house-reveal-trait">{houseData.trait[lang]}</p>
            <p className="house-reveal-description">
              {houseData.description[lang]}
            </p>

            {houseVerdict && (
              <div className="house-reveal-verdict">
                <p>
                  <strong>{lang === "zh" ? "分院判词：" : "Sorting Verdict:"}</strong>{" "}
                  {houseVerdict.verdict}
                </p>
                {houseVerdict.rationale.length > 0 && (
                  <ul>
                    {houseVerdict.rationale.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <div className="house-reveal-id">
              <span>{sh.uid}: </span>
              <code>{uid}</code>
            </div>

            <div className="house-reveal-display-name">
              <span>{sh.displayNameLabel}: </span>
              {editingName ? (
                <span className="display-name-edit">
                  <input
                    type="text"
                    className="sorting-hat-input sorting-hat-input-sm"
                    value={nameInput}
                    onChange={(e) => setDraftName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSaveName()}
                    placeholder={sh.displayNamePlaceholder}
                  />
                  <button
                    type="button"
                    className="button button-small button-primary"
                    onClick={handleSaveName}
                  >
                    <Check size={14} />
                    {sh.displayNameSave}
                  </button>
                </span>
              ) : (
                <span className="display-name-view">
                  <strong>{displayName}</strong>
                  <button
                    className="button-icon"
                    onClick={() => {
                      setDraftName(displayName);
                      setEditingName(true);
                    }}
                    aria-label="Edit display name"
                  >
                    <Pencil size={14} />
                  </button>
                  {saved && (
                    <span className="saved-indicator">
                      <Check size={12} /> {sh.displayNameSaved}
                    </span>
                  )}
                </span>
              )}
            </div>
          </div>

          {linkedIds.length > 0 && (
            <div className="card sorting-hat-link-card">
              <h3>{sh.linkTitle}</h3>
              <p>{sh.linkHint}</p>
              <div className="linked-ids-list">
                {linkedIds.map((lid) => {
                  const Icon = PROVIDER_ICONS[lid.provider];
                  return (
                    <span
                      key={`${lid.provider}:${lid.value}`}
                      className="badge-chip"
                    >
                      <Icon size={12} />
                      {lid.value}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {!isSorted && (
        <div className="sorting-hat-locked">
          <p>
            {lang === "zh"
              ? "完成 foundations 并通过执行关卡后，分院帽会给出最终学院与终身判词。"
              : "Complete foundations and pass the execution gate to receive your final house and lifelong sorting verdict."}
          </p>
        </div>
      )}

      <div className="houses-overview">
        <div className="houses-grid">
          {houses.map((h) => (
            <div
              key={h.id}
              className={`house-card${isSorted && house === h.id ? " house-card-active" : ""}`}
              style={
                {
                  "--house-color": h.color,
                  "--house-accent": h.accentColor,
                } as React.CSSProperties
              }
            >
              <div className="house-card-header">
                <div className="house-color-dot" />
                <strong>{h.name[lang]}</strong>
              </div>
              <span className="house-card-trait">{h.trait[lang]}</span>
              <p className="house-card-motto">"{h.motto[lang]}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
