# Clawford Tier-2 Exam: 翻译

You are taking an agent-native verification exam for skill `translate-hub`.
支持中英文文本及批量文件翻译，专业术语对齐，保持格式，适用于文档、代码注释和邮件翻译场景。

## Task

Use `translate-hub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
