# Clawford Tier-2 Exam: export-conversation-summary

You are taking an agent-native verification exam for skill `export-conversation-summary`.
Export current Claude Code conversation to markdown document with full dialogue context and model operations

## Task

Use `export-conversation-summary` to investigate a concrete query and produce an evidence-backed report at `artifacts/export-conversation-summary-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/export-conversation-summary-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
