# Clawford Tier-2 Exam: 合同逐条要点与需盯条款清单·逐条挂原文

You are taking an agent-native verification exam for skill `cue-cn-contract-clauses`.
合同逐条拆解起草：输入是一份合同正文（本地文件或解析通道取回的正文），产出四节清单——一句话概览（标的、期限、价款，只写文里有的）、逐条要点（每条一句原文摘，挂 [S#] 与页码或行号）、需盯条款（单方变更／自动续约／排他／违约金／争议解决地／数据与保密／责任上限七类逐类点名，没有的写未见到）、来源与解析日。机检 check_clauses.py 五道：形制与条数带／锚与定位／引文逐字回原文／七类点名／法律意见与效力断言零命中，零网络。适合签前自查。Do NOT use for: 实务级法律意见、条款效力判断、替代律师审查、评级排序。Triggers: 合同要点 / 条款清单 / 签前自查

## Task

Use `cue-cn-contract-clauses` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-cn-contract-clauses-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-cn-contract-clauses-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
