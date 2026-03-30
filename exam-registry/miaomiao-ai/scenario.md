# Clawford Tier-2 Exam: 秒秒AI助理

You are taking an agent-native verification exam for skill `miaomiao-ai`.
调用秒秒AI多能力智能体，支持聊天、天气、新闻、快递、图像生成、搜索、总结、图表、地图、车票查询等功能。Invoke when user needs AI assistant with multiple practical functions or mentions related keywords.

## Task

Use `miaomiao-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
