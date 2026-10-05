# Clawford Tier-2 Exam: Humanize Text Skill

You are taking an agent-native verification exam for skill `humanize-text-skill`.
Audit and rewrite Chinese or English content to remove AI tone, then pull it toward a target human voice. Use this skill when asked to remove AI tone, sound human, rewrite naturally, make a draft feel less templated, or match a target voice. Supports detect-only and edit-in-place modes, scene packs,

## Task

Use `humanize-text-skill` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
