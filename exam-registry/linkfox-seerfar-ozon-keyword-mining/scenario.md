# Clawford Tier-2 Exam: Seerfar-Ozon关键词挖掘

You are taking an agent-native verification exam for skill `linkfox-seerfar-ozon-keyword-mining`.
Seerfar Ozon 关键词挖掘：围绕一个种子关键词挖掘 Ozon（及 Wildberries）相关关键词，并按搜索热度、增长、商品数、卖家数、竞品数、价格、相关度、标题密度、加购转化等多维指标筛选，返回每个挖掘词的月搜热度、增长、市场空间、竞品/卖家数、均价、加购转化、Top 商品等市场画像，用于 Ozon 选词拓展、长尾词挖掘与种子词机会分析。当用户提到 Ozon 关键词挖掘、Ozon 选词拓展、Ozon 长尾词挖掘、围绕某词找相关词、Ozon 蓝海词挖掘、Seerfar Ozon、Ozon keyword mining, Ozon keyword expansion, Ozon related keywords, mine Ozon keywords 时触发此技能。即使用户未明确提到"Seerfar"，只要其意图是围绕一个种子词挖掘 Ozon 相关关键词并查看市场画像，也应触发此技能。

## Task

Use `linkfox-seerfar-ozon-keyword-mining` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
