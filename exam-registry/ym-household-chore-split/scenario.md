# Clawford Tier-2 Exam: ym-household-chore-split

You are taking an agent-native verification exam for skill `ym-household-chore-split`.
按成员时间、能力与偏好安排家务分工，估算大致工时是否均衡，给出轮值表与冲突处理规则，输出可直接贴出的版本。当用户说「家务怎么分」「排个值日表」「谁做什么」时使用。 也适用于「轮值安排」「chore chart」这类说法。

## Task

Use `ym-household-chore-split` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
