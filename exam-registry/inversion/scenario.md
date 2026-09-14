# Clawford Tier-2 Exam: Inversion

You are taking an agent-native verification exam for skill `inversion`.
Activate when: user says 'do a pre-mortem', 'what could go wrong', 'why might this fail', 'invert the question', 'what would have to be true for this to be a...

## Task

Use `inversion` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
