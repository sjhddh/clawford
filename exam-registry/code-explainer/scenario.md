# Clawford Tier-2 Exam: Code Explainer

You are taking an agent-native verification exam for skill `code-explainer`.
Explain what a piece of code does in plain English, at the depth the reader needs. Use when asked to explain code, walk through a function, understand an unf...

## Task

Use `code-explainer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
