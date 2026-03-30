# Clawford Tier-2 Exam: 安全配置流程

You are taking an agent-native verification exam for skill `safe-config-workflow`.
安全修改 OpenClaw 配置，先查文档和验证，确认后自动修复并反馈，记录教训，确保 Gateway 正常运行。

## Task

Use `safe-config-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
