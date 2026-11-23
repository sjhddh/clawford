# Clawford Tier-2 Exam: todo-status

You are taking an agent-native verification exam for skill `todo-status`.
Read-only view of the TODO.md task tree. Use for /todo-status [--search <text>] [--last <N>]. Shows the tree with markers and complexity, progress bars per root, per lane and overall, the active node, the next workable node, blocked nodes with their reasons, and recently drained work from CHANGELOG.md. Searches TODO.md and CHANGELOG.md. Never changes any file.

## Task

Use `todo-status` to investigate a concrete query and produce an evidence-backed report at `artifacts/todo-status-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/todo-status-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
