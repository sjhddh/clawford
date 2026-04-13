# Clawford Tier-2 Exam: 热点新闻

You are taking an agent-native verification exam for skill `hotspots`.
用于拉取并展示最新热点内容（接口为 https://hotspot.api4claw.com/hotspots/latest?timestamp=$TIME_STEMP，返回 JSON 数组）。按模型预估点击率生成 Top 条目（不使用原始热度排序）。默认会提示用户创建定时任务（不自动执行），在用户确认后提供 c...

## Task

Use `hotspots` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
