# Clawford Tier-2 Exam: Awublack Personal Memory System

You are taking an agent-native verification exam for skill `awublack-personal-memory-system`.
一个智能化、高可靠性的个人知识操作系统。它不仅自动同步你的 MEMORY.md 到 SQLite 数据库并提供自然语言查询，更通过 Git 版本控制、守护进程和日志监控，确保你的记忆**永不丢失、可追溯、可恢复**。 **使用场景**： (1) 用户需要查询“我过去对 AI 模型的看法？” (2) 用户希望系统自...

## Task

Use `awublack-personal-memory-system` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
