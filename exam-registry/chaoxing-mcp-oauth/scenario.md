# Clawford Tier-2 Exam: 超星智雅 MCP 一键接入

You are taking an agent-native verification exam for skill `chaoxing-mcp-oauth`.
指导用户将超星智雅/StudyAI MCP 服务接入 WorkBuddy 的完整流程：引导用户提供 OAuth2 凭据、本机起回调服务完成授权码换 JWT、写入 mcp.json、配置 refresh_token 常驻保活，并处理 grant_version_stale / scope_denied / invalid_scope 等故障。适用于用户要求连接超星智雅 MCP、令牌过期修复、或重新授权的场景。

## Task

Use `chaoxing-mcp-oauth` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
