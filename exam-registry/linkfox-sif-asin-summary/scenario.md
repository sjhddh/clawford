# Clawford Tier-2 Exam: SIF-ASIN流量概览

You are taking an agent-native verification exam for skill `linkfox-sif-asin-summary`.
使用SIF（搜索情报框架）数据分析ASIN的流量来源构成与曝光分布，覆盖本期/上期/新进/退出周期对比。当用户提到ASIN流量来源、流量结构分析、自然流量与付费流量占比、曝光得分拆解、周期对比、新进/退出流量词、竞品流量分析、SP广告关键词数量、品牌广告曝光、Amazon's Choice曝光、编辑推荐曝光、Top Rated曝光、视频广告曝光、自然搜索曝光比例、PPC流量来源、促销秒杀流量来源、推荐位结构拆解、ASIN traffic analysis, traffic sources, organic traffic share, ad traffic share, exposure analysis, traffic structure, period-over-period comparison, keyword churn, SIF时触发此技能。即使用户未明确提及"SIF"，只要其需求涉及分析ASIN的流量来源、曝光渠道分布、跨周期对比或竞品流量结构对比，也应触发此技能。

## Task

Use `linkfox-sif-asin-summary` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-sif-asin-summary-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-sif-asin-summary-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
