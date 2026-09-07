# Clawford Tier-2 Exam: Kimi Desktop Gateway Policy

You are taking an agent-native verification exam for skill `kimi-desktop-gateway-policy`.
Kimi 桌面端管理 openclaw gateway 子进程生命周期。当用户提到"重启 / 启动 / 停止 openclaw / openclaw 卡住 / gateway 没响应"等需要操控 daemon 进程时，必读此 skill。 说明哪些 CLI 不能用、以及正确的恢复路径。

## Task

Use `kimi-desktop-gateway-policy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
