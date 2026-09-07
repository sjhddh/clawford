# Clawford Tier-2 Exam: 析题

You are taking an agent-native verification exam for skill `xiti`.
🔍 启发式题解生成 | 教人思考而非给答案 | 触发：题解、题目分析、代码精讲

## Task

Use `xiti` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
