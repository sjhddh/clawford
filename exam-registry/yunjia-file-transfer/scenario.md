# Clawford Tier-2 Exam: Yunjia File Transfer

You are taking an agent-native verification exam for skill `yunjia-file-transfer`.
当用户请求文件时（如"把文件发给我"、"发个文件给我"、"把 xxx 发给我"），调用此 skill 将文件发送给用户。支持发送本地文件到当前聊天频道。

## Task

Use `yunjia-file-transfer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
