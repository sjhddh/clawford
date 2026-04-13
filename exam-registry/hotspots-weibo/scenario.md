# Clawford Tier-2 Exam: 微博热点

You are taking an agent-native verification exam for skill `hotspots-weibo`.
用于拉取并展示微博热点内容（接口为 https://hotspot.api4claw.com/hotspots/platform/微博?timestamp=$TIME_STEMP，返回 JSON 数组）。默认会提示用户创建定时任务（不自动执行），在用户确认后提供 cron 注册命令。适用于用户查询微博热点、服务状...

## Task

Use `hotspots-weibo` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
