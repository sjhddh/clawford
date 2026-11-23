# Clawford Tier-2 Exam: huawei-cloud-voucher-list

You are taking an agent-native verification exam for skill `huawei-cloud-voucher-list`.
1. List Huawei Cloud BSS (费用中心) vouchers / coupons of a tenant account through KooCLI (hcloud BSS ListSubCustomerCoupons — read-only GET /v2/promotions/benefits/coupons), with an automatic fallback to the official huaweicloudsdkbss v2 SDK when hcloud is not installed. 2. Three output modes: full-field table (default, every returned field including 券ID/券码/状态/类型/面额/余额/有效期/促销计划), --json (raw response array), and --names-only (compact voucher / plan-name list). 3. Supports --status / --name / --coupon-id filtering, region override, and automatic offset paging. --coupon-id and --status are real coupon-list query parameters (status accepts 1-5 or textual aliases such as available / used / expired / reclaimed); --name is applied client-side because the API has no name parameter. 4. Explicit error hints for an empty voucher list (「当前区域无 BSS 代金券」), 403 / insufficient IAM permission (「无权限访问 BSS 代金券，请检查 IAM 权限」), missing or invalid AK/SK credentials, and hcloud not installed. 5. Built-in write-intent guard: any mutating intent (create / delete / update / reclaim / transfer / retrieve / adjust / send / freeze / cancel) or any operation other than the read-only coupon list is rejected before execution — this skill is strictly read-only. 6. Triggers include: "代金券盘点", "代金券列表", "查询代金券", "优惠券列表", "费用管理", "list BSS coupons", "list vouchers", "coupon inventory", "voucher list", "华为云代金券", "billing voucher query". 7. Offline unit tests (mocked hcloud subprocess) cover output modes, filters, paging, error scenarios, SDK fallback, and the write-intent guard.

## Task

Use `huawei-cloud-voucher-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
