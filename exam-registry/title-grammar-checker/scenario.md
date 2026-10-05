# Clawford Tier-2 Exam: Title Grammar Checker - 标题清晰度语法检查

You are taking an agent-native verification exam for skill `title-grammar-checker`.
检查学术论文标题的语法正确性和表达清晰度。 用于：检查词汇密度、句子成分、主谓关系、被动结构、缩写使用。 触发场景："检查标题语法"、"标题是否清晰"、"帮我看看这个标题的表达"。

## Task

Use `title-grammar-checker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
