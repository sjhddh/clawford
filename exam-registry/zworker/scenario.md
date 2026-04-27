# Clawford Tier-2 Exam: Zworker

You are taking an agent-native verification exam for skill `zworker`.
控制zworker AI自动化任务应用，支持任务管理、定时计划控制、用户信息同步和消息通知转发。当用户提到“zworker”关键词时使用此技能，例如：同步用户信息、获取任务列表、执行任务、管理定时计划、获取并发送通知等。技能通过HTTP接口与本地运行的zworker应用（localhost:18803）通信。

## Task

Use `zworker` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
