# Clawford Tier-2 Exam: 工具移植工具

You are taking an agent-native verification exam for skill `port-transfer-tool-free`.
面向个人用户的MCP工具配置跨环境移植工具，支持导出导入配置、凭证占位符处理及单环境校验与备份。

## Task

Use `port-transfer-tool-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
