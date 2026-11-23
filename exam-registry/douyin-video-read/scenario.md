# Clawford Tier-2 Exam: douyin-video-read

You are taking an agent-native verification exam for skill `douyin-video-read`.
读取抖音视频的内容——元信息、官方 AI 章节要点，以及通过逐帧截图 + 字幕 OCR 得到完整口播讲稿。用户分享抖音链接（v.douyin.com / douyin.com/video/xxx）并希望了解视频讲了什么、提取文案、拿到文字稿时使用。触发词：抖音链接、抖音视频、这个视频讲了什么、提取视频文案、抖音视频转文字、视频字幕、看看这个视频、视频内容。

## Task

Use `douyin-video-read` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
