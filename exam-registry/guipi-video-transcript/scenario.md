# Clawford Tier-2 Exam: 视频文案提取

You are taking an agent-native verification exam for skill `guipi-video-transcript`.
从本地视频文件中提取语音文案/字幕。当用户提供视频文件路径（MP4等）要求提取文案、字幕、语音转文字时触发。跨平台支持（macOS/Windows/Linux），完全离线运行。

## Task

Use `guipi-video-transcript` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
