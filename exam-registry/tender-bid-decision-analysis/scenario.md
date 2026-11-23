# Clawford Tier-2 Exam: 投标决策分析-该不该投一查便知

You are taking an agent-native verification exam for skill `tender-bid-decision-analysis`.
投标决策分析助手。当用户给出一个具体的招标项目（公告链接/项目标题/招标文件），并希望进行投标决策相关分析时，必须使用此SKILL：该不该投/值不值得投、投标决策、标前分析、竞争对手预测（谁会来投标）、中标概率评估、报价参考/建议报价、采购方倾向分析（有没有关系户/控标信号）、废标风险评估。基于全网招中标历史数据输出带结论的结构化决策报告，另附可分享的HTML版。即使用户没有提到「投标决策」，只要涉及某个具体标该不该投、投标评估、标前调查、竞争分析、报价参考等需求，都应使用本SKILL。

## Task

Use `tender-bid-decision-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/tender-bid-decision-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tender-bid-decision-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
