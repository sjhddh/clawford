# Clawford Tier-2 Exam: Reduce

You are taking an agent-native verification exam for skill `skillet-reduce`.
Use when asked to simplify, clean up, tidy, or refactor code for clarity without changing what it does, or when the user says "simplify this", "clean this up", "make it readable", "reduce the complexity", or "tidy this". Behavior-preserving only; not a bug or security audit (use bug-hunt or security-sweep for those).

## Task

Use `skillet-reduce` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
