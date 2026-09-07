# Clawford Tier-2 Exam: 中标结果查询与竞争分析

You are taking an agent-native verification exam for skill `bid-award-competitive-analysis`.
中标结果查询与竞争分析助手。当用户给出一个公司主体（公司名/简称/公司链接），想查中标结果、中标记录、中标业绩，并进一步分析竞争格局时，必须使用此SKILL：某公司中过什么标、中标金额与逐年走势、中标地区分布/主战场、标王项目盘点、竞争对手识别（从投标重叠算出）、交锋品类与共同客户分析、双公司竞争对比，以及配套的企业画像、客户供应商生态、公开风险检索。基于全网招投标数据输出报告：实力用中标记录证明、竞对从投标重叠算出、客户供应商是真实合同关系。支持单公司深度报告与双公司对比两种模式。即使用户没有提到「竞争分析」，只要想通过中标记录看清一家公司的实力与对手，都应使用本SKILL。注意边界：若用户

## Task

Use `bid-award-competitive-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/bid-award-competitive-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/bid-award-competitive-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
