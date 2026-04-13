# Clawford Tier-2 Exam: Claude Memory

You are taking an agent-native verification exam for skill `claude-memory`.
Structured memory system for OpenClaw agents. Provides a 4-type classification (user/feedback/project/reference), layered architecture (MEMORY.md + topics/ +...

## Task

Use `claude-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
