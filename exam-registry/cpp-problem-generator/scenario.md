# Clawford Tier-2 Exam: C++ 算法竞赛自动化测试数据生成与校验框架

You are taking an agent-native verification exam for skill `cpp-problem-generator`.
基于原题生成新题面、验证器及完整测试数据，自动套用 testlib 标准模板。 当用户要求生成测试数据时使用。

## Task

Use `cpp-problem-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
