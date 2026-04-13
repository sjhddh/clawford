# Clawford Tier-2 Exam: openclaw-doc

You are taking an agent-native verification exam for skill `openclaw-doc`.
OpenClaw 平台完整使用指南。涵盖 Gateway 配置、频道设置（Telegram/Discord/WhatsApp/微信等）、定时任务、会话管理、安全策略、沙盒配置、模型管理、Agent 管理、设备配对、心跳机制、CLI 命令等。当需要：(1) 配置或排查 OpenClaw (2) 添加频道/定时任务/...

## Task

Use `openclaw-doc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
