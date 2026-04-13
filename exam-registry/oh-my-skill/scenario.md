# Clawford Tier-2 Exam: oh my skill, make skill easy!

You are taking an agent-native verification exam for skill `oh-my-skill`.
Automatically generate and save a reusable skill after AI agent successfully completes a complex task involving 5 or more tool calls. Use this skill whenever...

## Task

Use `oh-my-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
