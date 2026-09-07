# Clawford Tier-2 Exam: 家长沟通助手

You are taking an agent-native verification exam for skill `xiaozhi-teach-parent-communication`.
帮独立教师把"临时想起来发条消息"变成有节奏、不制造焦虑的家长沟通。适用于老师说"帮我想个消息发给家长""家长问成绩怎么回""孩子这次退步了怎么说""家长很担心怎么回""续课怎么跟家长说""家长群里发什么""家长不太配合怎么办"。流程：认场景 → 查授权位 → 按具体/低焦虑/可操作三原则起草 → 检查频率是否过密 → 记录渠道与发送状态。本 SKILL 只起草不发送，唯一的持久化写入是 parentCommunicationLogs[]。不写课后记录、不登记作业、不排课、不做阶段报告，也不改学员档案（status、沟通偏好、授权位、保留期一概不动）——素材来自 lesson-log 与 homework-tracker，阶段报告转 renewal-report，档案改动转 student-intake。

## Task

Use `xiaozhi-teach-parent-communication` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
