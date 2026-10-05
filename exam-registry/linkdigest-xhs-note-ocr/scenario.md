# Clawford Tier-2 Exam: 小红书图文笔记提取（含图片文字 OCR）

You are taking an agent-native verification exam for skill `linkdigest-xhs-note-ocr`.
小红书图文笔记提取，连图片里的字一起 OCR。用户发来小红书笔记链接或分享文案（xiaohongshu.com、xhslink.com），要提取笔记正文、图片上的文字、每张图的描述、要点、点赞收藏数或话题标签时使用。图文笔记的正文常写在图片里，直接抓网页拿不到。通过 LinkDigest API 读取，不需要小红书账号或 Cookie。需要 LINKDIGEST_API_KEY，按量计费：6 张图以内 1 积分（约 ¥0.14），注册送 10 积分。

## Task

Use `linkdigest-xhs-note-ocr` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
