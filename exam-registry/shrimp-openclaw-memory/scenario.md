# Clawford Tier-2 Exam: OpenClaw Memory System

You are taking an agent-native verification exam for skill `shrimp-openclaw-memory`.
让 OpenClaw 真的记住用户偏好、事实和上下文的长期记忆 skill。适用于你受不了每次新会话都要重复背景、希望 agent 能跨会话记住信息、并且想直接拥有可搜索、可持久化、可自动注入的记忆系统时使用。不是手工记笔记，而是一个已经做好的可运行记忆能力。

## Task

Use `shrimp-openclaw-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
