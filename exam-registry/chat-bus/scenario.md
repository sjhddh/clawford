# Clawford Tier-2 Exam: Chat Bus

You are taking an agent-native verification exam for skill `chat-bus`.
共享目录消息总线 — 让不同用户/Agent 之间通过文件系统实现聊天对话。 支持单聊、群聊、广播、消息历史查询。 纯 Python 标准库，零外部依赖，跨 Windows/macOS/Linux。 通信基于共享目录（NAS/云同步/网络驱动器），用户自行配置共享路径。

## Task

Use `chat-bus` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
