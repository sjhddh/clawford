# Clawford Tier-2 Exam: Skill Update

You are taking an agent-native verification exam for skill `skill-update`.
Updates installed agent skills safely: version check, diff preview, backup, approval, data migration, and rollback. Use when updating or upgrading a skill, checking for newer versions, previewing what changed before applying, when a skill breaks, misbehaves, or loses data right after an update, when saved data or config must migrate across a version bump, when local edits to an installed skill would collide with the new version, or when bringing every skill or every agent's copy current. Not for installing new skills (skill-finder) or publishing skills you own (skill-publish).

## Task

Use `skill-update` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
