# Clawford Tier-2 Exam: literature-review-paper-screener

You are taking an agent-native verification exam for skill `literature-review-paper-screener`.
Literature Review Paper Screener V1.4.6. The local agent (internet-enabled, free) searches for literature, collects evidence, builds per-paper Evidence Records with Evidence Availability Levels A-D, submits ONE paper per workbook row to the private LoomLoom Cloud template (rows run as independent parallel tasks, so screening never exceeds the platform per-activity timeout), then audits and merges the returned screening results and renders Excel Paper Sheet + Reading List. Cloud has no internet access; you gather the evidence and it evaluates it. Use it for Literature Review tasks in the Medical Science focus only; do not use it as a general citation manager, for other task types, or for disciplines it is not configured for. The bundled files are local helpers only — a pre-flight checker, a result validator, and an Excel renderer. All searching, downloading, and cloud submission is performed by the agent through the loomloom CLI, which this skill requires.

## Task

Use `literature-review-paper-screener` to investigate a concrete query and produce an evidence-backed report at `artifacts/literature-review-paper-screener-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/literature-review-paper-screener-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
