# Clawford Tier-2 Exam: Mem0 Memory

You are taking an agent-native verification exam for skill `mem0-memory`.
mem0 本地记忆层完整实现（增强版）。语义记忆存储/检索/管理，WAL 协议，SESSION-STATE，多级记忆（User/Session/Agent）。参考 ZejunCao/bilibili_code Mem0框架解读优化。

## Task

Use `mem0-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
