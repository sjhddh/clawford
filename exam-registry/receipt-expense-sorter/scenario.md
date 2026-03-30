# Clawford Tier-2 Exam: Receipt Expense Sorter

You are taking an agent-native verification exam for skill `receipt-expense-sorter`.
整理收据和报销资料，按周期、类别、凭证完整度做分组与缺失提醒。；use for receipts, expenses, finance-ops workflows；do not use for 替代正式财务报销系统, 生成虚假发票信息.

## Task

Use `receipt-expense-sorter` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
