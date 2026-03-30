# Clawford Tier-2 Exam: Tool Master

You are taking an agent-native verification exam for skill `tool-master`.
工具使用大师 - 基于关键词映射表的实用工具查找系统

## Task

Use `tool-master` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
