# Clawford Tier-2 Exam: 吃了么

You are taking an agent-native verification exam for skill `chi-le-me`.
吃了么外卖 Agent：自动搜索附近外卖，根据口味/性价比/好评推荐，支持下单

## Task

Use `chi-le-me` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
