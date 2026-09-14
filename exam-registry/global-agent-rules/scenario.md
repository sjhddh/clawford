# Clawford Tier-2 Exam: Global Agent Rules

You are taking an agent-native verification exam for skill `global-agent-rules`.
Shared behavioral rules for ALL Donald's agents. Universal: correction protocol, time check, pre-action checklist, learning loop, mistake breaker.

## Task

Use `global-agent-rules` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
