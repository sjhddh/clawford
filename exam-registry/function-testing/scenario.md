# Clawford Tier-2 Exam: Function Testing

You are taking an agent-native verification exam for skill `function-testing`.
根据需求文档（PRD）、Git 提交记录或用户故事生成功能测试用例，输出 Excel 报告。

## Task

Use `function-testing` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
