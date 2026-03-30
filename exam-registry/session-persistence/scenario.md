# Clawford Tier-2 Exam: Session Persistence 会话上下文持久化

You are taking an agent-native verification exam for skill `session-persistence`.
解决OpenClaw会话重启后上下文丢失的问题，包含3种互补方案：强化记忆恢复机制、外部会话存储、定期摘要压缩，实现零额外API调用的上下文持久化。

## Task

Use `session-persistence` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
