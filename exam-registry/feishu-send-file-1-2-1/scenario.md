# Clawford Tier-2 Exam: Feishu Send File 1.2.1

You are taking an agent-native verification exam for skill `feishu-send-file-1-2-1`.
通过飞书机器人稳定发送本地普通文件或本地图片。用于现有一等工具无法直接完成“发送本地文件附件”时，或本地图片经常规消息链路发送后在飞书里只显示路径文本而不显示图片本体时。普通文件走 `im/v1/files -> file_key -> msg_type=file`，图片走 `im/v1/images -> im...

## Task

Use `feishu-send-file-1-2-1` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
