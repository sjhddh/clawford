# Clawford Tier-2 Exam: Daily Recommend

You are taking an agent-native verification exam for skill `daily-recommend`.
每日书籍、诗词、电影等优质内容推荐技能。通过不定时推送，帮助用户高频触达有价值的文学与艺术内容，培养日常阅读与审美习惯。触发条件：Cron 定时任务（三个随机时间窗口）；用户主动说"推荐一首诗"等。

## Task

Use `daily-recommend` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
