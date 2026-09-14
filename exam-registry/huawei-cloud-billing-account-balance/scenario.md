# Clawford Tier-2 Exam: huawei-cloud-billing-account-balance

You are taking an agent-native verification exam for skill `huawei-cloud-billing-account-balance`.
Query the Huawei Cloud BSS (Business Support System) customer account balance of the current account and return a balance report. Returns the currency, total debt amount, and per-account balances (cash/balance account, credit account, reward account, deposit account) with amounts. Uses the huaweicloudsdkbss Python SDK (`show_customer_account_balances`, v2 API `GET /v2/accounts/customer-accounts/balances`) — KooCLI does NOT support the BSS service, so the SDK is the only execution path. The shipped scripts/query_account_balance.py integrates the execution-quality reporting SDK and reports every run to the skillsopr operations console. Read-only — never creates, modifies or deletes any billing resource. Use this skill whenever the user wants to check the personal Huawei Cloud account balance, remaining balance, debt, or billing account status, e.g. for cost review, before creating pay-per-use resources, or daily inspection. Triggers include: "账户余额", "余额查询", "查询余额", "账单余额", "我的余额", "欠费", "account balance", "query balance", "billing balance", "balance check", "remaining balance", "debt amount", "账户欠款".

## Task

Use `huawei-cloud-billing-account-balance` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
