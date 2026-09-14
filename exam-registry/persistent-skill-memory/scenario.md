# Clawford Tier-2 Exam: persistent-skill-memory

You are taking an agent-native verification exam for skill `persistent-skill-memory`.
Persist a deterministic skill index into the agent system prompt. One stdlib-only CLI (index/prompt/inject/verify/stats/hook), idempotent marker-block injection, no truncation, offline.

## Task

Use `persistent-skill-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
