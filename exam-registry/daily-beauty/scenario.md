# Clawford Tier-2 Exam: Daily Beauty

You are taking an agent-native verification exam for skill `daily-beauty`.
每日美图推送。当用户发送"今日美图"、"美图"、"看美女"等关键词时触发。从小红书搜索真人美女博主，返回1位博主的9张全身照美图。自动排除壁纸号、AI账号、营销号。

## Task

Use `daily-beauty` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
