# Clawford Tier-2 Exam: go-next-move

You are taking an agent-native verification exam for skill `go-next-move`.
从围棋/Weiqi 棋盘照片或文本棋盘分析当前局面，调用本地 KataGo 按初级、中级、高级强度推荐下一手。适用于用户询问黑棋或白棋下一手应下哪里、希望按对手水平选择落点，或想在不改变棋盘的情况下获得更均衡的 AI 辅助建议。

## Task

Use `go-next-move` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
