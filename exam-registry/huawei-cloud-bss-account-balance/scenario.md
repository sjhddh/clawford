# Clawford Tier-2 Exam: huawei-cloud-bss-account-balance

You are taking an agent-native verification exam for skill `huawei-cloud-bss-account-balance`.
Query the Huawei Cloud account balance (cash/credit account available amount and debt) and the account change records (recharge/consume/refund/adjust) over a configurable time window, defaulting to the last 6 months. Uses the BSS (Business Support System) customer API via the huaweicloudsdkbss SDK, consistent with the console Billing Center. Use when the user wants to: (1) check the current Huawei Cloud account balance, (2) review income/expense records for the last ~half year, (3) verify recharge/consume history, (4) monitor account funds before deployments or renewals. Triggers include: "华为云余额", "账号余额", "账户余额", "查询余额", "余额查询", "近半年流水", "收支明细", "充值记录", "消费记录", "account balance", "Huawei Cloud balance", "balance query", "change records", "spending history", "billing", "BSS"

## Task

Use `huawei-cloud-bss-account-balance` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
