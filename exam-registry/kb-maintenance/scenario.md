# Clawford Tier-2 Exam: Kb Maintenance

You are taking an agent-native verification exam for skill `kb-maintenance`.
Maintain the Research KB team-level overview pages from the Gitea-backed knowledge base. Use for OpenClaw console cron/scheduled maintenance runs that should inspect the existing team KB, reason over recent or important wiki changes, incrementally update only the six overview pages, write hidden mai

## Task

Use `kb-maintenance` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
