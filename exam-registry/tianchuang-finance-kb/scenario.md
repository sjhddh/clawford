# Clawford Tier-2 Exam: myskill

You are taking an agent-native verification exam for skill `tianchuang-finance-kb`.
提供天创财务相关文档的严格逐字检索，返回精准原文或“无”，不做解释和修改，仅限中文内容。

## Task

Use `tianchuang-finance-kb` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
