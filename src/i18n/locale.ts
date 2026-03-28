import type { Lang } from "@/types";

const STORAGE_KEY = "clawford-lang";
const SUPPORTED: Lang[] = ["zh", "en", "ko"];

function matchBrowserLang(): Lang {
  if (typeof navigator === "undefined") return "en";
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const raw of langs) {
    const tag = raw.toLowerCase();
    if (tag.startsWith("zh")) return "zh";
    if (tag.startsWith("ko")) return "ko";
    if (tag.startsWith("en")) return "en";
  }
  return "en";
}

export function getInitialLang(): Lang {
  if (typeof localStorage !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored as Lang)) return stored as Lang;
  }
  return matchBrowserLang();
}

export function persistLang(lang: Lang): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch { /* quota or SSR */ }
}

export function syncDocumentLang(lang: Lang): void {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lang;
  }
}

export function dateLocale(lang: Lang): string {
  const map: Record<Lang, string> = { zh: "zh-CN", en: "en-US", ko: "ko-KR" };
  return map[lang];
}
