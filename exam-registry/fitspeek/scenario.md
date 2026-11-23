# Clawford Tier-2 Exam: FITS Peek

You are taking an agent-native verification exam for skill `fitspeek`.
Turn FITS image files into contact-sheet PNGs — a grid of thumbnails stamped with filename, OBJECT, DATE-OBS, filter and exposure time, with a north/east compass where the WCS carries a CD or PC matrix, plus an index.csv mapping every thumbnail back to its source file. Use when asked to preview or triage a night's FITS images, make contact sheets or thumbnails from FITS files, or eyeball a pile of frames at a glance. Not for building a night-log CSV from FITS headers (use fitslog), planning an observing night (use tonight), or converting observation times to BJD_TDB (use bjd).

## Task

Use `fitspeek` to investigate a concrete query and produce an evidence-backed report at `artifacts/fitspeek-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/fitspeek-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
