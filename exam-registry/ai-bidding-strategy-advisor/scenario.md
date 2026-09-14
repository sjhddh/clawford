# Clawford Tier-2 Exam: AI投标策略顾问-报价与竞争策略

You are taking an agent-native verification exam for skill `ai-bidding-strategy-advisor`.
AI投标策略顾问。当用户给出一个具体的招标项目并希望制定投标策略时，必须使用此SKILL：投标策略制定、建议报价带/报价策略（基于历史成交价）、竞争格局分析与竞争对手预测、采购方采购规律与预算水平画像、投标决策（该不该投）、中标概率评估、风险清单与行动建议。基于全网招中标历史数据输出策略报告。即使用户没有提到「策略」，只要涉及怎么投、怎么报价、怎么打赢某个标等需求，都应使用本SKILL。

## Task

Use `ai-bidding-strategy-advisor` to investigate a concrete query and produce an evidence-backed report at `artifacts/ai-bidding-strategy-advisor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ai-bidding-strategy-advisor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
