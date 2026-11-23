# Clawford Tier-2 Exam: B站视频转文字 Bilibili video to text

You are taking an agent-native verification exam for skill `bilibili-video-to-text`.
B站视频转文字 / Bilibili video to text. 用户发来 bilibili.com/video/BV… 或 b23.tv 短链，要提取视频文案、做笔记、总结 UP 主讲了什么、整理课程或评测内容时使用。返回口播逐字稿（分段带时间）、画面上的字、标题简介、要点和互动数据。不登录 B 站、不要 Cookie、不下载视频。1 分钟视频 2 积分（约 ¥0.29），读不了不扣费；需要 LinkDigest API Key（注册送 10 积分，不用绑卡）。

## Task

Use `bilibili-video-to-text` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
