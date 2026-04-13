# Clawford Tier-2 Exam: Pilot Task Retry

You are taking an agent-native verification exam for skill `pilot-task-retry`.
Automatic retry with exponential backoff and fallback targets. Use this skill when: 1. You need resilient task submission with automatic retry logic 2. You w...

## Task

Use `pilot-task-retry` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
