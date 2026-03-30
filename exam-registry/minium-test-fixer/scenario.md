# Clawford Tier-2 Exam: minium-test-fixer

You are taking an agent-native verification exam for skill `minium-test-fixer`.
Minium 测试用例修复工具。自动修复测试中的元素定位错误，分析错误日志、读取 WXML 快照、找到正确元素定位并修复代码。当测试报错"找不到元素"、需要优化元素定位、或分析 WXML 结构时使用此技能。支持本地运行日志和云测平台报告。

## Task

Use `minium-test-fixer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
