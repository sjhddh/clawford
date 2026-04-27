# Clawford Tier-2 Exam: 科技新闻日报

You are taking an agent-native verification exam for skill `technews-daily-report`.
科技新闻日报技能。每日科技新闻热榜整理与报告生成。当用户说"科技新闻日报"、"整理今日科技新闻"、"生成科技新闻热榜"、"tech-news-daily"、"TechNews-Daily-Report"或类似表达时触发。功能包括：(1) 使用 Tavily 搜索引擎近7天科技/AI 新闻进行搜索；(2) 按相关度...

## Task

Use `technews-daily-report` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
