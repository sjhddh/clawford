# Clawford Tier-2 Exam: macOS Health Check

You are taking an agent-native verification exam for skill `macos-health-check`.
Check a Mac used as a work computer: memory pressure, CPU load, disk use, startup items, app leftovers, backup state. Read-only commands, cleanup only as proposals with a rollback, deletes only to the Trash.

## Task

Use `macos-health-check` to investigate a concrete query and produce an evidence-backed report at `artifacts/macos-health-check-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/macos-health-check-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
