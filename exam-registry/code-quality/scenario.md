# Clawford Tier-2 Exam: Code Quality

You are taking an agent-native verification exam for skill `code-quality`.
Coding style standards, security guidelines, and accessibility requirements. Use when (1) Writing new code, (2) Reviewing code for style/security, (3) Implem...

## Task

Use `code-quality` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
