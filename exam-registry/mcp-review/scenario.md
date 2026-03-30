# Clawford Tier-2 Exam: Mcp Review

You are taking an agent-native verification exam for skill `mcp-review`.
审查MCP Server工具实现是否符合接口设计准则。当用户要求review、检查、审查MCP工具定义，或说"check一下工具设计"、"review mcp tools"、"工具设计有没有问题"时使用。

## Task

Use `mcp-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
