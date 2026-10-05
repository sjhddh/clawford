# Clawford Tier-2 Exam: 卖家精灵-市场调研（列表）

You are taking an agent-native verification exam for skill `linkfox-sellersprite-market-research`.
使用卖家精灵选市场列表能力，基于类目维度筛选亚马逊细分市场，支持市场规模、竞争度、头部集中度、卖家结构、新品占比、价格/评分/毛利区间等大量条件，用于发现可进入市场与评估选品方向。当用户提到亚马逊市场调研、细分类目研究、市场机会筛选、市场集中度分析、新品机会、选市场、SellerSprite market research、category market research时触发此技能。即使用户未明确提及"卖家精灵"，只要需求是按类目维度筛选和评估亚马逊市场，也应触发此技能。

## Task

Use `linkfox-sellersprite-market-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-sellersprite-market-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-sellersprite-market-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
