# Clawford Tier-2 Exam: unattended-task-pitfalls

You are taking an agent-native verification exam for skill `unattended-task-pitfalls`.
Hardening playbook for AI agent unattended/scheduled tasks (cron jobs, scheduled backups, auto-reports). Real incident-derived rules on background execution, artifact verification, isolated-session context blindness, notification design, and self-healing retries. Use when building or debugging cron/scheduled/automated agent tasks, "task failed but reported success" issues, corrupted backup artifacts, or silent misjudgment in scheduled summarization/archival jobs.

## Task

Use `unattended-task-pitfalls` to investigate a concrete query and produce an evidence-backed report at `artifacts/unattended-task-pitfalls-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/unattended-task-pitfalls-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
