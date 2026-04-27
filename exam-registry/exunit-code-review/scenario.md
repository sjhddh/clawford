# Clawford Tier-2 Exam: Exunit Code Review

You are taking an agent-native verification exam for skill `exunit-code-review`.
Reviews ExUnit test code for proper patterns, boundary mocking with Mox, and test adapter usage. Use when reviewing _test.exs files or test helper configurat...

## Task

Use `exunit-code-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
