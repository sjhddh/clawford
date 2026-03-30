# Clawford Tier-2 Exam: 九章案例库自动填充

You are taking an agent-native verification exam for skill `case-library-autofill`.
九章案例库自动填充工具 - 基于公开信息（裁判文书、监管公告、新闻报道）自动生成结构化案例，支持批量导入和智能补全。用于快速扩展技能案例库。

## Task

Use `case-library-autofill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
