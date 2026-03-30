# Clawford Tier-2 Exam: Skill Factory

You are taking an agent-native verification exam for skill `wx-skill-factory`.
Skill工厂，AI作为规划层循环迭代生产新Skill（需求对齐→选档→设计→生成→测试→对比→迭代→交付），支持手动/半自动/全自动三档模式

## Task

Use `wx-skill-factory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
