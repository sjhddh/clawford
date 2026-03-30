# Clawford Tier-2 Exam: 回归测试用例生成器

You are taking an agent-native verification exam for skill `regression-test-generator`.
回归测试用例生成器。当软件发生变更时，根据变更影响范围自动推荐需要执行的回归测试用例，并生成优先级排序，帮助测试团队快速聚焦。触发词：生成回归测试、回归测试、测试用例推荐、regression test、测试建议

## Task

Use `regression-test-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
