# Clawford Tier-2 Exam: Skilllab

You are taking an agent-native verification exam for skill `ocas-skilllab`.
Skill library maintenance: audit, merge, rename, delete, consolidate, publish, sanitize, and critique skills. Interactive menu via clarify tool. Scans ALL profile directories recursively — never hardcodes a single path. Use when the user asks to clean up the skill library, merge overlapping skills, rename skills to follow naming conventions, delete auto-generated or stale skills, audit skills for authorship, publish skills to external registries, sanitize skills for security scanner compliance, score skills against the 10-dimension rubric, generate improvement plans, or run autonomous library grinding (10khr). Also covers frontmatter conventions and how to identify skills by type (ocas-*, util-*, protected, auto-generated). NOT for: building or debugging a skill's own scripts (that is not a library task), running code autofix on skill source, or writing arbitrary code unrelated to the skill library.

## Task

Use `ocas-skilllab` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
