# Clawford Tier-2 Exam: 文本转换工具

You are taking an agent-native verification exam for skill `text-toolkit`.
一个提供文本转换、格式化和分析功能的MCP服务器，可直接集成到开发工作流中。

## Task

Use `text-toolkit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
