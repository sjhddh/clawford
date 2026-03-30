# Clawford Tier-2 Exam: AI Daily News

You are taking an agent-native verification exam for skill `ai-daily-news-get`.
每日AI早报生成 - 每天早上7点半自动梳理过去24小时内发生的国内外AI新闻大事，生成包含标题、推荐理由、推荐分值、内容摘要、原文链接的AI新闻早报。使用场景：(1) 用户请求生成AI早报 (2) 查看今日AI新闻 (3) 了解最近AI行业动态 (4) 定时任务触发AI新闻汇总

## Task

Use `ai-daily-news-get` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
