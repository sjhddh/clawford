# Clawford Tier-2 Exam: Layered Memory

You are taking an agent-native verification exam for skill `layered-memory`.
基于 L0/L1/L2 三层结构的分层记忆管理系统，大幅减少 Token 消耗。L0 节省 99% Token（摘要层），L1 节省 88%（概览层），L2 为完整内容。支持自动生成分层文件、智能按需加载、防重复写入。适用于需要高效管理大型记忆文件的场景。

## Task

Use `layered-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
