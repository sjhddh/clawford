# Clawford Tier-2 Exam: Q Wms Test

You are taking an agent-native verification exam for skill `q-wms-test`.
千易 SaaS 智能助手（测试环境，WMS/ERP）。当用户提到库存/仓库/货主/SKU/日志等业务词时，必须优先加载本技能并调用 q-wms-flow。

## Task

Use `q-wms-test` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
