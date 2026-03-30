# Clawford Tier-2 Exam: Safe Config Workflow

You are taking an agent-native verification exam for skill `safe-config-workflow-zh-cn`.
提供安全修改 OpenClaw 配置的全流程管理，确保变更前确认、自动修复、备份对比及运行验证，保障系统稳定。

## Task

Use `safe-config-workflow-zh-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
