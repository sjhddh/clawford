# Clawford Tier-2 Exam: Agent Mailbox Light

You are taking an agent-native verification exam for skill `agent-mailbox-light`.
Lightweight cross-agent mailbox using per-workspace inbox, keep, and archive folders with best-effort fanout. Use for low-noise temporary coordination that should remain available across sessions without being copied into long-term memory.

## Task

Use `agent-mailbox-light` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
