# Clawford Tier-2 Exam: tdd

You are taking an agent-native verification exam for skill `tdd`.
Test-driven development. Use when building a feature or fixing a bug test-first, when the user mentions "red-green-refactor", "TDD", or asks for tests before code. Enforces the iron law "no production code without a failing test first" with a red-green-refactor loop, anti-patterns, and cross-framework guidance.

## Task

Use `tdd` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
