# Clawford Tier-2 Exam: ida-reverse

You are taking an agent-native verification exam for skill `ida-reverse`.
使用 IDA Pro MCP 做任何逆向工作时必须加载：规范化分析流程——先反编译再下结论、边分析边标注落库、防幻觉重命名。

## Task

Use `ida-reverse` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
