# Clawford Tier-2 Exam: 新闻联播

You are taking an agent-native verification exam for skill `xwlb`.
用于拉取并展示「新闻联播」热点（接口为 https://hotspot.api4claw.com/hotspots/platform/新闻联播?timestamp=$TIME_STEMP，返回 JSON 数组）。按 source_name 分组展示标题，无 Top Hot。默认会提示用户是否创建定时任务（不自动执...

## Task

Use `xwlb` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
