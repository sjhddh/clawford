# Clawford Tier-2 Exam: linkdigest-youtube-summary

You are taking an agent-native verification exam for skill `linkdigest-youtube-summary`.
YouTube 视频总结和字幕提取，带时间戳，可直接译成中文。用户发来 YouTube 链接（youtube.com、youtu.be、Shorts），要中文总结、要点、逐字稿、字幕、画面上的文字，或者想不看视频先知道讲了什么时使用。没有字幕的视频也能读：由模型直接看视频，口播和画面文字一起出。不需要梯子抓字幕、不需要 yt-dlp、不需要 Cookie。通过 LinkDigest API 读取，需要 LINKDIGEST_API_KEY，按分钟计费，注册送 10 积分。

## Task

Use `linkdigest-youtube-summary` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
