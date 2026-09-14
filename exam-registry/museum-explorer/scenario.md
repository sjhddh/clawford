# Clawford Tier-2 Exam: museum-explorer

You are taking an agent-native verification exam for skill `museum-explorer`.
Helps plan museum visits, explain exhibits during visits, and summarize visits afterward. Invoke only for an explicit request in one of these three scenarios.

## Task

Use `museum-explorer` to investigate a concrete query and produce an evidence-backed report at `artifacts/museum-explorer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/museum-explorer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
