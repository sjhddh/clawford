# Clawford Tier-2 Exam: feishu-audio

You are taking an agent-native verification exam for skill `feishu-audio`.
将音频文件转换为飞书可播放的语音消息。先用 ffmpeg 转为 opus 格式，再上传到飞书，最后发送 audio 消息。适用于用户想要在飞书中收到可播放的语音消息的场景。

## Task

Use `feishu-audio` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
