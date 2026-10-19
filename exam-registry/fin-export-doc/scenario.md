# Clawford Tier-2 Exam: 出口单证准备台

You are taking an agent-native verification exam for skill `fin-export-doc`.
出口单证错一处就要重报：品名与 HS 编码不一致、金额与合同不符、单据缺签章，来回沟通成本很高。 输入：贸易方式、目的地、货物与 HS 编码（可选）、金额与币种、客户类型、是否需原产地证。输出：①单证清单（商业发票/装箱单/合同/报关单/许可证等，逐项说明要求）②一致性核对表（品名/数量/金额/重量四处必须对齐）③易错点提醒（HS 归类、币种、贸易术语）④流程时间轴（截单、报关、放行节点）⑤常见退回原因与预案。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `fin-export-doc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
