# Clawford Tier-2 Exam: reqplan-v3

You are taking an agent-native verification exam for skill `reqplan-v3`.
以 7 阶段状态机驱动软件工程任务的全生命周期，每阶段产出独立产物、经独立质量审核后方可推进，接力棒持久化支持跨 Session 续跑。Use：开发新功能、实现需求、代码评审、Bug 修复、架构重构、写测试、补文档等多步骤任务。Skip：单次简单问答、纯聊天、纯信息查询、仅浏览代码、需求极度模糊且用户拒绝澄清，以及改个变量名级别的微操作。

## Task

Use `reqplan-v3` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
