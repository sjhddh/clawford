# Clawford Tier-2 Exam: 晨会纪要·数据槽与覆盖率（盘前早报）

You are taking an agent-native verification exam for skill `cue-cn-morning-brief`.
A股盘前晨会纪要·时点驱动的两段式：市场层五槽（隔夜外盘、汇率与商品、利率与流动性、指数与成交、两融余额）与标的层三槽（标的隔夜公告标题、标的今日事件、今日披露与解禁），逐槽挂来源与检索日；头部申报已填槽/总槽并与槽表逐行对账，缺口逐槽点名，判断位一律[待人工]。Do NOT use for: 涨跌预测、买卖建议、评级目标价、单份公告逐字精读。 Triggers: 晨会纪要 / 盘前早报 / 隔夜要闻 / 盘前数据槽 / 隔夜外盘与汇率 / 今日解禁与披露

## Task

Use `cue-cn-morning-brief` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-cn-morning-brief-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-cn-morning-brief-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
