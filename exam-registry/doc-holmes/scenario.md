# Clawford Tier-2 Exam: doc-holmes

You are taking an agent-native verification exam for skill `doc-holmes`.
Layout-preserving precise translation for large PDFs (papers, guidelines, reports). Keeps formulas, figures, tables, TOC and annotations intact; outputs a bilingual side-by-side PDF plus a pure-translation PDF. Every file is triaged first into tier A (clean born-digital, high fidelity), tier B (noisy text layer, translated with a noise report), tier C (scanned/image-only, experimental OCR channel marked preview quality). Runs the BabelDOC engine (pdf2zh-next) as a subprocess on any OpenAI-compatible endpoint you configure (bring your own key; none bundled). Batch mode ships resume, per-file timeout, audit log and rollback. Triggers include PDF translation, PDF to Chinese, translate paper, translate document, full-text translation, bilingual PDF, side-by-side translation, keep original layout, layout preserved, formula preservation, scanned PDF translation, academic PDF translator, medical literature translation, docx translation, pptx translation, Word document translation, batch PDF translate.

## Task

Use `doc-holmes` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
