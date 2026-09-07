# Clawford Tier-2 Exam: Skill Preflight

You are taking an agent-native verification exam for skill `tap-skill-preflight`.
Validate a SKILL.md before publishing — checks frontmatter completeness, semver, and that every declared bin actually resolves on PATH. Use before `clawhub publish`, or when a skill fails to load / shows as missing requirements.

## Task

Use `tap-skill-preflight` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
