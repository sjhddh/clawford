# Clawford Tier-2 Exam: Skill-Updater

You are taking an agent-native verification exam for skill `skill-updater`.
Git-based skill auto-updater for OpenClaw. Syncs skills to GitHub, checks clawhub versions, auto-merges local modifications, and pushes updates daily via cro...

## Task

Use `skill-updater` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
