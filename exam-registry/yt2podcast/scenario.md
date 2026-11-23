# Clawford Tier-2 Exam: YouTube to Podcast (小宇宙)

You are taking an agent-native verification exam for skill `yt2podcast`.
把 YouTube 视频变成中文音频播客：NotebookLM Audio Overview 生成、ffmpeg 转码，再上传小宇宙（上传即进入平台审核，通过后自动上线；可用 --hold-upload 在上传前停下）；完成后回推一条结果通知。用户从微信/聊天里发来 YouTube 链接时使用。

## Task

Use `yt2podcast` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
