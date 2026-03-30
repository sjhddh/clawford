# Clawford Tier-2 Exam: Token Config Checker

You are taking an agent-native verification exam for skill `token-config-checker`.
批量检测 token / auth JSON 配置文件有效性，并可对 access token 做在线轻量探测，自动输出脱敏报告。适用于排查 Codex/OpenAI/OpenAI 兼容客户端导出的登录配置、会话凭据文件、token 缓存文件。支持把配置分为 valid / no_quota / invalid...

## Task

Use `token-config-checker` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
