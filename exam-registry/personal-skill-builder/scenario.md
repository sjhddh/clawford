# Clawford Tier-2 Exam: 个人技能工坊

You are taking an agent-native verification exam for skill `personal-skill-builder`.
一问一答主动补全需求，开放领域生成技能，并以逐轮证据审计覆盖与回归

## Task

Use `personal-skill-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
