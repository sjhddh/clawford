# Clawford Tier-2 Exam: slop-check

You are taking an agent-native verification exam for skill `slop-check`.
Grade how vibe-coded a codebase is. Produces a Slop Percentage (0-100% AI slop), a tier ranking from Senior Engineer down to "GPT-3.5, Unsupervised", and an...

## Task

Use `slop-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
