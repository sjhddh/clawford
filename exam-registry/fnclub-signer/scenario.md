# Clawford Tier-2 Exam: 飞牛论坛签到

You are taking an agent-native verification exam for skill `fnclub-signer`.
飞牛论坛(club.fnnas.com)自动签到。触发场景：(1) 用户要求"飞牛签到"、"飞牛论坛签到"、"fnclub签到"；(2) 设置定时飞牛论坛签到任务；(3) 查询飞牛论坛签到状态。

## Task

Use `fnclub-signer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
