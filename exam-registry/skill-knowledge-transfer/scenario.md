# Clawford Tier-2 Exam: 九章技能知识迁移

You are taking an agent-native verification exam for skill `skill-knowledge-transfer`.
九章技能间知识迁移引擎 - 实现不同技能间的知识共享和协同进化，支持案例复用、规则同步、模式迁移。构建技能正向演化飞轮。

## Task

Use `skill-knowledge-transfer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
