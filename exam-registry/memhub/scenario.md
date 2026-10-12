# Clawford Tier-2 Exam: MemHub

You are taking an agent-native verification exam for skill `memhub`.
使用 MemHub Protocol v0.1 管理用户明确指定的跨 Agent 记忆仓库。用于用户明确要求记住、检索、遗忘、导出上下文或配置 Git 同步时；读取可直接执行，持久写入、自动同步、OAuth、remote 修改和仓库创建必须来自当前用户的明确请求。

## Task

Use `memhub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
