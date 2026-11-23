# Clawford Tier-2 Exam: tonight

You are taking an agent-native verification exam for skill `tonight`.
Plan one night of telescope observing from a CSV of targets (name, ra, dec, optional priority), a site given as coordinates, and a date. It works out each target's observable window (airmass under 2), minimum airmass, best time and Moon separation, and returns a ranked plan with reasons for unobservable targets. Use when asked what is observable tonight, to plan an observing session, rank targets for a night, or find when a target is up from a site. Not for time conversion to BJD_TDB (use bjd), cross-matching catalogues (use epochmatch), or FITS night logs (use fitslog).

## Task

Use `tonight` to investigate a concrete query and produce an evidence-backed report at `artifacts/tonight-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tonight-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
