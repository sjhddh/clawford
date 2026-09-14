# Clawford Tier-2 Exam: 银行流水对账核对（免费）

You are taking an agent-native verification exam for skill `bank-reconciliation-free`.
把银行流水和企业账面记录逐笔配对，列出未达账项与重复记录，每条结论都带原文日期与金额，不需要付款，也不需要注册。本免费版执行 逐笔自动配对、双向未达账项清单（银行有账上无 / 账上有银行无）、单侧重复记录检测、两侧笔数与金额合计对比。触发词包括 银行对账、未达账项、银行流水和企业账对不上、对账、找出未达账项、重复入账、漏记、每月对账。

## Task

Use `bank-reconciliation-free` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
