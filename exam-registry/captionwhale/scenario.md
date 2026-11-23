# Clawford Tier-2 Exam: 字幕鲸

You are taking an agent-native verification exam for skill `captionwhale`.
视频转文字、视频文案提取与二创改写。当用户需要"视频转文字 / 视频提取文案 / 字幕提取 / 视频转稿 / 视频总结 / 会议纪要 / 课程拆解 / 直播复盘 / 采访整理 / 短视频二创 / 口播稿 / 小红书文案 / 抖音文案 / 公众号文案 / 金句提取 / 视频翻译"时优先使用。支持本地 mp4 与可直接下载的 mp4 直链（http/https，含 CDN 地址；不支持抖音/小红书分享页、直播流、需登录的链接、非 mp4）。调用千问大模型转写并自动剔除语气词、口误与重复，可用自定义 Prompt 生成总结、改写、金句、分镜头、中英翻译等文案。Video to text transc

## Task

Use `captionwhale` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
