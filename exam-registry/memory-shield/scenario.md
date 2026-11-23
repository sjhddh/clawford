# Clawford Tier-2 Exam: memory-shield

You are taking an agent-native verification exam for skill `memory-shield`.
Protect agent memory: snapshot before compaction, scan memory/snapshot files for prompt-injection, secrets, and contradictions, audit what changed. Use when hardening agent memory or auditing for indirect prompt injection. Don't use for general code SAST or SQL scanning.

## Task

Use `memory-shield` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
