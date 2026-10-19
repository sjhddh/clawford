# Clawford Tier-2 Exam: 视频提取文字

You are taking an agent-native verification exam for skill `video-transcript-txt`.
将一个或多个本地视频转写为带每段开始和结束时间的整理版 TXT。当用户要求视频转文字、视频转写、提取视频文本或字幕、批量生成带时间戳 TXT、整理视频口述内容、统计视频处理耗时时使用。

## Task

Use `video-transcript-txt` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
