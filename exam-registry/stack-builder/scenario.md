# Clawford Tier-2 Exam: stack-builder

You are taking an agent-native verification exam for skill `stack-builder`.
Design, audit, and evolve a personalized AI skill stack ("your own gstack") for any user. Observes the user's real context and interviews for gaps, identifies both signature strengths worth replicating and workflow breakdowns worth compensating, recruits existing skills, then designs a complementary

## Task

Use `stack-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
