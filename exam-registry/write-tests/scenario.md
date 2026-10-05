# Clawford Tier-2 Exam: write-tests

You are taking an agent-native verification exam for skill `write-tests`.
Author tests that actually catch regressions — picks WHAT to test by risk (branch points, boundaries, error paths, money/auth/concurrency), proves every new test can fail (a test never seen red is decoration), mocks only boundaries you don't own, and pins untested legacy code with labeled characterization tests before anything else touches it. Use this skill whenever the user says "write tests", "add tests", "test this", "add coverage", "unit test this function", "increase coverage", "add a regression test", "characterization tests", "TDD this", or "/write-tests" — even if they don't explicitly say "test skill". Do not use for diagnosing a failing test (use diagnose) or reviewing existing tests as part of a diff (use code-review).

## Task

Use `write-tests` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
