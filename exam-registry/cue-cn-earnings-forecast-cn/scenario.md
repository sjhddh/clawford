# Clawford Tier-2 Exam: 业绩预告速读·区间与修正逐条挂源

You are taking an agent-native verification exam for skill `cue-cn-earnings-forecast-cn`.
A股业绩预告与快报逐项挂源：把单份预告的预告类型、区间上下限、同比变动幅度、变动原因、是否修正（前后两值并列）与披露日登记成六项，每项挂「」原句与检索日；区间中值不自己取、同比与修正幅度只认原句、未取到的逐条点名。机检 check_forecast.py 五道，零网络。Do NOT use for: 已出财报点评（走 cn-earnings-note）、当日全部公告清单（走 announcement-daily-cn）、隔夜全景（走 cn-morning-brief）、超预期评价、评级目标价、股价预测。Triggers: 业绩预告 / 业绩快报 / 预告修正 / 预亏预盈 / 预告区间

## Task

Use `cue-cn-earnings-forecast-cn` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-cn-earnings-forecast-cn-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-cn-earnings-forecast-cn-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
