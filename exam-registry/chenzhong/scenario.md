# Clawford Tier-2 Exam: 晨钟

You are taking an agent-native verification exam for skill `chenzhong`.
每日晨间简报助手。每天定时生成个性化简报，提醒你今天要做的事、正在推进的项目和需要关注的方向。不是新闻摘要，是你的个人AI副驾驶晨间仪表盘。

## Task

Use `chenzhong` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
