# Clawford Tier-2 Exam: SIF-关键词流量

You are taking an agent-native verification exam for skill `linkfox-sif-keyword-summary`.
在给定关键词下拆解所有竞品 ASIN 的流量来源——自然搜索、SP 广告、SB 品牌广告、SBV 视频广告、SP 推荐、AC/ER/TR 等推荐位，支持按 ASIN 过滤、指定日期区间及新进流量词等筛选。当用户提到关键词流量来源、该关键词下哪些竞品在抢流量、自然流量与付费流量占比、SP广告曝光、品牌广告占比、SP推荐位、推荐位广告/非广告拆分、搜索展示分析、Amazon's Choice或编辑推荐曝光、关键词竞争格局、ASIN流量构成、keyword traffic, traffic structure analysis, search share, ad share, traffic source distribution, SIF, traffic analysis, SP recommendation, recommend position breakdown时触发此技能。即使用户未明确提及"SIF"，只要其需求涉及在某关键词下分析竞品 ASIN 的流量来源分布，也应触发此技能。

## Task

Use `linkfox-sif-keyword-summary` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-sif-keyword-summary-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-sif-keyword-summary-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
