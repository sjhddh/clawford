# Clawford Tier-2 Exam: ClawBrain Doctor

You are taking an agent-native verification exam for skill `clawbrain-pro-doctor`.
诊断你的 OpenClaw 配置和运行状态，基于 v1.2 的输出验证、模型健康监控、知识图谱检查、记忆来源标注、降级通知和长对话截断诊断

## Task

Use `clawbrain-pro-doctor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
