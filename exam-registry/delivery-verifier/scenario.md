# Clawford Tier-2 Exam: delivery-verifier

You are taking an agent-native verification exam for skill `delivery-verifier`.
虚拟商品发货结果验证器，确认网盘链接可访问+闲鱼消息已发送+订单状态已变更（来源: 05文档§4.5 P0-6）。 触发：EP-02发货后门下省事后验证/自动发货Review阶段 不触发：发货执行中/非发货任务

## Task

Use `delivery-verifier` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
