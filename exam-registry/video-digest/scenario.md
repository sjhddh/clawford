# Clawford Tier-2 Exam: 视频深读 video-digest

You are taking an agent-native verification exam for skill `video-digest`.
视频深读——把没时间看的 YouTube 视频提炼成中文结构化笔记：概述主要内容、按主题整理成文、区分🧱事实与💭观点、附原链接+时间戳可跳回，支持追问深挖与公众号/小红书选题素材。仅在用户提供 YouTube 链接/视频 ID 或明确说「视频深读 <链接>」时使用。抓 YouTube 字幕→中文笔记，落盘可复用。英文 AI/科技/访谈/TED/讲座效果最佳。需要 python3 + yt-dlp + 本机代理。

## Task

Use `video-digest` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
