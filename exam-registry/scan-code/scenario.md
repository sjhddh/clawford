# Clawford Tier-2 Exam: 代码安全扫描工具

You are taking an agent-native verification exam for skill `scan-code`.
CodeGuard MCP是一款实时AI代码安全扫描工具，用于检测AI生成代码中的漏洞、密钥和合规性问题，适用于开发环境中的代码安全审查。

## Task

Use `scan-code` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
