# Clawford Tier-2 Exam: test-cases

You are taking an agent-native verification exam for skill `test-cases`.
This skill should be used when generating comprehensive test cases from PRD documents or user requirements. Triggers when users request test case generation, QA planning, test scenario creation, or need structured test documentation. Produces detailed test cases covering functional, edge case, error handling, and state transition scenarios.

## Task

Use `test-cases` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
