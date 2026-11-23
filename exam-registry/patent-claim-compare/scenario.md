# Clawford Tier-2 Exam: 专利比对

You are taking an agent-native verification exam for skill `patent-claim-compare`.
专利比对、权利要求对比。当用户说「这两件专利有什么区别」「比一下这几件专利的权利要求」「我们的专利和对方的哪里不一样」「对比文件和本申请的区别特征」「特征比对表」时使用。输出技术特征比对表（Excel 能打开）。 Breaks the independent claims of 2 or 3 patents into technical features and compares them one by one, covering what is shared, what differs and whose scope is broader, as a feature comparison table.

## Task

Use `patent-claim-compare` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
