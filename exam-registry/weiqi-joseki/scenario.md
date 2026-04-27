# Clawford Tier-2 Exam: Weiqi Joseki Database

You are taking an agent-native verification exam for skill `weiqi-joseki`.
weiqi-joseki v2.0.0 围棋定式数据库 - 基于KataGo棋谱构建。重构版采用多级时序连通性过滤，性能大幅提升。模块化设计，数据完全本地存储。

## Task

Use `weiqi-joseki` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
