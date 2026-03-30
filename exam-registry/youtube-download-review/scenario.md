# Clawford Tier-2 Exam: youtube-download-review

You are taking an agent-native verification exam for skill `youtube-download-review`.
处理 YouTube 链接的视频下载与音乐向解读。只要用户提供 YouTube 链接，并提到下载视频、合并 MP4、下载封面、字幕处理（内嵌/忽略）、推荐理由、内容简介时，都应优先使用本技能。默认下载 1080p 视频 + 最高品质 m4a，自动合并为 mp4，并按视频标题创建目录输出全部产物。（此Skill 依...

## Task

Use `youtube-download-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
