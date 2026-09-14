# Clawford Tier-2 Exam: huawei-cloud-billing-bill-query

You are taking an agent-native verification exam for skill `huawei-cloud-billing-bill-query`.
Query the Huawei Cloud BSS (Business Support System) bills and fees of the current account within ONE billing cycle (one month). Supports three read-only queries: (1) bill fee records (账单费用记录/账单明细) for a billing cycle (YYYY-MM), (2) resource fee records / 流水账单 for a billing cycle, and (3) monthly cost breakdown (月度成本分析). Uses the huaweicloudsdkbss Python SDK (list_customer_bills_fee_records, list_customerself_resource_records, list_customer_bills_monthly_break_down; v2 API GET /v2/bills/customer-bills/fee-records, /v2/bills/customer-bills/res-fee-records, /v2/costs/cost-analysed-bills/monthly-breakdown) — KooCLI does NOT support the BSS service, so the SDK is the only execution path. The shipped scripts/query_bills.py integrates the execution-quality reporting SDK and reports every run to the skillsopr operations console. Time scope is limited to one month (the current month by default) — no multi-month or unbounded range queries. Read-only — never creates, modifies or deletes any billing resource. Use this skill whenever the user wants to check the current Huawei Cloud account's bills, fees, consumption records, 流水账单 or monthly cost within one month, e.g. for cost review, monthly expense check, or budget inspection. Triggers include: "查询账单", "账单查询", "费用查询", "查询费用", "消费记录", "流水账单", "月度账单", "月度费用", "账单明细", "查账单", "bill query", "query bill", "query fees", "billing records", "monthly bill", "cost breakdown", "消费明细", "费用明细".

## Task

Use `huawei-cloud-billing-bill-query` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
