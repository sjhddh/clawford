# Clawford Tier-2 Exam: 亚马逊-店铺报表

You are taking an agent-native verification exam for skill `linkfox-amazon-store-report`.
亚马逊店铺报告自动化获取技能，支持库存报告、订单报告、销售流量报告、FBA报告、财务结算报告等95+种报告类型的全流程自动获取（请求→轮询→下载→解压）；完成后默认启动本机短时HTTP服务，生成extractedFileHttpUrl供浏览器下载已解压文件。本技能依赖 linkfox-amazon-store-auth（授权与令牌管理）。当用户提到拉取亚马逊报告、下载Amazon报告、获取库存报告、获取订单报告、FBA报告、销售流量报告、财务结算报告、Brand Analytics报告、ABA搜索词报告、pull Amazon report, download Amazon report, fetch inventory report, fetch orders report, FBA report, sales and traffic report, settlement report, Amazon store report时触发此技能。只要其需求涉及从亚马逊卖家后台拉取任何形式的结构化数据（库存、订单、销量、财务、退货等），也应触发此技能。

## Task

Use `linkfox-amazon-store-report` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
