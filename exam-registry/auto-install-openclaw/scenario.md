# Clawford Tier-2 Exam: Install OpenClaw

You are taking an agent-native verification exam for skill `auto-install-openclaw`.
OpenClaw 全自动安装、配置和修复工具。包括：OpenClaw 安装、Claude API 中转站配置、飞书插件集成、bug 自动修复。当用户需要安装、配置或修复 OpenClaw 时使用此技能。

## Task

Use `auto-install-openclaw` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
