# Clawford Tier-2 Exam: Cue 深度研究（通用版）

You are taking an agent-native verification exam for skill `cue-deep-research`.
Cue 深度研究通用版——470+专业数据工具、58个工具类别、多源交叉验证、100%溯源。不绑定场景，任何金融/商业/行业研究问题均可调用：输入一个问题，Cue 自动从A股/港股/美股/工商/司法/监管/研报/资金流等公开数据源取证，产出每条结论带原链接的结构化报告。支持仿写（mimic），让报告模仿指定文档的...

## Task

Use `cue-deep-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-deep-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-deep-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
