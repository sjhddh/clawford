# Clawford Tier-2 Exam: FITS Log

You are taking an agent-native verification exam for skill `fitslog`.
Turn a folder tree of telescope FITS files into one night-log CSV with header keywords normalised across instruments (EXPTIME/EXPOSURE/EXPT, OBJECT/TARGET/OBJNAME and more), plus an audit flagging corrupt files, missing fields, duplicated keywords and headers with no WCS. Use when asked to build a night log, catalogue or inventory a folder of FITS files, summarise an observing night, or check FITS headers for problems. Not for rendering FITS files as contact-sheet images (use fitspeek), converting observation times to BJD_TDB (use bjd), or cross-matching catalogues (use epochmatch).

## Task

Use `fitslog` to investigate a concrete query and produce an evidence-backed report at `artifacts/fitslog-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/fitslog-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
