# Clawford Tier-2 Exam: Excel大师

You are taking an agent-native verification exam for skill `excel-maestro`.
Excel大师是面向批量表格处理的能力包。它不只罗列脚本，更解决四个高频痛点： 大xlsx一加载就内存爆炸、用pandas读写后格式公式全丢失、长数字变成科学计数法、 data_only=True拿到公式却是None。 核心能力： - 文件规模分层：小文件(<10MB)用pandas、中文件(10-100MB)用...

## Task

Use `excel-maestro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
