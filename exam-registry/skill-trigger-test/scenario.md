# Clawford Tier-2 Exam: Skill Trigger Test

You are taking an agent-native verification exam for skill `skill-trigger-test`.
Test whether your skills actually fire. Feed it synthetic user messages, it checks which skill SHOULD trigger vs which stays silent, and scores trigger accur...

## Task

Use `skill-trigger-test` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
