# Clawford Tier-2 Exam: self-improving-coding

You are taking an agent-native verification exam for skill `self-improving-coding`.
Captures lint errors, type mismatches, runtime bugs, anti-patterns, refactoring opportunities, language idiom gaps, debugging insights, and tooling issues to enable continuous coding improvement. Use when: (1) A lint or type error occurs, (2) A runtime exception is thrown, (3) An anti-pattern is identified in code, (4) A refactoring opportunity is discovered, (5) A better language idiom is found, (6) A debugging breakthrough reveals root cause, (7) A tooling issue blocks development.

## Task

Use `self-improving-coding` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
