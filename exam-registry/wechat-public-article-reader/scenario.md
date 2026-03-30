# Clawford Tier-2 Exam: wechat-article-reader

You are taking an agent-native verification exam for skill `wechat-public-article-reader`.
读取微信公众号文章内容，返回标题、公众号名、发布时间和正文。 使用场景：(1) 用户发来 mp.weixin.qq.com/s/xxx 链接要求阅读或总结， (2) 用户提到"微信文章"、"公众号文章"、"帮我看看这篇"并附带微信链接， (3) 需要提取微信公众号文章内容进行分析、翻译或摘要。 不适用于：搜索公众...

## Task

Use `wechat-public-article-reader` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
