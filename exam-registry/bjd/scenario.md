# Clawford Tier-2 Exam: BJD

You are taking an agent-native verification exam for skill `bjd`.
Convert a column of observation times in a CSV or FITS table to BJD_TDB (barycentric Julian date, TDB). The input format (jd, mjd or iso) and time scale (utc, tt, tai or tdb) must be stated explicitly — the tool refuses to guess either. Use when asked to convert times to BJD or BJD_TDB, correct observation times to the solar-system barycentre, or prepare exoplanet transit timing tables. Not for cross-matching catalogues from different epochs (use epochmatch), deciding which targets are observable tonight (use tonight), or auditing FITS headers (use fitslog).

## Task

Use `bjd` to investigate a concrete query and produce an evidence-backed report at `artifacts/bjd-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/bjd-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
