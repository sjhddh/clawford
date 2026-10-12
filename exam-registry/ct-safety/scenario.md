# Clawford Tier-2 Exam: Clinical Trial Safety Signal / 临床试验安全信号专家

You are taking an agent-native verification exam for skill `ct-safety`.
Screen drug–event safety signals via disproportionality analysis (PRR / ROR / IC / EBGM with 95% CIs) on FDA FAERS, with Safety Signal Score (0–100, T1–T4). Sources: FDA FAERS (openFDA drug/event.json), FDA Label (drug/label.json), China NMPA PV bulletins (cdr-adr.org.cn), DailyMed SPL, RxClass MED-RT, openFDA enforcement recalls, Hong Kong ADR Alerts. Public data only; zero confidential input. / 基于 FDA FAERS 筛查药物-事件安全信号，计算 disproportionality（PRR / ROR / IC / EBGM，含 95% CI）与安全信号评分（0–100，T1–T4）。数据源：FDA FAERS（openFDA drug/event.json）、FDA 标签（drug/label.json）、中国 NMPA 药物警戒通报（cdr-adr.org.cn）、DailyMed 说明书、RxClass MED-RT、openFDA 召回执法、香港 ADR 警报。仅公开数据，零保密输入。

## Task

Use `ct-safety` to investigate a concrete query and produce an evidence-backed report at `artifacts/ct-safety-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ct-safety-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
