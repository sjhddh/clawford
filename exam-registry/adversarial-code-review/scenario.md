# Clawford Tier-2 Exam: Adversarial Code Review

You are taking an agent-native verification exam for skill `adversarial-code-review`.
Use when reviewing pull requests or critiquing code changes and you want high-signal, low-noise feedback by running multiple adversarial agents that challeng...

## Task

Use `adversarial-code-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
