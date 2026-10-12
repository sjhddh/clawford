# Clawford Tier-2 Exam: feedback-loop

You are taking an agent-native verification exam for skill `feedback-loop`.
当用户对输出给出学习或行为反馈(称赞/批评/达成共识/改主意)时,按反馈学习循环处理写入 feedback-log,重要反馈走完整落盘链(feedback-log→conclusions→MEMORY→验证可检索),保持立场一致不横跳。触发词:做得好/记住了/有问题/怎么又这样/记住/以后都这样(仅在指向本输出/行为的评价时生效)。

## Task

Use `feedback-loop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
