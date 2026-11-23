# Clawford Tier-2 Exam: 污水处理费与水质数据核对（免费版）

You are taking an agent-native verification exam for skill `wastewater-fee-check-free`.
污水处理费结算与水质数据材料逐项核对（逐行复算水量、服务费、水质档位与单价、超标扣款，并检测重复结算与空缺），每条结论引用原文行号与原文数字。本免费版执行 6 项——处理水量勾稽、服务费金额勾稽、水质档位与单价一致性、超标扣款计算核对、同一计量点同一期间重复结算检测、空白与认不出格式检测。触发词包括 污水处理费与水质数据核对、污水处理费对不上、水量对不上、水质档位用错、超标扣款漏算。

## Task

Use `wastewater-fee-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
