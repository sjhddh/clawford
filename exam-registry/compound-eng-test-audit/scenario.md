# Clawford Tier-2 Exam: ia-test-audit

You are taking an agent-native verification exam for skill `compound-eng-test-audit`.
Audit whether tests detect regressions in the behavior they claim to protect. Find mocked-away subjects, weak or circular assertions, undiscriminating fixtures, swallowed failures, and tests missing from gates. Use for test-quality audits, suspected false confidence in generated tests, and reviewing new tests. Use ia-writing-tests for writing tests.

## Task

Use `compound-eng-test-audit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
