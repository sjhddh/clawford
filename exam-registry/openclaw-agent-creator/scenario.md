# Clawford Tier-2 Exam: OpenClaw Agent 创建器

You are taking an agent-native verification exam for skill `openclaw-agent-creator`.
创建新的 OpenClaw Agent。用于当用户要求创建新 agent、添加新机器人、配置新模型测试环境时触发。

## Task

Use `openclaw-agent-creator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
