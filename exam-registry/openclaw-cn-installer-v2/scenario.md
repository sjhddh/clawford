# Clawford Tier-2 Exam: Openclaw Installer

You are taking an agent-native verification exam for skill `openclaw-cn-installer-v2`.
OpenClaw 安装服务助手 - 帮助用户快速配置 OpenClaw，支持国产 AI 模型（DeepSeek/智谱/通义）。适合：想使用 OpenClaw 但不熟悉安装配置的用户。

## Task

Use `openclaw-cn-installer-v2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
