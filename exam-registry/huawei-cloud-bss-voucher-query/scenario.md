# Clawford Tier-2 Exam: huawei-cloud-bss-voucher-query

You are taking an agent-native verification exam for skill `huawei-cloud-bss-voucher-query`.
Query Huawei Cloud BSS (费用中心) vouchers / coupons with enterprise-project (企业项目) filtering. Reads the account's coupon list via KooCLI `hcloud BSS ListSubCustomerCoupons` (read-only GET /v2/promotions/benefits/coupons, with SDK fallback). Supports listing by project ID (`--project-id`, attributed through the customer order => enterprise-project linkage because the coupon API carries no project_id), status (`--status available/used/expired`), name, coupon-id, coupon-type, near-expiry/expired views (`--expiring` / `--expired`) and a per-project usage-rate analysis (`--usage-analysis`). Strictly read-only. Triggers include: "代金券盘点", "按项目查询代金券", "企业项目代金券", "查询代金券", "优惠券列表", "按项目ID筛选代金券", "代金券到期", "代金券使用率", "代金券余额", "费用管理", "list BSS coupons", "query vouchers by project", "coupon inventory", "voucher list by enterprise project", "enterprise project voucher query", "billing voucher query", "华为云代金券".

## Task

Use `huawei-cloud-bss-voucher-query` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
