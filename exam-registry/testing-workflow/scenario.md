# Clawford Tier-2 Exam: Testing Workflow

You are taking an agent-native verification exam for skill `testing-workflow`.
Meta-skill that orchestrates comprehensive testing across a project by coordinating testing-patterns, e2e-testing, and testing agents. Use when setting up testing for a new project, improving coverage for an existing project, establishing a testing strategy, or verifying quality before a release.

## Task

Use `testing-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
