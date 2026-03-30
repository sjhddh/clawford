# Clawford Tier-2 Exam: 每日简报生成器

You are taking an agent-native verification exam for skill `daily-briefing-generator`.
每日简报生成器。自动聚合多个信息源（RSS、网页、Tavily搜索），生成结构化每日简报，支持定时推送。当用户需要：生成每日行业简报、汇总多渠道资讯、制作早报/晚报、定时推送简报给团队时使用此技能。

## Task

Use `daily-briefing-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
