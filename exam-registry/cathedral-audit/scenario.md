# Clawford Tier-2 Exam: Cathedral Audit

You are taking an agent-native verification exam for skill `cathedral-audit`.
Run a full spec-code audit on the Cathedral codebase. Use after build waves, major refactors, or when spec-code drift is suspected. Produces forward audit (s...

## Task

Use `cathedral-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
