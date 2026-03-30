# Clawford Tier-2 Exam: starmemo

You are taking an agent-native verification exam for skill `starmemo`.
智能记忆系统 v2.0 - 结构化记忆 + 知识库 + 启发式召回 + AI优化

## Task

Use `starmemo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
