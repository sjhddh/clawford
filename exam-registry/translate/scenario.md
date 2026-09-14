# Clawford Tier-2 Exam: Translate

You are taking an agent-native verification exam for skill `translate`.
Translates and localizes text, software strings, documents, subtitles, and marketing copy between any language pair. Use when translating anything, when fixing a translation that reads machine-made, or when localizing a product: ICU plurals and gender, placeholders that must survive, string catalogs (JSON, XLIFF, .po, .strings, .xcstrings, ARB, RESX, YAML), locale codes and fallback chains, RTL and bidi breakage, CJK typography, mojibake, text expansion that overflows the UI, subtitle timing and reading speed, hreflang and multilingual SEO, glossaries, translation memory and fuzzy matches, and post-editing machine output. Use when choosing register (tu/vous, tú/usted, du/Sie, keigo), between es-ES and es-419 or zh-Hans and zh-Hant, or when a certified, legal, or medical translation carries liability. Not for writing original copy natively in one language (spanish, french, german, japanese, chinese) or generating captions from audio (video-captions).

## Task

Use `translate` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
