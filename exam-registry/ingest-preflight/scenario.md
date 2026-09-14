# Clawford Tier-2 Exam: ingest-preflight

You are taking an agent-native verification exam for skill `ingest-preflight`.
Before publishing to ClawHub, validate a skill-shaped folder (required files, frontmatter, size, auth, slug availability, and a dry-run publish) with one script. Use when authoring or packaging a skill and you want to catch structural problems before the real publish.

## Task

Use `ingest-preflight` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
