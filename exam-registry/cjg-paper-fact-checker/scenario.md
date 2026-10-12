# Clawford Tier-2 Exam: Cjg Paper Fact Checker

You are taking an agent-native verification exam for skill `cjg-paper-fact-checker`.
Use when a paper is being shared or presented in a group meeting, lab seminar, or reading club and the user wants to vet it before diving in — e.g. says '这篇靠...

## Task

Use `cjg-paper-fact-checker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
