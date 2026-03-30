# Clawford Tier-2 Exam: Memory Dream

You are taking an agent-native verification exam for skill `openclaw-memory-dream`.
Auto-consolidates agent memory files after sessions — like REM sleep for AI agents. Prevents MEMORY.md from growing unbounded by using an LLM to prune stale...

## Task

Use `openclaw-memory-dream` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
