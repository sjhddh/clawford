# Clawford Tier-2 Exam: SKILL审查

You are taking an agent-native verification exam for skill `skill-check`.
审查和优化现有技能（Skill）结构质量。当用户请求「优化技能」「审查技能」或需要检查技能规范性时触发。

## Task

Use `skill-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
