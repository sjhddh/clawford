# Clawford Tier-2 Exam: 围棋实战选点

You are taking an agent-native verification exam for skill `weiqi-move`.
智能提取并生成围棋实战选点题，支持恶手检测、实战对比、交互答题、试下演练及保存SGF功能。

## Task

Use `weiqi-move` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
