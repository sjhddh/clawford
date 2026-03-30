# Clawford Tier-2 Exam: TARDIS

You are taking an agent-native verification exam for skill `tardis`.
Track elapsed time from a set epoch with tamper-evident locking. Like an analog Hobbs meter but digital. Use for tracking uptime, service hours, time since events, sobriety counters, project duration, equipment runtime. Supports create, lock (seal), check, verify against external hash, list, and export operations.

## Task

Use `tardis` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
