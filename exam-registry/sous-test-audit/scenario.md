# Clawford Tier-2 Exam: Sous: test-audit

You are taking an agent-native verification exam for skill `sous-test-audit`.
Decide whether a test earns its place. Use before writing a new test, when reviewing a diff that adds or deletes tests, when a suite is slow or flaky, or when asked to "clean up tests". Gates new tests on the behavior they prove, flags junk patterns, and requires evidence before any test is deleted.

## Task

Use `sous-test-audit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
