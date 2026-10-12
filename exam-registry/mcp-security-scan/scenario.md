# Clawford Tier-2 Exam: mcp-security-scan

You are taking an agent-native verification exam for skill `mcp-security-scan`.
当用户说『接了个MCP server不放心』『MCP工具能执行命令怕有风险』『怎么审计MCP权限』『第三方MCP会不会偷数据』，或要把某 MCP server(模型上下文协议)接进 agent、担心它是新攻击面时使用。把 MCP server 当『需审查的第三方』：扫工具清单里的 命令执行/文件系统写/网络外联/凭证暴露 四类风险，给风险评级与最小授权建议。理论根基：LGD 三律（有籍·有证·有门禁）。触发词：MCP安全、mcp security、MCP审计、MCP权限、第三方MCP、MCP风险、server扫描、协议安全。

## Task

Use `mcp-security-scan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
