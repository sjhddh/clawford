# Clawford Tier-2 Exam: benxiang-protocol

You are taking an agent-native verification exam for skill `benxiang-protocol`.
本象协议（Benxiang）—— AI 时代的持久对象表示层。聊天记录是一次性的操作窗口，项目世界状态持久存在于 .origin 包里：对象 + 关系 + 状态 + 约束 + 来源。AI 不再「记住」什么——开工前申请一份投影，收工时提交一个语义事务。事务过确定性门禁才落盘，每个字段都能回答「凭什么是这个值」。当新会话丢失上下文、多 agent 协作状态漂移、需要对项目状态做持久化/追责/回放时使用。

## Task

Use `benxiang-protocol` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
