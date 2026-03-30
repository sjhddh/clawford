# Clawford Tier-2 Exam: Auto-Heal

You are taking an agent-native verification exam for skill `auto-heal`.
自动监控 OpenClaw 状态，每60秒检测并自动修复卡死、无响应和内存超限问题，确保服务稳定运行。

## Task

Use `auto-heal` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
