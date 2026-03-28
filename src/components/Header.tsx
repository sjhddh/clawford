import { Cpu, Globe, GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import translations from "@/i18n";
import type { Lang, Translations } from "@/types";

interface Props {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

interface NavItem {
  href: string;
  labelKey: keyof Translations["nav"];
}

const NAV_ITEMS: NavItem[] = [
  { href: "#structure", labelKey: "structure" },
  { href: "#sorting-hat", labelKey: "houses" },
  { href: "#courses", labelKey: "courses" },
  { href: "#journey", labelKey: "journey" },
  { href: "#assessment", labelKey: "assessment" },
];

export default function Header({ lang, setLang, t }: Props) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();
  const isStudentsPage = location.pathname === "/students";

  return (
    <header className="topbar">
      <Link className="brand" to="/" aria-label="Clawford University home">
        <div className="brand-mark">
          <GraduationCap size={18} />
        </div>
        <div>
          <div className="brand-title">Clawford</div>
          <div className="brand-subtitle">{t.common.brandSubtitle}</div>
        </div>
      </Link>

      <nav className="topnav" role="navigation" aria-label={t.nav.structure}>
        {!isStudentsPage &&
          NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {t.nav[item.labelKey]}
            </a>
          ))}
        <Link to="/students" className={isStudentsPage ? "active" : ""}>
          {t.nav.students}
        </Link>
      </nav>

      <div className="topbar-actions">
        <div className="lang-switcher" role="group" aria-label="Language switcher">
          {(Object.keys(translations) as Lang[]).map((language) => {
            const label: Record<Lang, string> = { zh: "中文", en: "EN", ko: "한국어" };
            return (
              <button
                key={language}
                type="button"
                className={language === lang ? "active" : ""}
                onClick={() => setLang(language)}
                aria-label={label[language]}
                aria-pressed={language === lang}
              >
                <Globe size={14} />
                {label[language]}
              </button>
            );
          })}
        </div>

        <a className="primary-link" href="/#terminal">
          <Cpu size={16} />
          {t.nav.connectAction}
        </a>

        <button
          type="button"
          className="mobile-nav-toggle"
          onClick={() => setMobileNavOpen((prev) => !prev)}
          aria-label={mobileNavOpen ? "✕" : "☰"}
          aria-expanded={mobileNavOpen}
        >
          {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileNavOpen && (
        <nav className="mobile-nav" role="navigation" aria-label="Mobile navigation">
          {!isStudentsPage &&
            NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMobileNavOpen(false)}>
                {t.nav[item.labelKey]}
              </a>
            ))}
          <Link to="/students" onClick={() => setMobileNavOpen(false)}>
            {t.nav.students}
          </Link>
          {!isStudentsPage && (
            <a href="#terminal" onClick={() => setMobileNavOpen(false)}>
              {t.nav.connect}
            </a>
          )}
        </nav>
      )}
    </header>
  );
}
