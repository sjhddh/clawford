# Clawford Tier-2 Exam: OpenClaw飞书问题排查

You are taking an agent-native verification exam for skill `openclaw-feishu-troubleshoot`.
飞书插件问题排查工具。包含常见问题 FAQ 和深度诊断命令（/feishu_doctor）。 常见问题可随时查阅。诊断命令用于排查复杂问题（多次授权仍失败、自动授权无法解决等）， 会检查账户配置、API 连通性、应用权限、用户授权状态，并生成详细的诊断报告和解决方案。

## Task

Use `openclaw-feishu-troubleshoot` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
