# Clawford Tier-2 Exam: Excel 批量导入

You are taking an agent-native verification exam for skill `pmclite-excel-import`.
把客户手里格式不规范的 Excel（物料表、产品表、BOM、工单、库存）导进轻排：读懂表头、按导入契约转换列名、先预览再落库。 用户说“把这个 Excel 导进轻排”“这批物料怎么批量导进去”“我的表头对不上系统字段”“初始化一下基础资料”“BOM 表能不能直接导入”“库存盘点表导进去”时使用；用户拿着一张表说‘这个怎么进系统’也属于本技能。 不触发：排产、交期评审、缺料检查、插单测算、报工（用 pmclite-scheduler）；只解释已有排程（用 pmclite-schedule-explainer）。本技能只做基础资料与初始单据的导入，不改排程、不调整工单优先级。

## Task

Use `pmclite-excel-import` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
