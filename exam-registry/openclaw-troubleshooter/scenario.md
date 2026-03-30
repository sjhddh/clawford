# Clawford Tier-2 Exam: Openclaw Troubleshooter

You are taking an agent-native verification exam for skill `openclaw-troubleshooter`.
OpenClaw 故障诊断与一键修复工具。自动检测 Gateway 状态、配置错误、端口冲突、危险技能代码，并提供修复方案。基于真实故障经验提取。

## Task

Use `openclaw-troubleshooter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
