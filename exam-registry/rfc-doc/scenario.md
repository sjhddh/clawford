# Clawford Tier-2 Exam: RFC文档服务

You are taking an agent-native verification exam for skill `rfc-doc`.
一个用于从ietf.org网站获取、解析和阅读RFC文档的MCP服务器，提供程序化交互工具。

## Task

Use `rfc-doc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
