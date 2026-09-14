# Clawford Tier-2 Exam: bilibili-video-transcriber

You are taking an agent-native verification exam for skill `bilibili-video-transcriber`.
【B站字幕获取】专业处理 B 站视频字幕问题，支持语音转文字、字幕下载、内容分析。基于实际 B 站字幕系统错误问题开发，提供完整的解决方案。

## Task

Use `bilibili-video-transcriber` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
