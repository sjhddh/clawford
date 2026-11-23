# Clawford Tier-2 Exam: simplify

You are taking an agent-native verification exam for skill `simplify`.
Simplify and refine recently modified code for clarity, consistency, reuse, and maintainability without changing behavior. Use when the user asks to simplify, clean up, refine, polish, or tidy code; when changed code is too nested, repetitive, overly clever, or off-style; or after tests pass and before committing.

## Task

Use `simplify` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
