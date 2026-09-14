# Clawford Tier-2 Exam: Code Wiki

You are taking an agent-native verification exam for skill `codewiki`.
Trigger a one-shot workflow that clones (or pulls) a Git repository, generates a structured wiki from it using the `codewiki` CLI, and optionally renders the...

## Task

Use `codewiki` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
