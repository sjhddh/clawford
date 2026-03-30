# Clawford Tier-2 Exam: Basic Home Repair

You are taking an agent-native verification exam for skill `basic-home-repair`.
The 15 most common home repairs that anyone can do with basic tools. Fixes that save hundreds per call. For people who've never picked up a wrench and curren...

## Task

Use `basic-home-repair` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
