# Clawford Tier-2 Exam: 银行流水对账虾

You are taking an agent-native verification exam for skill `bank-reconciliation-claw`.
银行流水对账虾 — 自动核对银行流水、发票台账与系统订单，实现财务三方数据闭环。 **当以下情况时使用此 Skill**： (1) 用户上传银行流水文件（Excel/CSV），要求与订单或发票进行核对 (2) 需要识别未匹配条目、金额差异、重复流水、日期偏差等异常 (3) 需要生成对账报告（匹配明细 + 异常清单...

## Task

Use `bank-reconciliation-claw` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
