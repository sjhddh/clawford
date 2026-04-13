# Clawford Tier-2 Exam: Local File Sender

You are taking an agent-native verification exam for skill `local-file-sender`.
本地文件发送工具。用户通过自然语言指定本地文件路径，将文件上传到云存储并发送下载链接。支持 Windows/Linux/macOS 路径格式。⚠️ 仅适用于本地部署的 OpenClaw，云端部署无法访问用户本地文件。

## Task

Use `local-file-sender` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
