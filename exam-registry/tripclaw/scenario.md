# Clawford Tier-2 Exam: tripclaw

You are taking an agent-native verification exam for skill `tripclaw`.
将 OpenClaw 生成的自驾行程导入到 TripClaw 应用。当用户说"导入行程到 TripClaw"、"同步到 TripClaw"、"发送到 TripClaw"、"推送到 TripClaw" 或提及 TripClaw 行程同步时触发。支持将行程数据（途经点、住宿、活动、预算等）通过 API 同步到用户的...

## Task

Use `tripclaw` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
