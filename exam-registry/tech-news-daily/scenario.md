# Clawford Tier-2 Exam: 科技新闻日报

You are taking an agent-native verification exam for skill `tech-news-daily`.
每日AI/科技热榜日报。从AIHOT单站读取近3天热榜，生成报告并同步飞书文档，只发链接不发全文。

## Task

Use `tech-news-daily` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
