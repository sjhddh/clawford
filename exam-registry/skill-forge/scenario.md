# Clawford Tier-2 Exam: Skill Forge

You are taking an agent-native verification exam for skill `skill-forge`.
AI 技能自动发现、评估、集成、验证、宣传闭环系统 — 跨生态技能市场引擎

## Task

Use `skill-forge` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
