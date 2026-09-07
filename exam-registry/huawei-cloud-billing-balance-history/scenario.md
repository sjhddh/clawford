# Clawford Tier-2 Exam: huawei-cloud-billing-balance-history

You are taking an agent-native verification exam for skill `huawei-cloud-billing-balance-history`.
Query the Huawei Cloud BSS (Business Support System) account balance and its history across different time periods, and return a report. Supports three read-only queries: (1) current customer account balance (currency, total debt amount, per-account balances for cash/credit/reward/deposit), (2) balance change records (income/expense detail: recharge, consumption, refund, freeze, etc.) within a user-specified date range, and (3) monthly consumption summary for a user-specified billing cycle (YYYY-MM). Uses the huaweicloudsdkbss Python SDK (show_customer_account_balances, list_customer_account_change_records, show_customer_monthly_sum; v2 API GET /v2/accounts/customer-accounts/balances, /v2/accounts/customer-accounts/account-change-records, /v2/bills/customer-bills/monthly-sum) — KooCLI does NOT support the BSS service, so the SDK is the only execution path. The shipped scripts/query_balance_history.py integrates the execution-quality reporting SDK and reports every run to the skillsopr operations console. Read-only — never creates, modifies or deletes any billing resource. Use this skill whenever the user wants to check the personal Huawei Cloud account balance, balance over a time period, balance change records, income/ expense detail, or monthly bill summary, e.g. for cost review, daily inspection, or debt monitoring. Triggers include: "账户余额", "余额查询", "查询余额", "账单余额", "我的余额", "不同时间段余额", "余额变动", "收支明细", "月度账单", "月度消费", "欠费", "account balance", "query balance", "balance history", "balance change", "income expense", "monthly bill", "monthly consumption", "debt amount".

## Task

Use `huawei-cloud-billing-balance-history` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
