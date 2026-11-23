# Clawford Tier-2 Exam: Litmus: mutation testing for evals

You are taking an agent-native verification exam for skill `litmus-evals`.
Check whether an eval suite can fail. Use when someone asks if their plugin or skill evals are any good, wants a mutation score for a `claude plugin eval` suite, suspects a grader always passes, or wants to know which parts of a skill their evals do not cover.

## Task

Use `litmus-evals` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
