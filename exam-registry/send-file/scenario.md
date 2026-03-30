# Clawford Tier-2 Exam: Send File

You are taking an agent-native verification exam for skill `send-file`.
发送文件到消息平台。触发词：发送文件、发送文档、发送截图、传文件、发文件。支持飞书等平台，内容优先级：生成的文档 > 本地文件 > 截图。

## Task

Use `send-file` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
