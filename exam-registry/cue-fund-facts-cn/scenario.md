# Clawford Tier-2 Exam: 基金资料卡

You are taking an agent-native verification exam for skill `cue-fund-facts-cn`.
境内基金资料卡：输入一份产品资料概要或招募说明书，产出八项逐字速读——基金名称与类型、投资范围与比例限制、业绩比较基准、管理费与托管费、申购赎回费用与到账、基金经理与任职期限、风险收益特征与风险等级、分红与收益分配规则。每项挂原句＋锚，缺项点名「未检索到」；费率逐字，推定语不算值。打新收益、收益预测、评级与目标价一律 [待人工]。Do NOT use for: 基金推荐与申购建议、收益预测、代客申购、收益与风险承诺。Triggers: 这只基金的费率 / 业绩比较基准 / 什么时候分红；fund facts card

## Task

Use `cue-fund-facts-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
