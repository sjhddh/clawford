# Clawford Tier-2 Exam: huawei-cloud-voucher-send

You are taking an agent-native verification exam for skill `huawei-cloud-voucher-send`.
1. Issue (发放) new Huawei Cloud BSS (费用中心) vouchers / coupons to sub-customers / partners through KooCLI (hcloud BSS CreatePartnerCoupons — mutating POST /v2/promotions/benefits/partner-coupons), with an automatic fallback to the official huaweicloudsdkbss v2 SDK when hcloud is not installed. 2. Zero-config operation: the invocation path is chosen automatically (CLI first, SDK fallback); credentials are loaded only from the hcloud profile or the standard Huawei Cloud environment variables. 3. Batch-aware: one call issues coupons to many sub-customer accounts (repeatable --customer-id / comma --customer-ids / --customers-file). 4. Idempotent: a per-customer natural key is remembered in a local ledger, so retrying a partially failed batch never double-issues an already-issued customer; --force overrides, --no-idempotency disables. 5. Safe by default for a money-moving, irreversible operation: a live send requires the explicit --confirm flag; --dry-run previews the exact request without issuing anything. 6. Graded errors: ConfigError (missing/invalid parameters or credentials) / AuthError (401/403 / insufficient IAM permission) / ApiError (unexpected API or network failure), each with an actionable hint. 7. Offline unit tests (mocked hcloud subprocess) cover validation, batch construction, idempotency, error grading, SDK fallback and all CLI modes. 8. Triggers include: "发放代金券", "给子客户发券", "发放优惠券给子客户", "合作伙伴发券", "send voucher", "issue coupon", "create partner coupons", "华为云代金券发放", "BSS coupon issue". 9. Write-intent guard: only the issue-coupon operation ever executes; reclaim / transfer / freeze / individually-issued-coupon mutation operations are rejected — this skill issues new coupons only.

## Task

Use `huawei-cloud-voucher-send` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
