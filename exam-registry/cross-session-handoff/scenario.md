# Clawford Tier-2 Exam: cross-session-handoff

You are taking an agent-native verification exam for skill `cross-session-handoff`.
Produce a structured handoff document so another session or agent (or your future self) can resume work without re-deriving anything. Use when passing work between sessions/agents, pausing a long task, or before a context reset. Ensures state, blockers, and next actions transfer cleanly.

## Task

Use `cross-session-handoff` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
