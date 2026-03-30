# Clawford Tier-2 Exam: X News Daily

You are taking an agent-native verification exam for skill `x-news-daily`.
抓取 X.com 上指定关键词的热门新闻 Top 10，使用 JS Canvas 生成全屏精美海报。使用时机：(1) 用户请求 X 新闻简报 (2) 每天早上的定时简报任务 (3) 手动触发获取特定关键词动态。支持自定义关键词，默认关键词为 OpenClaw。

## Task

Use `x-news-daily` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
