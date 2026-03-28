import type { Lang, Translations } from "@/types";
import en from "./en";
import ko from "./ko";
import zh from "./zh";

const translations: Record<Lang, Translations> = { zh, en, ko };

export default translations;
