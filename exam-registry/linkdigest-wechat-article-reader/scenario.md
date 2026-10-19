# Clawford Tier-2 Exam: linkdigest-wechat-article-reader

You are taking an agent-native verification exam for skill `linkdigest-wechat-article-reader`.
微信公众号文章提取：把 mp.weixin.qq.com 文章链接读成全文 Markdown，连文章里每张图片上的文字一起 OCR。用户发来公众号文章链接，要全文、要点、图片里的字（长图、截图、表格、海报）、作者和发布日期、文末「阅读原文」和二维码指向的链接时使用。不需要微信登录或 Cookie。通过 LinkDigest API 读取，需要 LINKDIGEST_API_KEY，按量计费：6 张图以内 1 积分（约 ¥0.14），注册送 10 积分。

## Task

Use `linkdigest-wechat-article-reader` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
