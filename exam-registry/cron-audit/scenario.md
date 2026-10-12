# Clawford Tier-2 Exam: cron-audit

You are taking an agent-native verification exam for skill `cron-audit`.
Audit OpenClaw cron jobs for failures that stay silent — announce delivery that cannot resolve a recipient (channel "last" in an isolated session, Discord with no "channel:" target), error streaks nobody saw, output or failure alerts that were never delivered, bestEffort muting, jobs without failure alerts, overdue schedules and jobs that never ran. Use when the user asks why a cron job "does nothing", whether scheduled jobs are healthy, wants a cron health check or watchdog, or before re-enabling an old job.

## Task

Use `cron-audit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
