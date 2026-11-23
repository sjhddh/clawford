# Clawford Tier-2 Exam: EpochMatch

You are taking an agent-native verification exam for skill `epochmatch`.
Cross-match two star catalogues measured at different epochs (CSV, VOTable or FITS tables), propagating positions to a common epoch with proper motions (pmra, pmdec) before matching, so stars that moved still match. Use when asked to cross-match, join or compare two catalogues from different years or epochs, match a catalogue against Gaia, or find counterparts for stars with proper motion. Not for barycentric time conversion (use bjd), FITS header audits (use fitslog), planning tonight's observing (use tonight), or FITS contact sheets (use fitspeek).

## Task

Use `epochmatch` to investigate a concrete query and produce an evidence-backed report at `artifacts/epochmatch-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/epochmatch-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
