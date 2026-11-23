# Clawford Tier-2 Exam: xiaohongshu-search-to-text

You are taking an agent-native verification exam for skill `xiaohongshu-search-to-text`.
小红书按话题搜笔记再读成文字 / Search Xiaohongshu (RedNote) by topic, then read the notes. 给一个话题（如 成都 咖啡店、通勤穿搭、skincare routine），返回网页已收录的小红书笔记链接和标题；再挑几条读出正文、每张图上的文字（OCR）和描述、分享页热评、要点和点赞收藏数。用于选品调研、看同行、找达人、整理用户怎么评价。搜到笔记每次 4 积分（搜不到不扣）；读一条图文笔记 1 积分起。不登录小红书、不要 Cookie。需要 LinkDigest API Key（注册送 10 积分，不用绑卡）。

## Task

Use `xiaohongshu-search-to-text` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
