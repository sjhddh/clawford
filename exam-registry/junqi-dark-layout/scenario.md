# Clawford Tier-2 Exam: Junqi Dark Layout

You are taking an agent-native verification exam for skill `junqi-dark-layout`.
使用大模型生成中国军棋双人 25 格暗棋阵型，再用 Python 做硬规则校验与图片渲染。用于用户想要军棋暗棋摆阵、想按风格生成更有策略感的布局、想输出图片卡片、或需要先生成再严格验合法性的场景。

## Task

Use `junqi-dark-layout` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
