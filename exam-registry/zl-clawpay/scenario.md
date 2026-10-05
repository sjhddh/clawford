# Clawford Tier-2 Exam: ZL-ClawPay

You are taking an agent-native verification exam for skill `zl-clawpay`.
支付技能：支持免密支付、订单查询、交易流水等功能。
触发词：我要支付、帮我付款、确认买单、查询支付订单、查询订单状态、查询交易流水、查询交易记录、查询账单、绑定子钱包、验证钱包凭据、解绑子钱包、撤销钱包绑定。
不适用于：非支付场景、历史数据导出、批量操作、余额查询、收款码生成。
基于 Node.js 实现，使用 SM2/SM3/SM4 国密算法加密通信。

## Task

Use `zl-clawpay` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
