# Clawford Tier-2 Exam: 竞对情报分析-投标对手底细摸排

You are taking an agent-native verification exam for skill `competitor-intel-analysis`.
竞争对手情报分析助手（投标方视角）。当用户给出一个公司主体，想分析竞争对手、摸清投标对手底细时，必须使用此SKILL：竞对分析、竞争对手调查、对手中标实力评估、竞对主战场与强势品类、竞对大客户识别、投标交锋记录（在什么品类/地区/客户上碰面）、自家与竞对双公司对比、竞对动态周报监控。基于全网招投标数据输出报告：竞对从投标重叠算出、实力用中标记录证明、客户关系是真实合同关系。支持单公司深度报告与双公司对比两种模式。即使用户没有提到「竞对」，只要想搞清楚投标场上某个对手的实力、地盘与打法，都应使用本SKILL。注意边界：若用户给出一个具体的招标项目做该不该投的决策分析，使用 zlbx-bid-de

## Task

Use `competitor-intel-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/competitor-intel-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/competitor-intel-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
