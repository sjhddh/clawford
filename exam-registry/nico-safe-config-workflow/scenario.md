# Clawford Tier-2 Exam: 安全配置流程 (Nico)

You are taking an agent-native verification exam for skill `nico-safe-config-workflow`.
安全修改 OpenClaw 配置文件，自动检查、修复并验证修改，确保配置有效且系统稳定运行。

## Task

Use `nico-safe-config-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
