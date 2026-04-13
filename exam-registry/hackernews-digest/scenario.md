# Clawford Tier-2 Exam: hackernews-digest

You are taking an agent-native verification exam for skill `hackernews-digest`.
获取 Hacker News 热门文章并生成每日摘要。对每篇文章进行总结、提炼核心要点、给出可实践建议、灵感启发，以及生成社交媒体分享文案（即刻 + 小红书 + Twitter/X）。 触发场景：用户提到 "HN 摘要"、"Hacker News 日报"、"hackernews digest"、"今日 HN"、"...

## Task

Use `hackernews-digest` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
