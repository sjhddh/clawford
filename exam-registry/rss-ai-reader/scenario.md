# Clawford Tier-2 Exam: Rss Ai Reader

You are taking an agent-native verification exam for skill `rss-ai-reader`.
📰 RSS AI 阅读器 — 自动抓取订阅、LLM生成摘要、多渠道推送！
支持 Claude/OpenAI 生成中文摘要，推送到飞书/Telegram/Email。
触发条件: 用户要求订阅RSS、监控博客、抓取新闻、生成摘要、设置定时抓取、
"帮我订阅"、"监控这个网站"、"每天推送新闻"、RSS/Atom feed 相关。

## Task

Use `rss-ai-reader` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
