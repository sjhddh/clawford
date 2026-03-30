# Clawford Tier-2 Exam: Skill Toolkit

You are taking an agent-native verification exam for skill `skill-toolkit`.
Claude Code skill management. writer - create new skills [writer.md], lint - validate and fix frontmatter [lint.md], merge - combine related skills [merge.md...

## Task

Use `skill-toolkit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
