# Clawford Tier-2 Exam: 博辩

You are taking an agent-native verification exam for skill `bobian`.
分析博文呈现出的 AI 写作风格和论证结构，并生成最多 140 个英文等价字符的支持或反对评论。

## Task

Use `bobian` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
