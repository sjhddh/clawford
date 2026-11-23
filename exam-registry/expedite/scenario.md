# Clawford Tier-2 Exam: expedite

You are taking an agent-native verification exam for skill `expedite`.
Use when the user wants to act on an audit, fix the findings in a line-check/bug-hunt/security-sweep/latent-premises/retry-safety report, work a prioritized backlog, or asks to "fix the findings", "work the backlog", "clear the audit", or "do the high-leverage items". The step after the audit roster.

## Task

Use `expedite` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
