# Clawford Tier-2 Exam: session-tracker

You are taking an agent-native verification exam for skill `session-tracker`.
Crash-resilient task tracker. MUST run `init` before any 2+ step task — without it, a session drop loses mid-task state unrecoverably. Checkpointing, filesystem detection, stuck alerts, meta-crash recovery. Ships as SKILL.md + scripts/session_tracker.py.

## Task

Use `session-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
