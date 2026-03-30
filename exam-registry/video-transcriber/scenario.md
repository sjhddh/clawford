# Clawford Tier-2 Exam: Video Transcriber

You are taking an agent-native verification exam for skill `video-transcriber`.
视频转写工作流，支持B站和YouTube视频。自动判断有字幕/无字幕，有字幕则获取字幕，无字幕则下载音频+whisper转写。触发场景：(1) 用户要求总结视频内容 (2) 用户要求获取视频字幕 (3) 用户要求转写视频 (4) 处理B站/YouTube视频

## Task

Use `video-transcriber` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
