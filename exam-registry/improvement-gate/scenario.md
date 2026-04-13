# Clawford Tier-2 Exam: Improvement Gate

You are taking an agent-native verification exam for skill `improvement-gate`.
当执行完变更需要验证是否应保留、候选被标记 pending 需要人工审批、或想查看待审队列时使用。6 层机械门禁: Schema→Compile→Lint→Regression→Review→HumanReview，其中 Schema/Compile/Regression/Review 为阻塞层（失败即拒绝），L...

## Task

Use `improvement-gate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
