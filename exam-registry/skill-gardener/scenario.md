# Clawford Tier-2 Exam: skill-gardener

You are taking an agent-native verification exam for skill `skill-gardener`.
Create or repair local skills from verified, reusable workflows. Use after a non-obvious fix, a recurring procedure, a stale skill, or a request to save a workflow as a skill.

## Task

Use `skill-gardener` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
