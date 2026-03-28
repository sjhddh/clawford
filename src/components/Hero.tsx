import { BookOpen, Bot, Terminal } from "lucide-react";
import type { Translations } from "@/types";

const ASCII_LOGO = String.raw`      /==g           _
     //      >>>/---{_
     \`==::[[[[|:     _
             >>>\---{_
~~~~~~~~~~~~~~~~\___/~~~~~~~~~~~~~~~~`;

interface Props {
  t: Translations;
}

export default function Hero({ t }: Props) {
  return (
    <section id="hero" className="hero section">
      <div className="hero-copy">
        <div className="eyebrow">
          <Bot size={14} />
          {t.hero.badge}
        </div>
        <h1>
          <span>{t.hero.title1}</span>
          <strong>{t.hero.title2}</strong>
        </h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <p className="hero-quote">{t.hero.quote}</p>
        <div className="hero-actions">
          <a href="#structure" className="button button-primary">
            <Terminal size={18} />
            {t.hero.primary}
          </a>
          <a href="#courses" className="button button-secondary">
            <BookOpen size={18} />
            {t.hero.secondary}
          </a>
        </div>
      </div>

      <div className="hero-panel">
        <div className="panel">
          <div className="panel-header">
            <span>{t.hero.panelFile}</span>
            <span>{t.hero.panelTab}</span>
          </div>
          <pre className="ascii-art" aria-label="ASCII art of a claw above a ford">
            {ASCII_LOGO}
          </pre>
          <p className="panel-note">{t.hero.panelNote}</p>
        </div>
      </div>
    </section>
  );
}
