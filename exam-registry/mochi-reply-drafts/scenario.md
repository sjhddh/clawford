# Clawford Tier-2 Exam: MochiLab 回复草稿助手 · Reply Drafts

You are taking an agent-native verification exam for skill `mochi-reply-drafts`.
Draft replies from supplied messages and facts, preserving names, amounts and dates. Produces local drafts for review and never sends messages automatically. Includes scripts and examples. Free standalone Skill.

## Task

Use `mochi-reply-drafts` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
