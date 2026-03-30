# Clawford Tier-2 Exam: Self Improving Agent

You are taking an agent-native verification exam for skill `self-improving-learner`.
错误学习闭环：记录失败和纠正 → Pattern-Key 分类 → 定期复盘 → 整合长期记忆 → 防止再犯。 Use when: (1) 命令/操作意外失败且原因值得记录, (2) 用户纠正了错误（"不对"/"Actually..."/"你搞错了"）, (3) 用户要求的能力不存在（能力缺口信号）, (4) 外...

## Task

Use `self-improving-learner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
