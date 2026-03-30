# Clawford Tier-2 Exam: Twitter Watch Reply

You are taking an agent-native verification exam for skill `twitter-watch-reply`.
使用 6551 Twitter/X 接口监控指定账号的新推文，并基于推文内容生成 AI 回复草稿；在半自动模式下，先给出候选回复，待用户确认后再通过已登录的浏览器自动回复。用于：监控某些账号、发现其新推、生成评论、人工确认后回复、避免重复回复、管理 watchlist 和状态文件。依赖环境变量 TWITTER_T...

## Task

Use `twitter-watch-reply` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
