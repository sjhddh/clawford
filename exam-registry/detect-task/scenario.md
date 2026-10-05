# Clawford Tier-2 Exam: 投前 AI 图检测 Detect Task

You are taking an agent-native verification exam for skill `detect-task`.
投前 AI 图真实性质检。待检图 → 风险等级 + 8 项逐条判定 + 可直接追加到 prompt 的修正句，可自动重跑直到达标。当用户说「投前检测」「图片质检」「检查有没有崩」「上架前把关」「这图能不能用」时使用。

## Task

Use `detect-task` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
