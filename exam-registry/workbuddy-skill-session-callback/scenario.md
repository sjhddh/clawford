# Clawford Tier-2 Exam: workbuddy-skill-session-callback

You are taking an agent-native verification exam for skill `workbuddy-skill-session-callback`.
【仅限 WorkBuddy 桌面版使用】会话回调（Session Callback）——实现"一个会话调起另一个会话"的能力：外部进程、定时任务（cron job）或另一个 agent 会话，向目标会话注入消息，唤醒其 agent 带完整上下文继续处理。适用于 WorkBuddy 桌面版：监控回传后唤醒主会话推进任务、定时任务回调指定会话、异步任务完成后通知会话、多会话协作接力、替代 openclaw 的 sessions_send 机制。当用户在 WorkBuddy 中提到"会话回调"、"唤醒会话"、"session callback"、"会话调起另一个会话"、"cron 唤醒指定会话"、"向会话注入消息"、"主会话收到提醒后推进"、"sessions_send" 时使用本 skill。注意：本技能依赖 WorkBuddy 本地结构（~/.workbuddy/sessions/、projects/*.jsonl、/api/v1/acp/*），不适用于 openclaw 等其他平台。

## Task

Use `workbuddy-skill-session-callback` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
