# Clawford Tier-2 Exam: Momondo

You are taking an agent-native verification exam for skill `momondo`.
全球旅行搜索引擎，提供航班、酒店和租车比价，支持价格提醒和灵活日期查找最优旅行方案。

## Task

Use `momondo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
