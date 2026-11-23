# Clawford Tier-2 Exam: 抵押物穿透查询

You are taking an agent-native verification exam for skill `debtop-collateral-check`.
抵押物穿透查询：给定抵押物线索（小区 / 楼盘 / 地块 / 门牌，或资产类型词如「工业用地」「商铺」「采矿权」「机器设备」，可再带面积区间），在公开债权公告中反查关联债权——定位公告、债务人、出让方与保证人，并从公告披露文本中解析抵押物的名称、坐落与面积。当用户说「查一下某小区某面积的抵押物情况」「XX 花园 / XX 地块有没有被抵押在债权公告里」「某类抵押物对应哪些债权」时使用。免注册免登录，只做公开公告的只读检索与原文解析。

## Task

Use `debtop-collateral-check` to investigate a concrete query and produce an evidence-backed report at `artifacts/debtop-collateral-check-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/debtop-collateral-check-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
