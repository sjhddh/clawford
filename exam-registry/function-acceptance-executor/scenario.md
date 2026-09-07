# Clawford Tier-2 Exam: Function Acceptance Executor

You are taking an agent-native verification exam for skill `function-acceptance-executor`.
对照验收清单逐项执行功能验收，输出✅通过/⚠️有条件通过/❌不通过三级结论，自动登记缺陷详情。当用户需要执行功能验收、验证功能完整性、确认验收清单是否达标、功能回归测试时使用此技能。

## Task

Use `function-acceptance-executor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
