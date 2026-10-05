# Clawford Tier-2 Exam: Cue 深度研究（通用版）

You are taking an agent-native verification exam for skill `cue-deep-research`.
Cue 深度调研通用版——通过 Cue 服务端调用公开数据源完成多维度交叉验证研究。覆盖A股/港股/美股/工商/司法/监管/研报/资金流/招投标等公开数据，每条结论带原链接可回查。仅限公开信息检索，不处理个人数据或非公开信息。支持仿写（mimic），让报告模仿指定文档的写作风格。触发词：深度研究、调研分析、竞品对标、行业趋势、基本面分析

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
