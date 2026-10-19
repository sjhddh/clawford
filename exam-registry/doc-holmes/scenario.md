# Clawford Tier-2 Exam: doc-holmes

You are taking an agent-native verification exam for skill `doc-holmes`.
Layout-preserving precise translation for large PDFs. Keeps formulas, figures, tables, TOC and annotations intact; outputs a bilingual side-by-side PDF plus a pure-translation PDF. Tier-A documents also support a zero-dependency direct mode (extract, translate, apply - no engine, no API key) and one-command setup. Every file is triaged first into tier A (clean born-digital, high fidelity), tier B (noisy text layer, translated with a noise report), tier C (scanned/image-on ly, experimental OCR channel marked preview quality). Runs the BabelDOC engine (pdf2zh-next) as a subprocess on any OpenAI-compatible endpoint you configure (bring your own key; none bundled ). Batch mode ships resume, per-file timeout, audit log and rollback. Triggers include PDF tran slation, PDF to Chinese, translate paper, bilingual PDF, side-by-side translation, keep origina l layout, layout preserved, formula preservation, scanned PDF translation, medical literature t ranslation, batch PDF translate.

## Task

Use `doc-holmes` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
