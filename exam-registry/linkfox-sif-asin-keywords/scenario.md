# Clawford Tier-2 Exam: SIF-ASIN关键词

You are taking an agent-native verification exam for skill `linkfox-sif-asin-keywords`.
使用SIF数据反查任意亚马逊ASIN的流量关键词，包括自然排名、广告排名、搜索量、流量占比、自然/付费得分、ABA TOP3点击集中度、点击转化率、搜索量同比涨跌及周/月时间窗。当用户提到ASIN关键词分析、ASIN反查、流量关键词研究、自然排名查询、广告排名查询、关键词位置追踪、SIF关键词数据、竞品关键词窥探、查看哪些关键词为产品带来流量、分析特定ASIN的关键词表现、按周/月/最近N天的关键词时间窗、ASIN reverse keyword lookup, traffic keywords, organic ranking, ad ranking, search volume, SIF keywords, competitor keyword reverse lookup, click concentration, click-to-purchase conversion, week-over-week search volume时触发此技能。即使用户未明确提及"SIF"，只要其需求涉及查找与特定亚马逊商品（ASIN）关联的关键词，也应触发此技能。

## Task

Use `linkfox-sif-asin-keywords` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-sif-asin-keywords-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-sif-asin-keywords-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
