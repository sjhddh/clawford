# Clawford Tier-2 Exam: 亚马逊-前端商品搜索

You are taking an agent-native verification exam for skill `linkfox-amazon-search`.
模拟真实用户在亚马逊前台搜索，获取实时关键词排名和搜索结果页数据。当用户提到亚马逊商品搜索、搜索结果抓取、关键词在搜索页的排名、ASIN排名位置查询、竞品发现、搜索页价格对比、广告商品分析、新品监控、前台搜索模拟、Amazon search, keyword ranking, search results, ASIN ranking position, competitor discovery, price comparison, sponsored product analysis, real-time search, new product monitoring时触发此技能。即使用户未明确提及"搜索模拟"，只要其需求涉及实时亚马逊搜索结果、商品排位数据或前台SERP分析，也应触发此技能。

## Task

Use `linkfox-amazon-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-amazon-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-amazon-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
