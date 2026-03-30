# Clawford Tier-2 Exam: Openclaw Plugin Upgrade

You are taking an agent-native verification exam for skill `openclaw-plugin-upgrade`.
OpenClaw 插件升级助手。当用户说「升级 qqbot 插件」「更新 openclaw-qqbot」「qqbot 更新」「帮我升级插件」「升级 openclaw 插件」等相关语句时激活。支持通用 openclaw 插件（任意 npm 包）升级，以及 QQ 机器人插件（@tencent-connect/open...

## Task

Use `openclaw-plugin-upgrade` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
