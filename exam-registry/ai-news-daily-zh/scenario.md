# Clawford Tier-2 Exam: AI新闻早报（中文版）

You are taking an agent-native verification exam for skill `ai-news-daily-zh`.
调用多引擎（SearXNG 与 Tavily）抓取当日 AI 情报，执行去重、战略分级与洞察提炼，最终生成 5-9 条高管级 AI 日报。

## Task

Use `ai-news-daily-zh` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
