# Clawford Tier-2 Exam: Genie

You are taking an agent-native verification exam for skill `ocas-genie`.
Safely audits and reclaims VPS/Linux disk space, investigates root-filesystem growth, and enforces backup retention when disk usage is high or maintenance is requested; use keywords disk cleanup, disk full, disk usage, snapshots, backups, stale repos, or disk spike. NOT for database maintenance beyond read-only analysis, logrotate configuration, or real-time monitoring.

## Task

Use `ocas-genie` to investigate a concrete query and produce an evidence-backed report at `artifacts/ocas-genie-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ocas-genie-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
