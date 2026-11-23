# Clawford Tier-2 Exam: financial-statement-adjustment

You are taking an agent-native verification exam for skill `financial-statement-adjustment`.
存量财务报表在原表基础上改数字并保持三表勾稽关系。当用户要求「在原报表上改某些数字，其他数据跟着调整且格式完全不变」时使用：资产负债表/利润表/现金流量表的目标值调整、未分配利润与利润总额联动、勾稽校验。

## Task

Use `financial-statement-adjustment` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
