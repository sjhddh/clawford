# Clawford Tier-2 Exam: 图表规格

You are taking an agent-native verification exam for skill `cue-cn-table-to-chart`.
表→图起草：输入是一张表（本地文件，或解析通道从扫描件／云盘 PDF／照片里取回的正文），产出四节——图的规格（图型／横轴／纵轴／序列，由人选不代选）、读表要点（每条一句、每个数配列头逐字回那一格、挂 [S#] 与页码或行号）、图的限度与未取到（缺格与空值／合并格与跨列表头／单位与口径／表外推与未读到，逐类点名）、来源与解析日。机检五道：形制与条数带／锚与定位／数逐字回那一格（全篇书名号都回表）／四类限度点名／投资与评级断言零命中，零网络、不代人算数。Do NOT use for: 投资建议、评级与目标价、需要重算比率的场合。Triggers: 表格作图 / 图规格 / 读表要点

## Task

Use `cue-cn-table-to-chart` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-cn-table-to-chart-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-cn-table-to-chart-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
