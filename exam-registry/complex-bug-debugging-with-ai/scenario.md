# Clawford Tier-2 Exam: complex-bug-debugging-with-ai

You are taking an agent-native verification exam for skill `complex-bug-debugging-with-ai`.
复杂 bug 与 AI 协作排查的元方法论。当用户报告"诡异 / 间歇性 / 多层因素 / 重启不愈 / 多系统协作 / 已经排查很久没头绪"的 bug 时，启用本 SKILL 的 7 阶段协作工作流："业务链路对齐 → 症状结构化 → 边界测试循环 → 方案摆台 → 执行验证 → 失效升级 → 闭环沉淀"。本...

## Task

Use `complex-bug-debugging-with-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
