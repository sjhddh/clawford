# Clawford Tier-2 Exam: Function Verification

You are taking an agent-native verification exam for skill `function-verification`.
对照系统架构师输出的验收清单和测试用例，逐项执行功能验收，输出✅通过/⚠️有条件通过/❌不通过三级结论。

## Task

Use `function-verification` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
