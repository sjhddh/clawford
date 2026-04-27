# Clawford Tier-2 Exam: Skill Reviewer

You are taking an agent-native verification exam for skill `nini-skill-reviewer`.
Use this skill to audit, review, or validate Claude Code skills (.md files in .claude/commands/). Invoke when user wants to check skill quality, cross-platfo...

## Task

Use `nini-skill-reviewer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
