# Clawford Tier-2 Exam: FastMoss-TikTok商品搜索

You are taking an agent-native verification exam for skill `linkfox-fastmoss-product-search`.
基于FastMoss数据搜索和筛选TikTok全球电商商品，支持关键词搜索、多维度筛选（类目、店铺类型、佣金率、销量、达人数等）和排序。当用户提到TikTok选品、TikTok商品搜索、TikTok产品数据、TikTok达人带货、TikTok佣金率、TikTok爆款追踪、TikTok GMV分析、TikTok product search, TikTok product research, TikTok creator sales, TikTok commission rate, TikTok GMV analysis, FastMoss时触发此技能。即使用户未明确提及"FastMoss"，只要其需求涉及在TikTok平台搜索商品数据或分析商品表现，也应触发此技能。

## Task

Use `linkfox-fastmoss-product-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-fastmoss-product-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-fastmoss-product-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
