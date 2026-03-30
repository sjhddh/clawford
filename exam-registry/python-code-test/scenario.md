# Clawford Tier-2 Exam: Python Code Tester

You are taking an agent-native verification exam for skill `python-code-test`.
代码功能测试skill，根据用户需求搜索代码、生成测试用例、执行测试并修复问题

## Task

Use `python-code-test` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
