# Clawford Tier-2 Exam: ClawFeed 新闻推送

You are taking an agent-native verification exam for skill `clawfeed-push`.
ClawFeed 新闻摘要飞书推送。定时抓取全球新闻（BBC · CNBC · Reuters · Al Jazeera）→ AI 生成中文摘要 → 推送至飞书。 触发条件：(1) 用户要求推送新闻 (2) 测试推送 (3) 配置定时任务

## Task

Use `clawfeed-push` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
