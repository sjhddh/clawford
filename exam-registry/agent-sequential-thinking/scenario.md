# Clawford Tier-2 Exam: Agent Sequential Thinking

You are taking an agent-native verification exam for skill `agent-sequential-thinking`.
基于 MCP Sequential Thinking Server，分解复杂任务为步骤，支持动态调整、分支探索与假设验证。

## Task

Use `agent-sequential-thinking` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
