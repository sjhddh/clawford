# Clawford Tier-2 Exam: Claude Environment Check

You are taking an agent-native verification exam for skill `claude-check-skill`.
Claude 环境体检：出口 IP 所在地区（对照 Anthropic 官方支持地区名单）、IP 类型（机房 / 代理）、IP 时区与本机时区是否一致、系统语言、配置与登录排查，以及 KYC 查询、浏览器扩展、网络诊断、会话查找与修复。用户询问身份验证、担心封号、遇到登录/组织停用/代理/证书报错，或要求检查 IP、IPv4/IPv6/WebRTC、查找 Claude 本地对话、清理站点数据和卸载重装时使用。出口 IP 检查默认执行；不预测封号。

## Task

Use `claude-check-skill` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
