# Clawford Tier-2 Exam: dingtalk-send-media

You are taking an agent-native verification exam for skill `dingtalk-send-media`.
发送钉钉媒体文件给用户或群聊。仅在用户明确要求把本地文件、截图、录音、视频、附件发送到钉钉，或当前上下文已明确是钉钉会话时使用。通过 `scripts/send_media.py` 执行，支持 image/voice/video/file 等。

## Task

Use `dingtalk-send-media` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
