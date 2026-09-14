# Clawford Tier-2 Exam: GTYT Reconcile (共同赢账单 vs 到货单对账)

You are taking an agent-native verification exam for skill `gtyt-reconcile`.
共同赢（GTYT）供应商账单与到货单的三阶段对账流程。用于按月核对「共同赢X月账单-上海-共同赢.xls」与「到货单明细表」在每店每产品上的「单价」「数量」「金额」是否一致，输出两份 Excel：(1) 两表金额差异对比 .xls（全量店名对比 + 25 店差异清单），(2) 共同赢X月账单-已标差异 .xls（在原账单上用黄色背景标出每个差异单元格）。触发关键词：「对账」「核对」「共同赢」「到货单差异」「标差异」「账单 vs 到货」。

## Task

Use `gtyt-reconcile` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
