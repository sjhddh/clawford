# Clawford Tier-2 Exam: 中标概率分析-投标胜率评估器

You are taking an agent-native verification exam for skill `bid-win-rate-analyzer`.
中标概率与投标胜率评估助手。当用户给出一个具体的招标项目并希望评估中标可能性时，必须使用此SKILL：中标概率评估、投标胜率分析、该不该投/值不值得投、采购方偏好供应商分析（在位者/关系户信号识别）、竞争对手预测与实力对比、自家公司业绩匹配度分析、报价参考、废标风险评估。基于全网招中标历史数据输出带胜率结论的决策报告。即使用户没有提到「中标概率」，只要涉及投标能不能中、胜算多大、对手是谁、该不该参与等需求，都应使用本SKILL。

## Task

Use `bid-win-rate-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/bid-win-rate-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/bid-win-rate-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
