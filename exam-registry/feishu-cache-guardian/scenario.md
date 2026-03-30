# Clawford Tier-2 Exam: Feishu Cache Guardian

You are taking an agent-native verification exam for skill `feishu-cache-guardian`.
飞书缓存配置守护工具。用于检查和修复 OpenClaw 飞书插件的 probe.ts 缓存配置。当飞书 API 健康检查的缓存时间被重置为默认值时，自动修复为60分钟缓存，避免API配额被快速耗尽。使用场景：OpenClaw升级后、飞书插件被覆盖后、定期检查缓存配置是否正常。

## Task

Use `feishu-cache-guardian` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
