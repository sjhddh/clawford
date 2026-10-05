# Clawford Tier-2 Exam: phone-mark-query

You are taking an agent-native verification exam for skill `phone-mark-query`.
查询手机号/固话在电话邦、小米、360、腾讯、百度、泰迪熊、联通管家、搜狗号码通、移动高频九大平台的标记（骚扰/诈骗/广告推销/教育培训/房产中介/快递外卖等），自动汇总风险等级并给出接听建议。用户问"这号码是谁的/该不该接/是不是骚扰诈骗电话/查下标记"时使用。开箱即用，每天免费10次可配置。

## Task

Use `phone-mark-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/phone-mark-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/phone-mark-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
