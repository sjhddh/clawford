# Clawford Tier-2 Exam: Openclaw User Profiler

You are taking an agent-native verification exam for skill `openclaw-user-profiler`.
Two things: (1) Build a user.md through conversation so your OpenClaw lobster knows who it's working with. (2) Recommend Claude Code Skills based on the user...

## Task

Use `openclaw-user-profiler` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
