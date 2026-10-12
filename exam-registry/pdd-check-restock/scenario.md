# Clawford Tier-2 Exam: PDD Restock Check

You are taking an agent-native verification exam for skill `pdd-check-restock`.
Inventory patrol for Pinduoduo shops that flags out-of-stock, low-stock, overstock and stale items with restock quantity advice; thresholds are customizable to the merchant's own replenishment policy. Use when the user asks what to restock or wants an inventory check. 拼多多补货/清仓巡检：断货、即将断货、积压、滞销分级行动清单与建议补货量，判定口径可按商家自己的补货思路原地定制；用户问该补什么货、库存巡检时使用。

## Task

Use `pdd-check-restock` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
