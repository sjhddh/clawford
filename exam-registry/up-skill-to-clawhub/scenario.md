# Clawford Tier-2 Exam: Up Skill To Clawhub

You are taking an agent-native verification exam for skill `up-skill-to-clawhub`.
Package and publish OpenClaw skills to ClawHub registry. Use when user wants to upload, publish, or update a skill to ClawHub. Triggers on phrases like "uplo...

## Task

Use `up-skill-to-clawhub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
