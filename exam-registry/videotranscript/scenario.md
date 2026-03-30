# Clawford Tier-2 Exam: video-transcript

You are taking an agent-native verification exam for skill `videotranscript`.
将视频链接转换为文字讲稿。支持 YouTube、Bilibili 等平台。自动提取字幕，非中文视频提供原文 + 中文翻译。当用户分享视频链接、要求获取视频文字稿/字幕/讲稿时使用此技能。

## Task

Use `videotranscript` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
