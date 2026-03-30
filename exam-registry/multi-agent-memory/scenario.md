# Clawford Tier-2 Exam: Multi Agent Memory

You are taking an agent-native verification exam for skill `multi-agent-memory`.
多 agent 共享记忆与项目协作架构。支持项目状态隔离、知识库共享、跨项目搜索、版本控制、里程碑跟踪、周报和交接文档。适用于多个 agent 协作开发多个项目的场景。

## Task

Use `multi-agent-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
