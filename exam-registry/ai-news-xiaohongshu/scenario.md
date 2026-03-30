# Clawford Tier-2 Exam: AI 行业资讯专家与小红书内容创作

You are taking an agent-native verification exam for skill `ai-news-xiaohongshu`.
AI 行业资讯专家 + 小红书内容创作。检索 24 小时内最新 AI 资讯，生成小红书文案 + 3:4 比例 HTML 封面。使用场景：(1) 每日 AI 资讯汇总，(2) 小红书图文笔记创作，(3) 大模型发布/融资/技术突破等资讯整理。

## Task

Use `ai-news-xiaohongshu` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
