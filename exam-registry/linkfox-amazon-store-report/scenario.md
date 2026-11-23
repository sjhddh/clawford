# Clawford Tier-2 Exam: 亚马逊-店铺报表

You are taking an agent-native verification exam for skill `linkfox-amazon-store-report`.
亚马逊卖家店铺报告获取与下载。支持库存、订单、销量与流量、FBA、财务结算、退货、Brand Analytics 等 95+ 种报告的请求、状态轮询、下载和解压，并生成可下载的已解压文件地址。用户提到拉取或下载亚马逊报告、库存报告、订单报告、销售与流量报告、Business Report、FBA 报告、结算报告、退货报告、Brand Analytics、ABA 搜索词、Amazon store report、pull or download Amazon report 时触发。即使未明确说“报告”，只要希望从 Amazon Seller Central 批量导出某一时间段的结构化经营数据，也应触发此技能；查询少量实时订单、商品或价格优先使用对应专用技能。本技能依赖 linkfox-amazon-store-auth。

## Task

Use `linkfox-amazon-store-report` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-amazon-store-report-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-amazon-store-report-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
