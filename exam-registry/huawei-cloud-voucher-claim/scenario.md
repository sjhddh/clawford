# Clawford Tier-2 Exam: huawei-cloud-voucher-claim

You are taking an agent-native verification exam for skill `huawei-cloud-voucher-claim`.
1. Claim (领取 / 划拨) an amount of a Huawei Cloud BSS (费用中心) voucher / coupon for an enterprise sub-account through the official BSS API POST /v2/enterprises/multi-accounts/transfer-coupon (operation ClaimEnterpriseMultiAccountCoupon) — the KooCLI path is attempted first when the local KooCLI build exposes a BSS service, with an automatic fallback to the official huaweicloudsdkbss v2 SDK otherwise. 2. After a successful claim the skill runs the read-only coupon-list API (ListSubCustomerCoupons — GET /v2/promotions/benefits/coupons) and prints the resulting coupon inventory: 券ID / 券码 / 面额 / 余额 / 有效期 / 状态 (table, --json, or --no-list to skip). 3. Zero-config operation: the invocation path is chosen automatically (CLI first, SDK fallback); credentials are loaded only from the hcloud profile or the standard Huawei Cloud environment variables. 4. Idempotent: the API's trans_id (交易序列号) is derived deterministically from (customer, coupon, amount) so a retry reuses it and the server rejects the duplicate submission (CBC.99007009); a local ledger additionally skips a retry inside the idempotency window. --force overrides, --no-idempotency disables. 5. Safe by default for a money-moving, irreversible operation: a live claim requires the explicit --confirm flag (otherwise the run only previews the request and exits 2); --dry-run previews the exact request. 6. Graded errors: ConfigError (missing/invalid parameters or credentials) / AuthError (401/403 / insufficient IAM permission) / ApiError (unexpected API, network, or duplicate trans_id), each with an actionable hint. 7. Write-intent guard: only the claim operation ever executes; reclaim / transfer-away / freeze / cancel / individually-issued-coupon mutation operations are rejected — this skill claims coupons only. 8. Offline unit tests (mocked hcloud subprocess) cover validation, command construction, idempotency, error grading, SDK fallback and all CLI modes. 9. Triggers include: "领取代金券", "代金券领取", "领取优惠券", "企业子账号领券", "划拨代金券", "claim voucher", "claim coupon", "enterprise coupon claim", "华为云代金券领取", "BSS coupon claim".

## Task

Use `huawei-cloud-voucher-claim` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
