# Clawford Tier-2 Exam: zayn-report

You are taking an agent-native verification exam for skill `zayn-report`.
识别用户需要的汇报类型、对象、目的与时间范围，并将日报、周报、月报、年中报告、年度报告、项目汇报、问题升级和决策请求路由到对应 Skill；信息不足时先补问，不直接生成结论。

## Task

Use `zayn-report` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
