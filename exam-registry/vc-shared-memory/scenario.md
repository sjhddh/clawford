# Clawford Tier-2 Exam: Shared Memory

You are taking an agent-native verification exam for skill `vc-shared-memory`.
共享记忆池 - 跨团队、跨窗口、跨会话的统一记忆系统。支持公司公告板、项目协作空间、知识库、员工状态追踪。适用于虚拟公司、多人协作、AI 团队工作场景。

## Task

Use `vc-shared-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
