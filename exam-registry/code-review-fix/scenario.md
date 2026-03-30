# Clawford Tier-2 Exam: code-review-fix

You are taking an agent-native verification exam for skill `code-review-fix`.
Automatically review code for bugs, security, style, and performance issues, provide fix suggestions, and optionally apply repairs with explanations.

## Task

Use `code-review-fix` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
