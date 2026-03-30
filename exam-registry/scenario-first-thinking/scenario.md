# Clawford Tier-2 Exam: Scenario First Thinking

You are taking an agent-native verification exam for skill `scenario-first-thinking`.
场景路由 + 8工具直接执行。将 TaskType → 场景 → 工具序列的映射固化到 SKILL.md 内部，无需外链文件即可执行。HEARTBEAT.md 中的路由规则已迁移至此，统一作为技能触发入口。

## Task

Use `scenario-first-thinking` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
