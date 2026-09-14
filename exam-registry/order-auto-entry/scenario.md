# Clawford Tier-2 Exam: 邮箱订单自动录入飞书

You are taking an agent-native verification exam for skill `order-auto-entry`.
开箱即用的采购订单自动审核 Skill：读取本地订单或飞书邮箱附件，调用 Laiye ADP 识别跨国采购订单，初始化/写入飞书多维表格订单工作台，上传订单源文件，并给审核负责人发送结构化私信，让业务人员只盯未匹配到内部商品、价格异常、新客户、币种异常等异常。

## Task

Use `order-auto-entry` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
