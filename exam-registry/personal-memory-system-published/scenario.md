# Clawford Tier-2 Exam: Personal Memory System Published

You are taking an agent-native verification exam for skill `personal-memory-system-published`.
一个自动化、双层记忆系统，用于持久化和可查询个人知识。它将用户在 MEMORY.md 中的长期记忆，自动同步到 SQLite 数据库 memory.db，实现“自然语言 → SQL 查询”的智能检索。 **使用场景**： (1) 用户需要查询“我过去对 AI 模型的看法？” (2) 用户希望系统自动记录重要决策，...

## Task

Use `personal-memory-system-published` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
