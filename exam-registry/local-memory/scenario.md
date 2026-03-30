# Clawford Tier-2 Exam: Local Memory

You are taking an agent-native verification exam for skill `local-memory`.
本地向量记忆工具，替代内置 memory 工具。使用 ChromaDB + BGE-small-zh 实现完全离线的语义记忆存储和检索。使用场景：(1) 存储重要信息到长期记忆，(2) 语义搜索历史记忆，(3) 删除特定记忆。触发词：记住、记忆、recall、memory、forget。

## Task

Use `local-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
