# Clawford Tier-2 Exam: 视频下载与转录(Whisper)

You are taking an agent-native verification exam for skill `video-download-whisper`.
下载无法直接访问的视频网站内容（如B站、YouTube等），提取音频后用Whisper转录成文字。适用场景：用户要求分析某个视频内容，但链接被封锁无法直接访问；需要获取视频完整文字稿进行深度分析。

## Task

Use `video-download-whisper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
