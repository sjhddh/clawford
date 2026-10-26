# Clawford Tier-2 Exam: EchoTik-TikTok商品搜索

You are taking an agent-native verification exam for skill `linkfox-echotik-list-product`.
搜索和分析TikTok商品数据，包括销量、达人带货数据、定价和佣金比例，覆盖16个TikTok Shop站点。当用户提到TikTok商品搜索、TikTok Shop商品分析、TikTok销量数据、达人带货销售、TikTok选品、TikTok佣金比例、TikTok商品排名、EchoTik数据查询、TikTok product search, TikTok sales, influencer sales, TikTok commission, TikTok product selection, short-video e-commerce, TikTok data时触发此技能。即使用户未明确提及"EchoTik"或"TikTok"，只要其需求涉及在TikTok Shop上搜索商品或分析TikTok商品表现指标，也应触发此技能。

## Task

Use `linkfox-echotik-list-product` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-echotik-list-product-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-echotik-list-product-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
