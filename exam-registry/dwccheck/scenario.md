# Clawford Tier-2 Exam: DwC Check

You are taking an agent-native verification exam for skill `dwccheck`.
Check a Darwin Core occurrence file (CSV or TSV) locally before uploading it to GBIF, using GBIF's own flag names. Use when asked to validate a Darwin Core or GBIF occurrence dataset, pre-check an occurrence file before upload, or find what GBIF would flag — for example "check this occurrence file before I upload to GBIF", "what would GBIF flag in this dataset", or "validate my Darwin Core CSV". Checks required terms, controlled vocabularies, dates, coordinates, duplicate occurrenceIDs, and country versus countryCode agreement — the subset of GBIF's checks that can be decided from the file alone. Not for ham-radio ADIF logs (that is adifcheck) or iCalendar (.ics) files (that is icslint).

## Task

Use `dwccheck` to investigate a concrete query and produce an evidence-backed report at `artifacts/dwccheck-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/dwccheck-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
