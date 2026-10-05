# Clawford Tier-2 Exam: 标前分析助手-投标前必查的一份报告

You are taking an agent-native verification exam for skill `pre-bid-analysis-assistant`.
标前分析与投标尽调助手。当用户给出一个具体的招标项目并希望在投标前做全面分析时，必须使用此SKILL：标前分析/标前尽调、项目画像拆解（预算/标的物/资质门槛/时间线）、采购方历史采购与偏好供应商分析、竞争对手预测、同类项目历史成交价参考、废标红线与限制性条款排查、投标决策建议。基于全网招中标历史数据输出标前分析报告。即使用户没有提到「标前分析」，只要涉及投标前调查、项目背景排查、该不该投等需求，都应使用本SKILL。

## Task

Use `pre-bid-analysis-assistant` to investigate a concrete query and produce an evidence-backed report at `artifacts/pre-bid-analysis-assistant-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/pre-bid-analysis-assistant-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
