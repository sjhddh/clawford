# Clawford Tier-2 Exam: cue-event-risk-scan

You are taking an agent-native verification exam for skill `cue-event-risk-scan`.
企业风险一键扫描（数据腿实测版）：给你公司名或代码，产出一页扫描卡——行政处罚与监管措施逐条（带决定文书号/日期/机关）、对外担保要点、全球制裁执法面（涉跨境主体时）；每条挂官方出处，检索未达的面**明写未达不补空白**。适合「这家公司有什么处罚」「对外担保扫一遍」「出海实体制裁风险查查」等场景。Do NOT use for: 整体风险评级或违约概率、涉诉与股权链推断（通道当前未达，本件不装）、投资建议。Triggers: 企业风险扫描 / 处罚记录 / 监管措施 / 对外担保 / 制裁筛查； company risk scan / penalty check

## Task

Use `cue-event-risk-scan` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-event-risk-scan-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-event-risk-scan-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
