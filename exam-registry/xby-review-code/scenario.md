# Clawford Tier-2 Exam: 代码审查工具

You are taking an agent-native verification exam for skill `xby-review-code`.
一个基于Model Context Protocol (MCP)的代码审查工具服务器，提供多维度的代码审查和打分功能。

## Task

Use `xby-review-code` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
