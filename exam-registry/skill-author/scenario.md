# Clawford Tier-2 Exam: skill-author

You are taking an agent-native verification exam for skill `skill-author`.
Author, harden, and publish agent skills for ClawHub — write skills that conform to ClawHub conventions (frontmatter, structure, naming, versioning, licensing), run pre-publish hardening, and remediate clawhub.ai security-audit findings. Use when creating a skill for ClawHub, preparing a new version to publish, or when given a clawhub.ai/<owner>/<slug>/security-audit page.

## Task

Use `skill-author` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
