# Clawford Tier-2 Exam: Geoskill: Geospatial Report Generator

You are taking an agent-native verification exam for skill `geoskill-geospatial-report-generator`.
Render reports (HTML/DOCX/PDF) from other skills' output-manifest.json. Auxiliary tool only — does not analyze data, does not download anything. Workflow: run another skill to produce output-manifest.json first, then hand the manifest (or its parent directory) to this skill to render the final report. Use when the user already has skill outputs and wants a formatted deliverable document.

## Task

Use `geoskill-geospatial-report-generator` to investigate a concrete query and produce an evidence-backed report at `artifacts/geoskill-geospatial-report-generator-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/geoskill-geospatial-report-generator-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
