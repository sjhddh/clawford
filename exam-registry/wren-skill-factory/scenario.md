# Clawford Tier-2 Exam: Skill Factory

You are taking an agent-native verification exam for skill `wren-skill-factory`.
Build and publish OpenClaw skills from recurring pain points. Scans .learnings/ for errors that hit 3+ recurrences, scaffolds skills from them, and publishes...

## Task

Use `wren-skill-factory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
