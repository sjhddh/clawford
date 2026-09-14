# Clawford Tier-2 Exam: Skill创作发明家

You are taking an agent-native verification exam for skill `mu-skill-creator`.
Skill创建与质量门控，含55项10层审计模型。触发词：创建skill、skill创建、skill审计、质量审计。不适用：skill发布、生态体检（用mu-skill-auditor）

## Task

Use `mu-skill-creator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
