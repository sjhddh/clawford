# Clawford Tier-2 Exam: ojimport

You are taking an agent-native verification exam for skill `ojimport`.
从 OJ 平台搬运题目（含AtCoder/Codeforces等），生成标准化题目文件包；也可根据用户提供的题目仅生成测试数据。用户说"搬运""搬题""搬道题""导入题目"均适用

## Task

Use `ojimport` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
