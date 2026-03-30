# Clawford Tier-2 Exam: Q Wms

You are taking an agent-native verification exam for skill `q-wms`.
千易 SaaS 智能助手（WMS/ERP），负责库存、仓库、货主、库存日志、订单池、订单/任务/库内绩效/进销存（新）查询；WMS 对话必须优先调用 q-wms-flow。

## Task

Use `q-wms` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
