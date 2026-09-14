# Clawford Tier-2 Exam: 独立教师工作台

You are taking an agent-native verification exam for skill `xiaozhi-teach-solo-dashboard`.
把独立教师分散在课表、学员卡、作业、家长沟通和课时包里的信息，只读聚合成一张可执行的日工作台。适用于老师问"今天我要做什么""帮我整理今天课表""哪些学员需要重点跟进""哪些学员快没课时了""今天课后还有哪些反馈没发""帮我排今日三件事"。流程：只读工作空间 → 按 7 区块归类 → 依字段数值标记风险学员 → 给出今日最重要的三件事。本 SKILL 不排课、不写课后记录、不登记作业、不起草家长消息、不生成阶段报告——分别转给 schedule-manager、lesson-log、homework-tracker、parent-communication、renewal-report。

## Task

Use `xiaozhi-teach-solo-dashboard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
