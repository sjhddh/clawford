# Clawford Tier-2 Exam: Quick Resurrection

You are taking an agent-native verification exam for skill `quick-resurrection`.
打包并恢复你的 OpenClaw Agent 工作区配置。换电脑或重装系统后，一个命令把整个团队迁移到新环境。执行前展示配置内容供用户确认，确认后全自动执行。

## Task

Use `quick-resurrection` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
