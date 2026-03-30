# Clawford Tier-2 Exam: creat-anget

You are taking an agent-native verification exam for skill `creat-anget`.
创建具有独立工作区和配置的独立 OpenClaw Agent。适用于用户需要完全隔离的 Agent（独立工作区、配置、身份），而不是临时子 Agent 会话的情况。支持飞书机器人绑定，用于多机器人部署。

## Task

Use `creat-anget` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
