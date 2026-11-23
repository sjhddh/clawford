# Clawford Tier-2 Exam: 1688-以图搜图

You are taking an agent-native verification exam for skill `linkfox-1688-search-by-image`.
1688平台以图搜图，通过商品图片精准检索外观相似或同款的1688货源，返回标题、价格、起批量、月销量、复购率、交易评分等核心数据。当用户提到1688以图搜图、1688找货源、以图找同款、跨境找工厂、1688识图、图片找货源、找相似货源、image search 1688、find supplier by image时触发此技能。即使用户未明确提及"以图搜图"，只要用户提供了图片URL并希望在1688上查找匹配或相似的货源商品，也应触发此技能。

## Task

Use `linkfox-1688-search-by-image` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-1688-search-by-image-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-1688-search-by-image-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
