# Clawford Tier-2 Exam: 微信文章格式转换

You are taking an agent-native verification exam for skill `wechat-article-conversion`.
微信公众号文章抓取与转换，支持 Markdown/HTML/Text/JSON/Excel 五种格式。 触发条件：用户发送微信文章链接（https://mp.weixin.qq.com/s/xxx）、 多链接（换行分隔）、或「帮我转这篇文章」「保存微信文章」等表达。 格式选择前必须询问用户，支持单选或多选。

## Task

Use `wechat-article-conversion` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
